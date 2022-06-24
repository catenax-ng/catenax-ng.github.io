---
title: How To Onboard Product-Teams To Any Environment
slug: /how-to-onboard-teams-to-any-environment
---

:::info

This guide is only for those who operate the environment

:::

## Create A Jira Task

:::caution

This chapter needs to be rewritten/redefined due to unclear statements in former version of this document!

:::

### Team Onboarding

1. who wants which access
2. use ‘labels’ for differentiate tasks e.g. 'onboarding', 'maintainer switched'
3. add to current sprint

### Member Onboarding

1. who wants which access
2. use ‘labels’ for differentiate tasks e.g. 'onboarding', 'maintainer switched'
3. add to current sprint

## GitHub - Prerequisites

### Invite Someone To The GitHub Organization

Prerequisites:

- GitHub username, full name or email address of person to onboard
- GitHub team name to invite someone to (the team must have been created by DevSecOps team)

To invite a person to a specific GitHub team, follow these steps:

- In GitHub organization go to [People](https://github.com/orgs/catenax-ng/people)
- Click button _Invite member_ on the right side
- In the field _Search by username, full name or email address_ enter one of the suggestions and select user
- Click on _Invite_ to finally invite someone to CatenaX-NG GitHub organization

:::info

The person must click/accept the invitation to our GitHub organization before someone can be added to one of our
organization teams.

:::

### GitHub Team

If a team requests for initial onboarding to CatenaX-NG GitHub organization, follow these steps to create a team inside
GitHub organization:

- In GitHub organization go to [Teams](https://github.com/orgs/catenax-ng/teams) and click button _New team_ in the
  right upper corner
- Insert _Team name_ with naming schema `product-<productName>`
- Add optional _Description_
- Apply defaults for _Parent team_ and _Team visibility_
- Click button _Create team_ to finally create the team

### Add a Member To A GitHub Team

Prerequisites:

- Person must have accepted the invitation to the GitHub organization
- GitHub username of whom to onboard (person must have been invited _and_ joined our GitHub organization)
- GitHub team to invite to (the team must have been created by DevSecOps team)

To add a member to a GitHub team, follow these steps:

- In GitHub organization go to [Teams](https://github.com/orgs/catenax-ng/teams)
- Click on the team name a member should be added to
- Click on _Members_ in the top menu inside the selected GitHub team
- Click on the green button _Add a member_ in the upper right
- Type the GitHub _username, full name, or email addess_ and click _Invite_

After the member has been added to the GitHub team, check the checkbox in front of the new member and change role to _
Maintainer_:

![GH Role Maintainer](assets/gh-add-team-member-role.png)

:::tip

If the person gets no email: the person should check the GitHub notifications-box or/and email spam folder.

:::

## Vault

To be able to manage secrets in Hashicorp Vault and use them via ArgoCD Vault Plugin (AVP), a team needs the following
Vault resources set up:

- A _secret engine_
- A _read-write policy_ for the secret engine, used to manage secrets via web UI or CLI; Mapped to the GitHub team
- An _approle_, that is used as AVP credentials
- A _read-only policy_ for the secret engine, used as AVP credentials; Mapped to the approle
- Approle credentials (secret-id and role-id) available as _avp-config in the devsecops_ secret engine

All of these resources are created through terraform scripts. The scripts are part of the
[k8s_cluster_stack](https://github.com/catenax-ng/k8s-cluster-stack) repository. The following sections will guide you
through the process of initializing terraform, adding the new team to the list of product teams, creating the terraform
plan and applying the plan to vault.

### Initialize terraform

It is assumed, that you already have installed the terraform CLI. Before you start, make sure you've cloned
the [k8s_cluster_stack](https://github.com/catenax-ng/k8s-cluster-stack)
repository and navigated to `/terraform/02_vault` inside that repository on your terminal.

To run the terraform scripts later on, you need to set two specific environment variables. One is used to access the
Azure storage account, that contains the tfstate file and one with a Vault token for authentication on Vault. You can
set these like this:

```shell
# Requires you to be logged in with az on the cli
export ARM_ACCESS_KEY=$(az storage account keys list --resource-group cx-devsecops-tfstates --account-name cxdevsecopstfstate --query '[0].value' -o tsv)

# You can get a login token, by logging into the Vault web UI and using 'copy token' from the top right user menu
export VAULT_TOKEN=<your-vault-token-or-root-token>
```

Before creating a terraform plan, you need to initialize terraform, which will download all the provider plugins needed
to run the scripts. Therefore, run `terraform init`.

### Add the new team to the list of product teams

After initializing terraform and preparing the necessary environment variables as described before, you can adjust the
terraform scripts to onboard the new team. All the product teams are listed in a variable named 'product_teams', that is
used in a 'for_each' loop in the resource definitions.

So all you need to do to create all the resources necessary for the team, is to add it to that 'product_teams' map.
Therefore, open the variables file at `/terraform/02_vault/variables.tf` and append a new map entry to the default value
of the variable definition. All the properties, that are defined in the variable definition are mandatory to be
specified in the map entry, since all of them are used inside the resource definitions.

### Create and apply the terraform plan

Since terraform is not only creating Vault resources for product teams, but also configures OIDC login, you need to
specify required settings, that are not checked into version control, since this is sensitive information.

The OIDC settings that needs to be specified is the client-id and the client-secret for DEX. You can find this
information in our devsecops secret engine in vault at path `devsecops/clusters/vault/github-oauth`.

To set this information, you can either copy and paste it, when terraform asks you for it on plan creation, or you
could specify it beforehand as environment variable like this:

```shell
export TF_VAR_vault_oidc_client_id=<client-id-copied-from-vault>
export TF_VAR_vault_oidc_client_secret=<client-secret-copied-from-vault>
```

Now you can create a terraform plan with this command: `terraform plan -out tf.plan`
Terraform will print a summary, of what changes it will do to Vault, once you apply the generated plan.
Check the summary carefully, that it actually matches your expectations. In our case of onboarding a new team,
there should only be new resources getting created and no changes or destruction of existing ones.
If there are actually changes or destruction listed in the plan summary, double check, if you are at the HEAD revision,
or you accidentally changed some resource definitions.

If the plan summary matches your expectations, then you can apply the changes with this command:
`terraform apply "tf.plan"`
Afterwards, you can manually check Vault, if all the resources actually got created.

## ArgoCD

To provide a product-team access to the Hotel Budapest infrastructure following onboarding steps must be performed (all
steps are related to repository [k8s_cluster_stack](https://github.com/catenax-ng/k8s-cluster-stack)):

- create ArgoCD project
- create AVP secret
- deploy ArgoCD project and AVP secret

Create a new branch in [k8s_cluster_stack](https://github.com/catenax-ng/k8s-cluster-stack) repo for onboarding a new
product-team to ArgoCD.

### Create ArgoCD Project

Create a manifest for the new product-team to create:

- k8s namespace
- ArgoCD project:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: product-productName
---
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: product-productName
  namespace: argocd
spec:
  description: Project for product-productName
  sourceRepos:
    - "*"
  destinations:
    - namespace: product-productName
      server: https://kubernetes.default.svc
  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy
  namespaceResourceBlacklist:
    - group: ""
      kind: ResourceQuota
    - group: ""
      kind: LimitRange
    - group: ""
      kind: NetworkPolicy
  roles:
    - name: team-admin
      description: All access to applications inside project-bpdm. Read only on project itself
      policies:
        - p, proj:product-productName:team-admin, applications, *, product-productName/*, allow
      groups:
        - catenax-ng:product-productName
```

Store this manifest in [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack) repo in
path `environments/hotel-budapest/argo-projects/`.

### Create AVP Secret

To enable the product-team to use Vault with ArgoCD create a team specific AVP secret manifest:

```yaml
apiVersion: v1
kind: Secret
metadata:
  annotations:
    avp.kubernetes.io/path: "devsecops/data/avp-config/product-productName"
  name: vault-secret
  namespace: product-productName
type: Opaque
stringData:
  VAULT_ADDR: https://vault.demo.catena-x.net/
  AVP_TYPE: vault
  AVP_AUTH_TYPE: approle
  AVP_ROLE_ID: <role_id>
  AVP_SECRET_ID: <secret_id>
```

Store this manifest in [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack) repo in
path `environments/hotel-budapest/avp-secrets/`.

The secret will be called _vault-secret_ and stored in k8s namespace related to product-team.

### Prepare Deployment Of ArgoCD Project And AVP Secret

To deploy k8s namespace, ArgoCD Project and the AVP secret to Hotel Budapest you'll have to add the two created manifest
files to `environments/hotel-budapest/kustomization.yaml`
in [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack) repo:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

#namespace: argocd

resources:
  [ ... ]
  - argo-projects/product-productName.yaml
  - avp-secrets/productName-vault-secret.yaml
  [ ... ]
```

Please add the new product-team in alphabetical order to the _resources_ section of file `kustomization.yaml`.

### Create Pull Request

After you have created the three files

- `environments/hotel-budapest/argo-projects/product-productName.yaml`
- `environments/hotel-budapest/avp-config/productName-team-vault-secret.yaml`
- `environments/hotel-budapest/kustomization.yaml`

create a PR for your branch. After the PR has been approved and merged into main branch, the new team will be
automatically deployed to Hotel Budapest cluster (via ArgoCD application _hotel-budapest-config_ at ArgoCD _CORE_
cluster).

## Special Topics

### Enable access to a private repository via deploy key

:::note

The project/product has to follow the steps which can be found
here: [How to prepare a private repo](guides/how-to-prepare-a-private-repo).

:::

- Go to `catenax-ng\k8s-cluster-stack\environments\hotel-budapest\argo-repos`
- Add a file named `<productName>-repo.yaml`, e.g. for _product-semantics_ (`product-semantics-repo.yaml`):

  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: product-semantics-repo
    namespace: argocd
    annotations:
      avp.kubernetes.io/path: "semantics/data/deploy-key"
    labels:
      argocd.argoproj.io/secret-type: repository
  stringData:
    type: git
    url: git@github.com:catenax-ng/product-semantics
    name: product-semantics-repo
    project: project-semantics
    sshPrivateKey: |
      <semantics-deploy-key>
  ```

- Add following line to `environments/hotel-budapest/kustomization.yaml`

  ```yaml
  - argo-repos/product-semantics-repo.yaml
  ```

### Enable access to a private package (central pull secret)

- Create a PAT within GitHub user account (machine user)
  settings - Developer settings - Personal access token. Be sure to give just the needed rights (read:package will be
  sufficient to deploy)
- Now do a base64 encoding for the PAT $ echo -n "<username\>:<PAT\>" | base64
- Create a file `.dockerconfigjson` containing the base-64 encoded PAT

  ```json
  {
    "auths": {
      "ghcr.io": {
        "auth": "<base-64 encoded PAT>"
      }
    }
  }
  ```

- Do a base 64 encoding for the auth part

  ```shell
  echo -n'{"auths":{"ghcr.io":{"auth":"<base-64 encoded PAT>"}}}' | base64
  ```

  If the output is divided into 2 lines, just add the second line to the first (without space)

- Create a file `dockerconfigjson.yaml`:

  ```yaml
  kind: Secret
  type: kubernetes.io/dockerconfigjson
  apiVersion: v1
  metadata:
    name: budapest-machine-user-read-package
    labels:
      app: app-name
  data:
    .dockerconfigjson: <base64 encoded auth part, output from second base64 encoding>
  ```

- Then add the secret to the cluster

  ```shell
  kubectl create -f dockerconfigjson.yaml
  ```

- Pull secret has to be added to the product´s code

  ```yaml
  imagePullSecrets:
    - name: <name of the pull secret>
  ```
