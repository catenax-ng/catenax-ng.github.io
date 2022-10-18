---
title: How to setup Hashicorp Vault
---

:::info

This guide is only for those who operate the environment

:::

This how-to will guide you through the deployment and configuration of Hashicorp Vault

## Create an AKS cluster for vault

main.tf contains resources that will be created, e.g.

```
module "resource_group" {
  source = "../modules/resource_group"

  resource_group_name = var.environment_name
}

module "aks" {
  source = "../modules/aks_cluster"

  aks_cluster_name   = "cx-${var.environment_name}-aks"
  aks_location       = module.resource_group.resource_location
  aks_resource_group = module.resource_group.resource_group_name

  aks_service_principal_client_id     = var.service_principal_client_id
  aks_service_principal_client_secret = var.service_principal_client_secret
  aks_dns_prefix                      = "cx-${var.environment_name}-aks"

  k8s_vm_size = var.k8s_vm_size
  k8s_cluster_node_count = var.k8s_cluster_node_count
}

module "public_ip" {
  source = "../modules/public_ip"

  public_ip_name      = "cx-${var.environment_name}-public-ip"
  resource_location   = module.resource_group.resource_location
  resource_group_name = module.aks.node_resource_group
}

module "a_record" {
  source = "../modules/a_record"

  record_name = "*.${var.environment_name}"
  target_resource_id = module.public_ip.id
  resource_group_name = "cxtsi-demo-shared-rg"
  zone_name = "demo.catena-x.net"
}
```

variables.tf contains all parameters of the resources, e.g.

```
variable "environment_name" {
  description = "Name of the environment to create, i.e. 'core'. Will be used in several resource names"
  type        = string
}

variable "service_principal_client_id" {
  description = "USE TF_VAR_service_principal_client_id! The client ID of the service principal that will be used to create the AKS cluster."
  type        = string
}

variable "service_principal_client_secret" {
  description = "USE TF_VAR_service_principal_client_secret! The secret of the service principal that will be used to create the AKS cluster."
}

variable "k8s_vm_size" {
  description = "The Azure VM Size string i.e. Standard_D2_v2 or Standard_D8s_v3"
  type        = string
  default     = "Standard_D8s_v3"
}

variable "k8s_cluster_node_count" {
  description = "The number of kubernetes nodes to create for the k8s cluster"
  type        = number
  default     = 3
}
```

environments/vault.tfvars contains variables that are specific to the environment, and override the ones in variables.tf

```
environment_name="vault"
k8s_vm_size="Standard_B2s"
```

[More information on AKS cluster creation](https://catenax-ng.github.io/docs/internal/how-to-setup-aks-cluster-via-terraform)

## Deploy Vault

ArgoCD application

```
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: vault
  namespace: argocd
  labels:
    environment: core
spec:
  project: default
  source:
    repoURL: 'https://github.com/catenax-ng/k8s-cluster-stack'
    path: apps/vault
    targetRevision: 'HEAD'
    plugin:
      name: argocd-vault-plugin-helm-args
      env:
        - name: AVP_SECRET
          value: vault-secret
        - name: helm_args
          value: '-f values.yaml -f values-vault-vault.yaml'
  destination:
    namespace: vault
    name: vault-cluster
    server: ''
  syncPolicy:
    syncOptions:
      - Validate=false
      - CreateNamespace=true
      - PrunePropagationPolicy=foreground
      - PruneLast=true
    retry:
      limit: 5
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m
  ignoreDifferences: # https://github.com/argoproj/argo-cd/issues/4276#issuecomment-908455476
    - group: admissionregistration.k8s.io
      kind: MutatingWebhookConfiguration
      jqPathExpressions:
        - .webhooks[]?.clientConfig.caBundle
```

Helm chart

Chart.yaml

```
apiVersion: v2
name: vault
description: Hashicorp vault
type: application
version: 0.0.2
appVersion: 0.1
```

values.yaml

```
domain: "demo.catena-x.net"
vault:
  server:
    ha:
      config: |
        ui = true
        listener "tcp" {
          tls_disable = 1
          address = "[::]:8200"
          cluster_address = "[::]:8201"
        }
        storage "raft" {
          path = "/vault/data"
        }
        service_registration "kubernetes" {}
        disable_mlock = true
      enabled: true
      raft:
        enabled: true
        config: |
          ui = true
          listener "tcp" {
            tls_disable = 1
            address = "[::]:8200"
            cluster_address = "[::]:8201"
          }
          storage "raft" {
            path = "/vault/data"
          }
          service_registration "kubernetes" {}
          disable_mlock = true
    extraEnvironmentVars:
      VAULT_SEAL_TYPE: "azurekeyvault"
      VAULT_AZUREKEYVAULT_VAULT_NAME: "cx-vault-unseal"
      VAULT_AZUREKEYVAULT_KEY_NAME: "hashicorp-vault-key"
      AZURE_TENANT_ID: "<TENANT ID>"
      AZURE_CLIENT_ID: "<CLIENT ID>"
    extraSecretEnvironmentVars:
      - envName: AZURE_CLIENT_SECRET
        secretName: azure-vault-secret
        secretKey: client-secret

```

Initialization and first time unseal is manual action (for now)

Get the kube config of the vault cluster

```
az login --use-device-code --tenant <tenant_id>
az account set <subscripition_id>
az aks get-credentials --admin --resource-group cx-vault-rg --name cx-vault-aks-services --file $HOME/.kube/cx-vault-admin
```

Initialize one of the vault instances and save the root token and unseal keys

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault operator init`

Login with the root token

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault login`

Unseal the first instance by running the following command three times

Each time provide a different unseal key out of the five that are generated during initialization

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault operator unseal`

Display the status of the first instance and note the internal url / ip address of the first node that will be the leader

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-0 -- /bin/sh vault status`

If the initialization and unseal were successful, you will see the following status

...\
Initialized              true\
Sealed                   false\
...

Join the other (two) instances as followers to the first instance

Provide the vault root token when prompted

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault login`

Join the first instance using its internal url or ip address

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault operator raft join http://vault-0.vault-internal:8200`

Check the status of the following instances

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault status`

In case sealed is true, then unseal them as well, again run the command three times providing three different unseal keys out of the five

`kubectl --kubeconfig=.kube/cx-vault-admin -n vault exec pod/vault-1 -- /bin/sh vault operator unseal`

Once all instances have been unsealed, no further unseal will be necessary, as Azure keyvault will take care of it.

## Configure Vault

Clone GitHub repository k8s-cluster-stack

`git clone https://github.com/catenax-ng/k8s-cluster-stack.git`

Get the approle ID and approle secret ID from Azure Keyvault cx-vault-unseal secrets using Azure CLI

```
az login --use-device-code --tenant <Tenant ID>
az account set <Subscription ID>
az keyvault secret show --vault-name cx-vault-unseal --name vault-approle-id | jq '.value'
az keyvault secret show --vault-name cx-vault-unseal --name vault-approle-secret-id | jq '.value'
```

Get the approle ID and approle secret ID from Azure Keyvault cx-vault-unseal secretsfrom the Azure portal

[Approle ID](https://portal.azure.com/#@catenax.onmicrosoft.com/asset/Microsoft_Azure_KeyVault/Secret/https://cx-vault-unseal.vault.azure.net/secrets/vault-approle-id)

[Approle secret ID](https://portal.azure.com/#@catenax.onmicrosoft.com/asset/Microsoft_Azure_KeyVault/Secret/https://cx-vault-unseal.vault.azure.net/secrets/vault-approle-secret-id)

Configure Vault in Terraform code

main.tf

```
locals {
  teams = [
    "bpdm",
    "catenax-at-home",
    "dft",
    "edc",
    "esc-backbone",
    "essential-services",
    "integrity-demonstrator",
    "managed-identity-wallets",
    "material-pass",
    "portal",
    "semantics",
    "team-example",
    "test-data-generator",
    "traceability-foss",
    "traceability-irs"
  ]
}


resource "vault_mount" "devsecops-secret-engine" {
  path        = "devsecops"
  type        = "kv-v2"
  description = "Secret engine for DevSecOps team"
}

resource "vault_mount" "product-team-secret-engines" {

  for_each = toset( local.teams )

  path        = each.key
  type        = "kv-v2"
  description = "Secret engine for team ${each.key}"
}

resource "vault_policy" "product-team-policies" {

  for_each = toset(local.teams)

  name   = each.key
  policy = <<EOT
path "${each.key}/*" {
  capabilities = [ "create", "read", "update", "delete", "list" ]
}
EOT
}

resource "vault_policy" "product-approle-read-only-policies" {

  for_each = toset(local.teams)

  name   = "${each.key}-ro"
  policy = <<EOT
path "${each.key}/*" {
  capabilities = [ "read" ]
}
EOT
}

# https://www.vaultproject.io/docs/auth/jwt
resource "vault_jwt_auth_backend" "github-oidc-provider" {
  description        = "Configuration for GitHub as OIDC provider"
  path               = "github"
  type               = "oidc"
  # https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-hashicorp-vault
  oidc_discovery_url = "https://token.actions.githubusercontent.com"
  oidc_client_id     = var.oidc_client_id
  oidc_client_secret = var.oidc_client_secret
  default_role       = "default"
  bound_issuer       = "https://token.actions.githubusercontent.com"
  tune {
    listing_visibility = "unauth"
  }
}

resource "vault_jwt_auth_backend_role" "default" {

  backend        = vault_jwt_auth_backend.github-oidc-provider.path
  role_name      = "default"
  token_policies = ["default"]
  oidc_scopes    = ["groups"]

  user_claim            = "email"
  groups_claim          = "groups"
  role_type             = "oidc"
  allowed_redirect_uris = [
    "${var.vault_address}/ui/vault/auth/${vault_jwt_auth_backend.github-oidc-provider.path}/oidc/callback",
    "http://localhost:8200/ui/vault/auth/oidc/oidc/callback"
  ]
}
```

variables.tf

```
variable "vault_address" {
  description = "URL of the vault instance to configure"
  type        = string
  default     = "https://vault.vault.catena-x.net"
}

variable login_approle_role_id {
  description = "The role_id of the approle, terraform uses to authenticate in vault"
  type        = string
}

variable login_approle_secret_id {
  description = "The secret_id of the approle, terraform uses to authenticate in vault"
  type        = string
}

variable "oidc_client_id" {
  description = "The client ID used for GitHub OIDC"
  type        = string
}

variable "oidc_client_secret" {
  description = "The client secret used for GitHub OIDC"
  type        = string
}
```

Plan and apply with Terraform

```
cd k8s-cluster-stack/terraform/02_vault
terraform init
terraform plan -var='login_approle_role_id=${APPROLE_ID}' -var='login_approle_secret_id=${APPROLE_SECRET_ID}' -out .terraform/vault.tfplan
terraform apply ".terraform/vault.tfplan"
```
