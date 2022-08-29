---
title: How To Onboard Product-Teams To Any Environment
slug: /how-to-onboard-teams-to-any-environment
---

:::info

This guide is only for those who operate the environment

:::

## Basics

We handle all of our support requests as a Jira task. There are [templates](https://catenax-ng.github.io/docs/resources)
present for well-known and recurring tasks and also a blank template.
For handling these support tasks, we follow our internal support workflow.

Since we setup teams and repositories in our GitHub organization and manage secrets in Hashicorp Vault using only one
script, at first **terraform has to be initialized** as described in the
[README.md](https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/100_team_onboarding/README.md) file in the directory
[100_team_onboarding](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding).
It is assumed, that you already have installed the terraform CLI. Before you start, make sure you've cloned
the [k8s_cluster_stack](https://github.com/catenax-ng/k8s-cluster-stack)
repository and navigated to `/terraform/100_team_onboarding` inside that repository on your terminal.
The check of the changes with 'terraform plan' and creation with 'terraform apply' which can be done after every
terraform change or only at the end of all necessary changes is also described in the
[README.md](https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/100_team_onboarding/README.md).

:::info regarding terraform

following steps have to be done in the given order, otherwise there could be problems with other developments done in
parallel:

1. create a new branch
2. make changes
3. do a terraform plan to check if the changes meet your expectations
4. create a PR and merge
5. do a terraform apply

only after the merge in Github and the terraform apply have been done, the terraform state is consistent.
Otherwise changes which are applied in parallel by someone else might be deleted again

:::

## GitHub

The following section describes how to handle users, teams and repositories in our GitHub organisation

### Invitation of a single user

Interaction with most of our tooling and also access to repositories is granted to members of our GitHub organization
"catenax-ng". So inviting users to the organization is the starting point for every Catena-X member.

As initial information to onboard a user to the organization, we need:

- The GitHub username (or email address) of the person to onboard
- A person (i.e. the product PO) to vouch for the person being onboarded to actually be part of Catena-X

:::info

Invitations to the several product teams should be done by the maintainers of the product teams. Only in rare cases,
like onboarding a new person and a new team in the same step, you should invite people to teams.

:::

### Creating a GitHub team via terraform

Access to repositories is granted on a GitHub team level instead of individuals. Also RBAC definitions on Vault and
ArgoCD are based on GitHub team membership.

To create GitHub teams, we are using the terraform root module
[100_team_onboarding](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding).
To create a new GitHub team, edit `main.tf` in the `100_team_onboarding` directory and locate the variable `github_teams`
inside `module "github" { ... }`. This variable contains a map of all the teams in our GitHub organization with name and
description properties.

All you need to do is to add a new entry to that map with the new team name and an optional description. Make sure, the
key you use for your new entry is unique. This key will also be used by terraform to create an entry in the state file.

### Creating a repository via terraform

Git repositories are also managed by our terraform root module
[100_team_onboarding](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding). The
process of creating a new repository is similar to creating a team. You need to edit the `main.tf` file in the
`100_team_onboarding` directory. Repositories are defined in the
`github_repositories` variable inside `module "github" { ... }`. This variable is a map containing all the repository
information. To create a new one, add a new entry to the map.

Event though most of the repository settings are configurable, the following should be set in a default case.

- `visibility : "public"`. Exception is only, if the teams did not yet clarify IP related questions
- `pages : { enabled : false }`. If a team wants to use GitHub pages, you can set this to true. This is needed, if teams
  want to release artifacts like helm charts.
- `is_template : false`. We usually do not create new repositories as template
- `uses_template : false`. Currently, our repositories are set up blank and not based on a template
- `template : null`. Since we usually do not use a template, we do not specify one. In case we want to use a template,
  this variable has to be defined as object of form `{ owner : "github-org" repository : "repo-name" }`

### Assigning a team as contributor to a repository via terraform

Contribution access to a repository in our GitHub organization is granted on a team level. We do not
grant this kind of access to individuals.
Access is again managed by our terraform root module
[100_team_onboarding](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding).

To manage contribution access for a team on a repository, edit the `main.tf` file in the `100_team_onboarding` directory.
There, add a new map entry to the `github_repositories_teams` variable inside `module "github" { ... }`.
As convention, we decided to for the map key as a combination of repository and team (`<repository-name-team-name>`).
This is done, because we have cases of multiple teams contributing to a single repository. This is configured, by
adding multiple entries to the `github_repositories_teams` map, containing the same repository, but a different team
each time.

As default, we configure `maintain` access on the product repositories for the teams, since all the administrative
tasks are handled by the team managing the organization.

## Vault via terraform

To be able to manage secrets in Hashicorp Vault and use them via ArgoCD Vault Plugin (AVP), a team needs the following
Vault resources set up:

- A _secret engine_
- A _read-write policy_ for the secret engine, used to manage secrets via web UI or CLI; Mapped to the GitHub team
- An _approle_, that is used as AVP credentials
- A _read-only policy_ for the secret engine, used as AVP credentials; Mapped to the approle
- Approle credentials (secret-id and role-id) available as _avp-config in the devsecops_ secret engine

All of these resources are created through terraform scripts. The scripts are part of the
[k8s_cluster_stack](https://github.com/catenax-ng/k8s-cluster-stack) repository.

### Add the new team to the list of product teams

Onboarding a new team is also managed by our terraform root module
[100_team_onboarding](https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding).
You need to edit `main.tf` in the `100_team_onboarding` directory and locate the variable `product_teams`
inside `module "vault" { ... }`. This variable contains a map of all the product teams. To create a new one, add a
new entry to the map.

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
    # A role which provides access to all applications in the project
    - name: team-admin
      description: All access to applications inside project-bpdm. Read only on project itself
      policies:
        - p, proj:project-productName:team-admin, applications, *, project-productName/*, allow
      groups:
        - catenax-ng:product-productName
```

Store this manifest in [k8s-cluster-stack](https://github.com/catenax-ng/k8s-cluster-stack) repo in
path `environments/hotel-budapest/argo-projects/` and in every environment you need it. Default is
dev and int (Hotel-Budapest).

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
path `environments/hotel-budapest/avp-secrets/` and in every environment you need it. Default is
dev and int (Hotel-Budapest).

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

:::info note

The project/product has to follow the steps which can be found
here: [How to prepare a private repo](guides/how-to-prepare-a-private-repo).

:::

- Go to `catenax-ng\k8s-cluster-stack\environments\hotel-budapest\argo-repos`
- Add a file named `product-<productName>-repo.yaml`, e.g. for _product-semantics_ (`product-semantics-repo.yaml`):

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

- Add following line to `environments/hotel-budapest/kustomization.yaml` and for every environment you need it.
Default is dev and int (Hotel-Budapest).

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
