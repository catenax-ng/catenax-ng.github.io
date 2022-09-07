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

Terraform is run by CLI on your local machine. We are not using any Pipelines for that. Therefore you need to install the
terraform CLI for your operating system either by package manager for your OS, or by downloadable installer
from [https://www.terraform.io/downloads](https://www.terraform.io/downloads). You can verify your installation by
running a command like `terraform --version` from your terminal.

To set up the AKS cluster, we need an **Azure Service Principal Account**, currently we're using the
SP `DevSecOpsAutomation` (stored in Vault path: `devsecops/azure/demo.catena-x.net/service-principals/automation`)

> Service principal creation was made with the following commands:
>
> ```shell
> # Login in with Azure account
> az login --tenant catenax.onmicrosoft.com
> # Creating a service principal, without assigning it to any resources/roles yet.
> az ad sp create-for-rbac --skip-assignment
> # You'll need the 'client id' and 'secret id' values later on
> ```

## Terraform state

Terraform uses ['state'](https://www.terraform.io/language/state) to track status and differences of your real world
resources and your configuration. We manage it in the `providers.tf`
for every environment in path `k8s-cluster-stack/terraform/<environment>`

## Creating the AKS cluster

The following steps show you how to...

- initialize terraform
- create a terrform plan
- apply that plan to your Azure subscription

It is assumed, that before running any terraform commands, you cloned
the [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack)
repository. You should then create a folder with the name of the new cluster
in path `/terraform/` containing (only) the following files with the content of e.g. `01_core_cluster`:

`main.tf`
`providers.tf`
`terraform.tfvars`
`variables.tf`

You should then open a terminal session and navigate to the repository path.

### Removing existing terraform config

We always run the AKS cluster creation from a clean working directory. So in case you did run any terraform commands
before, there are some files, that could disturb the clean run. To get rid of these files remove state files, plans and
the .terraform directory

```shell
rm *.tfstate*
rm *.tfplan
rm -rf .terraform
```

### Initialize terraform

Before you can create or apply a terraform plan, you have to [initialize](https://www.terraform.io/cli/commands/init)
the terraform working directory by running `terraform init`.
This will initialize the necessary modules and download plugins for the used providers.

### Creating and applying the terraform plan

A terraform [plan](https://www.terraform.io/cli/commands/plan) is an execution plan that will give you a preview about
the changes to your infrastructure. As input for the plan, you'll need to specify a set of variable values.

An example tfvars file could look like the following:

```hcl
# Example terraform AKS environment variable specification
# /terraform/01_core_cluster/terraform.tfvars
environment_name="core"
k8s_vm_size="Standard_D8s_v4"
k8s_version = "1.24.3"
k8s_cluster_node_count = 3
```

Beside these variables, that you can safely commit to the repository, you also need to specify the
client id, client secret and azure tenant id of the service principal
(which is stored in Vault path: `devsecops/azure/demo.catena-x.net/service-principals/automation`),
that should be assigned to the cluster. Additionally you need the azure subscription id and azure dns subscription id.
For this kind of variables, terraform provides a way to set specific environment variables,
that have to be of the form
`TF_VAR_<variable-name>`. You can set the service principal config like follows:

```shell
export TF_VAR_azure_tenant_id=<tenantID of SP automation> # Login with Azure account
export TF_VAR_service_principal_client_id=<appID of SP automation>
export TF_VAR_service_principal_client_secret=<password of SP automation>
export TF_VAR_azure_subscription_id=<subscription id> # Catena-X Dev/Int
export TF_VAR_azure_dns_subscription_id=<subscription id> # Catena-X Demo/Beta-Test
```

With the variables specified in your tfvars and the service principal config set via environment variable, you can
create the plan and apply it to Azure with the following command:

```shell
# replace <environment> with the actual name of the new created folder (cluster-name)
terraform plan -var-file=<environment>/terraform.tfvars -out <any name>.plan
terraform apply <any name>.plan
```

## Verifying the AKS resources are created

If you successfully applied the terraform plan, you will find a resource group with the naming pattern `cx-<envname>-rg`
in your subscription in the [Azure portal](https://portal.azure.com/). Part of that resource group will be your newly
created AKS cluster.

You will also find a public IP with the naming pattern `cx-<envname>-public-ip` in a slightly different resource group,
that Azure created automatically for the kubernetes nodes pool.

## Install Core ArgoCD Cluster

To install the initial ArgoCD instance you have to connect ```kubectl``` to the previously created AKS instance.
Therefore open the AKS resource in [Azure portal](https://portal.azure.com/) and follow the _connect_ instructions.
To verify if you are on the right AKS instance: `az account show`

Once you are connected via ```kubectl```, you can use _kustomize_ to apply the necessary kubernetes resources.
From the top level directory of this repository run:

```kubectl apply -k argocd```

> Note: You may have to execute this twice, since we are using ArgoCD CRDs, which are not recognized on the first run.

## Configure GitHub OAuth app for login

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

## Environment provisioning via Core ArgoCD

To deploy applications via the Core ArgoCD to remote clusters, you need to introduce the remote cluster to the
Core ArgoCD instance. Afterwards, you can configure the cluster as destination in the needed ArgoCD ApplicationSets.

### Introducing a new remote cluster

### Adding remote clusters to an ApplicationSet
