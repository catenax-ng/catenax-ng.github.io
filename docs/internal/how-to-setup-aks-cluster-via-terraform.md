---
title: How to setup and AKS cluster via terraform
---

This how-to will guide you through the setup of a new AKS cluster via terraform. It is based on the terraform scripts in
our [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack) repository.

## Prerequisites

Terraform is run by CLI on your local machine. We are not using any Pipelines for that. Therefor you need to install the
terraform CLI for your operating system either by package manager for your OS, or by downloadable installer
from [https://www.terraform.io/downloads](https://www.terraform.io/downloads). You can verify your installation by
running a command like `terraform --version` from your terminal.

We assign service principals to our AKS clusters, that we can later use as technical user for the connection from our
core ArgoCD instance. If you do not already have a service principal, that you want to use, you can create one with the
following commands:

```shell
# Logging in with your personal Azure account
az login --tenant catenax.onmicrosoft.com
# Creating a service principal, without assigning it to any resources/roles yet.
az ad sp create-for-rbac --skip-assignment
```

You'll need the 'client id' and 'secret id' values later on.

## Terraform state

Terraform uses ['state'](https://www.terraform.io/language/state) to track status and differences of your real world
resources and your configuration. While being very useful in most situation, we actively decided to NOT manage/save the
terraform state to track our AKS cluster resources. We think, that sharing and storing the state file is to much of an
effort.

In our case of demonstration environments the impact of recreating the cluster from scratch and deploying all the tools
and apps is not too high.

## Creating the AKS cluster

The following steps show you how to...

- initialize terraform
- create a terrform plan
- apply that plan to your Azure subscription

It is assumed, that before running any terraform commands, you cloned
the [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack)
repository. You should then open a terminal session and navigate to the repository path.

For the following instructions it is also assumed, that you already navigated to the AKS related terraform directory,
which is at `/terraform/01_core_cluster/` in the repository.

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

A terrform [plan](https://www.terraform.io/cli/commands/plan) is an execution plan that will give you a preview about
the changes to your infrastructure. As input for the plan, you'll need to specify a set of variable values. Most of the
variables are already set with sane defaults. A mandatory variable, that you need to specify is `environment_name`. To
set this variable, create a file named after the environment you want to create with the ending '.tfvars' in the
'01_core_cluster/environments/' directory. The value is specified as key-value-pair. Another useful variable that you
can set is `k8s_vm_size`, which will specify the Azure specific VM type, that is used for the k8s nodes.

An example tfvars file could look like the following:

```hcl
# Example terraform AKS environment variable specification
# /terraform/01_core_cluster/core.tfvars
environment_name = "core"
k8s_vm_size      = "Standard_D8s_v4"
```

Beside these variables, that you can safely commit to the repository, you also need to specify the client id and client
secret of the service principal, that should be assigned to the cluster. For this kind of variables, terraform provides
a way to set specific environment variables, that have to be of the form
`TF_VAR_<variable-name>`. You can set the service principal config like follows:

```shell
export TF_VAR_service_principal_client_id=<sp client id>
export TF_VAR_service_principal_client_secret=<sp client secret>
```

With the variables specified in your tfvars and the service principal config set via environment variable, you can
create the plan and apply it to Azure with the following command:

```shell
# replace <environment> with the actual name of the environment you chose
terraform plan -var-file=environments/<environment>.tfvars -out <environment>.plan
terraform apply <environment>.plan
```

## Verifying the AKS resources are created

If you successfully applied the terraform plan, you will find a resource group with the naming pattern `cx-<envname>-rg`
in your subscription in the [Azure portal](https://portal.azure.com/). Part of that resource group will be your newly
created AKS cluster.

You will also find a public IP with the naming pattern `cx-<envname>-public-ip` in a slightly different resource group,
that Azure created automatically for the kubernetes nodes pool.
