---
title: How to setup an AKS cluster via terraform
---

This how-to will guide you through the setup of a new AKS cluster via terraform. It is based on the terraform scripts in
our [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack) repository.
After completing these steps the following resources will be created:

- an [AKS](https://azure.microsoft.com/en-gb/services/kubernetes-service/#overview) cluster
- [ArgoCD](https://argoproj.github.io/cd/) that is accessible via configured domain
- a [default stack](./apps) of applications to support your DevOps activities

## Prerequisites

Set up terraform as described **[here](https://github.com/catenax-ng/k8s-cluster-stack/blob/doc/main/terraform/README.md)**.

To set up the AKS cluster, we need an **Azure Service Principal Account**, currently we're using the
SP `DevSecOpsAutomation` (stored in Hashicorp Vault path: `devsecops/azure/demo.catena-x.net/service-principals/automation`).

Login with Azure account: `az login --tenant catenax.onmicrosoft.com`

> Example Service principal creation if not present:
>
> ```
>az ad sp create-for-rbac --skip-assignment
># You'll need the 'client id' and 'secret id' values later on
> ```

## Configure The New AKS Cluster

### Create subfolder

You should then create a folder with the name of the new cluster
in path `/terraform/` containing (only) the content of e.g. `01_core_cluster`:

`main.tf`,
`providers.tf`,
`terraform.tfvars`,
`variables.tf`

#### Adjust the state placement

Change in `providers.tf` the key value e.g.

```
backend "azurerm" {
    resource_group_name  = "cx-devsecops-tfstates"
    storage_account_name = "cxdevsecopstfstate"
    container_name       = "vault-tfstate"
    key                  = "dev-cluster-terraform.tfstate"
}
```

#### Adjust the variables

Change the environment variables as desired in the `terraform.tfvars`

## Set Additional Variables For CLI And Execute Plan

Beside these variables, that you can safely commit to the repository, you also need to specify the
client id, client secret and azure tenant id of the service principal,
that should be assigned to the cluster (stored in Hashicorp Vault: `devsecops/azure/demo.catena-x.net/service-principals/automation`).
Additionally you need the azure subscription id and azure dns subscription id.
For all these kind of variables, terraform provides a way to set specific environment variables,
that have to be of the form
`TF_VAR_<variable-name>`:

```shell
export TF_VAR_azure_tenant_id=<tenantID of SP automation> # Login with Azure account
export TF_VAR_service_principal_client_id=<appID of SP automation>
export TF_VAR_service_principal_client_secret=<password of SP automation>
export TF_VAR_azure_subscription_id=<subscription id> # Catena-X Dev/Int
export TF_VAR_azure_dns_subscription_id=<subscription id> # Catena-X Demo/Beta-Test
```

With the variables specified in your tfvars and the service principal config set via environment variable,
create a terraform plan and apply

## Verify That The AKS Resources Are Created

If you successfully applied the terraform plan, you will find a resource group with the naming pattern `cx-<envname>-rg`
in your subscription in the [Azure portal](https://portal.azure.com/). Part of that resource group will be your newly
created AKS cluster.

You will also find a public IP with the naming pattern `cx-<envname>-public-ip` in a slightly different resource group,
that Azure created automatically for the kubernetes nodes pool.

## Install ArgoCD Cluster

> Note: following steps need to be executed manually

### Core cluster

:::info

is only needed for creating core ArgoCD

:::

To install the initial ArgoCD instance you have to connect ```kubectl``` to the previously created AKS instance.
Therefore open the AKS resource in [Azure portal](https://portal.azure.com/) and follow the _connect_ instructions.
To verify if you are on the right AKS instance: `az account show`.

Once you are connected via ```kubectl```, you can use _kustomize_ to apply the necessary kubernetes resources.
From the top level directory of this repository run:

```kubectl apply -k argocd```

> Note: You may have to execute this twice, since we are using ArgoCD CRDs, which are not recognized on the first run.

### Configure GitHub OAuth app for login

We enable users of ArgoCD to log in with their GitHub account. To get that working, we need to create an OAuth App
inside
our GitHub organization and configure ArgoCD to use it. We need an OAuth app for each of our ArgoCD instances, since
each instance
will have a unique redirect URL.

You can
follow [the official guide from GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
on how to create an OAuth app.

You'll need to fill in the following information:

- _Application name_: follow the naming pattern of <environment\>-argocd. i.e. core-argocd
- _Homepage URL_: The base URL of the ArgoCD instance. i.e. <https://argo.core.demo.catena-x.net/>
- _Authorization callback URL_: The dex callback URL. i.e. <https://argo.core.demo.catena-x.net/api/dex/callback>

Entering the necessary information and clicking the button _Register Application_ will create the OAuth app and generate
a clientID.
This procedure is the same for grafana for a new environment:

- _Application name_: follow the naming pattern of grafana-<environment\>. i.e. grafana-beta
- _Homepage URL_: The base URL of the ArgoCD instance. i.e. <https://grafana.beta.demo.catena-x.net>
- _Authorization callback URL_: The dex callback URL. i.e. <https://grafana.beta.demo.catena-x.net/login/github>

Next step is to create a clientSecret, by clicking _Generate a new client secret_ in the _Client secrets_ section.
Remember both, clientID and clientSecret, since they are needed for ArgoCD configuration. Also, the clientSecret will
disappear once you refresh the page.
If you accidentally refreshed the page, without remembering the secret, just delete it and create a new one.

Configuring ArgoCD to use the OAuth app is yet still a manual process.
After installing ArgoCD like described in the previous section, you'll find a configMap resource called 'argocd-cm'
in the argocd namespace of the kubernetes cluster. This configMap contains the Dex settings for GitHub login.

You can edit the configMap in place, by connecting to the kubernetes cluster hosting the ArgoCD instance you want to
configure.
Once you are connected via ```kubectl```, you can interactively edit the configMap with this command:
```kubectl -n argocd edit configmap argocd-cm```.
This will open the default editor configured for your shell. You should see a YAML definition similar to this:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: argocd-cm
data:
  dex.config: |
    connectors:
      - type: github
        id: github
        name: GitHub
        config:
          clientID: $dex.github.clientId
          clientSecret: $dex.github.clientSecret
          orgs:
          - name: catenax-ng
  url: https://argo.core.demo.catena-x.net
```

Replace the placeholders ```$dex.github.clientId``` and ```$dex.github.clientSecret```with the values from your newly
created
GitHub OAuth app and save the changes.
Afterwards verify, if you can log in to ArgoCD via GitHub.

### Set up child cluster

#### Environment provisioning via Core ArgoCD

To deploy applications via the Core ArgoCD to remote clusters, you need to introduce the remote cluster to the
Core ArgoCD instance. Afterwards, you can configure the cluster as destination in the needed ArgoCD ApplicationSets.

**in k8s-cluster-stack/apps/argocd/overlays:**  
copy an existing environment folder and rename and make the following modifications
in `configmap/argo-cm.yaml`: change `annotations path` and `url`
in `ingress/ingress-argocd.yaml`: change `rules/host` and `tls/hosts`
regarding the new created cluster.

**in k8s-cluster-stack/apps/ingress-nginx:**  
copy an existing values.yaml, rename and insert actual loadbalancer-IP (public IP in Azure)

**in k8s-cluster-stack/apps/kube-prometheus-stack:**  
copy an existing values.yaml, rename and adjust all places where the environment-name
is mentioned (`root_url`, `client_secret`, `domain`, `cluster`)
and insert `client_id` from GitHub oAuth `grafana-<environment>`

**in k8s-cluster-stack/apps/tls:**  
copy an existing 'values-tls.yaml', rename and change `cluster-name` and `certificate/dnsZone`

**in k8s-cluster-stack/environments**  
copy folder example and adjust
> argo-projects: content is the `product-<product-name>.yaml` which are on ArgoCD
> argo-repos: `product-<product-name>-repo.yaml` which is the secret for private repos
> avp-secrets: content is the `<product-name>-team-vault-secret.yaml`, team-secret engine
> pull-secret: machineuser-pull-secret-ro where to find in Vault

adapt kustomization.yaml regarding the used resources

after changes push to main

#### Adding remote clusters to an ApplicationSet
