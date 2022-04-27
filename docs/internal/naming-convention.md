---
title: Naming Convention
---
:::info

This is a first proposal what topics will be handled by this naming convention.

:::

## General

In general terms we are talking about products, not about teams. A team might change, the product will
stay. This means the product (e.g. _EDC_) is in focus for naming instead of the team, which is developing the product.

For any naming lowercase is used over UPPERCASE.

### Do's

- Use lowercase
- Use full name over shortcuts
- Provide descriptions, e.g. for GitHub Teams or Repositories

### Dont's

- shortcut instead of full name
  - exception:
    - when product name would be too long
    - when talking about a well known shortcut (e.g. _edc_)

## Known Products

Known products as of now are (extract of existing GitHub teams, incl. example and test teams):

- ArgoCDAdmins
- cx-core-schemas
- product-bpdm
- product-bpdm-vas
- product-catenax-at-home
- product-data-format-transformer
- product-data-integrity-demonstrator
- product-dft
- product-edc
- product-esc-backbone
- product-essential-services
- product-integrity-demonstrator
- product-managed-identity-wallets
- product-material-pass
- product-portal
- product-semantics
- product-team-example
- product-test-data-generator
- product-traceability-dft
- product-traceability-irs
- rbac-tests
- team-hello-gitops
- team-security

:::info

Currently, there are some teams that doesn't apply to this naming convention.

:::

## GitHub

### Definition

| Item       | Naming Convention | Additional description      |
|:-----------|:------------------|-----------------------------|
| Team       | _productName_     | Shall not contain shortcuts |
| Repository | _productName_     | Shall not contain shortcuts |

### Examples

tbd.

## Vault

### Definition

| Item          | Naming Convention         | Additional descr.                                    |
|:--------------|:--------------------------|:-----------------------------------------------------|
| Secret Engine | _productName_             |                                                      |
| AppRole       | _productName_             |                                                      |
| Policy        | _policy-full-productName_ | for personal usage, e.g GitHub or OIDClogin          |
| Policy        | _policy-read-producName_  | for AppRole usage with only read permissions granted |

### Examples

```bash
# Enable Secret Engine
$ vault secrets enable -version=2 -path=productName kv
Success! Enabled the kv secrets engine at: productName/

# Create AppRole 
$ vault write auth/approle/role/productName \
    secret_id_ttl=10m \
    token_num_uses=10 \
    token_ttl=20m \
    token_max_ttl=30m \
    secret_id_num_uses=40
Success! Data written to: auth/approle/role/productName

# Issue Secret Id for Approle
$ vault write -f auth/approle/role/productName/secret-id
Key                   Value
---                   -----
secret_id             d8ff2be9-1ecb-4481-bfae-21071baf42c1
secret_id_accessor    701e38a4-408d-4db0-94cc-3166c7277daa
secret_id_ttl         10m

# Read AppRole Id
$ vault read auth/approle/role/productName/role-id
Key        Value
---        -----
role_id    89dd5e0d-2991-4d0c-bb1a-a8b12ee7228f

# Create Policy (policy will be read from full_policy.hcl)
$ vault policy write policy-full-productName full_policy.hcl 
Success! Uploaded policy: policy-full-productName

# Create Policy (policy will be read from full_policy.hcl)
$ vault policy write policy-read-productName read_policy.hcl
Success! Uploaded policy: policy-read-productName

# Create GitHub auth mapping (with policy)
$ vault write auth/github/map/teams/productName value=policy-full-productName
Success! Data written to: auth/github/map/teams/productName
```

## ArgoCD

### Definition

| Item                       | Naming Convention            | Additional description                                                                                                                   |
|:---------------------------|:-----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| Kubernetes Namespace       | _productName_                |                                                                                                                                          |
| ArgoCD Project Name        | _productName_                |                                                                                                                                          |
| ArgoCD Cluster Secret Name | _clusterName-cluster-secret_ | Representing the k8s secret name                                                                                                         |
| ArgoCD Chilld Cluster Name | _clusterName_                | as of now, this is _dev_, _core_ or _hotel-budapest_. It might be later contain also _productName_ if a product will get its own cluster |

### Examples

#### ArgoCD Project And Kubernetes Namespace

Each Catena-X product will get its own ArgoCD project and Kubernetes namespace at target cluster. Therefor k8s namespace
and ArgoCD project definition is handled within the same manifest file.

```yaml
apiVersion: v1
kind: Namespace
metadata:
  // highlight-next-line
  name: [productName]
---
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  // highlight-next-line
  name: [productName]
  namespace: argocd
spec:
  // highlight-next-line
  description: Project for product-[productName]
  sourceRepos:
    - '*'
  destinations:
    // highlight-next-line
    - namespace: [productName]
      server: https://kubernetes.default.svc
  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy
  namespaceResourceBlacklist:
    - group: ''
      kind: ResourceQuota
    - group: ''
      kind: LimitRange
   - group: ''
      kind: NetworkPolicy
  roles:
    - name: team-admin
      description: All access to applications inside project-bpdm. Read only on project itself
      policies:
      // highlight-next-line
        - p, proj:[productName]:team-admin, applications, *, [productName]/*, allow
      groups:
        - catenax-ng:[productName]
```

#### ArgoCD Cluster Secret

```yaml
apiVersion: v1
kind: Secret
metadata:
  annotations:
    // highlight-next-line
    avp.kubernetes.io/path: "devsecops/data/clusters/[clusterName]/k8s"
  labels:
    argocd.argoproj.io/secret-type: cluster
    // highlight-next-line
  name: [clusterName]-cluster-secret
type: Opaque
stringData:
  name: <name>
  server: <server>
  config: |
    {
      "bearerToken": "<bearerToken>",
      "tlsClientConfig": {
        "insecure": false,
        "caData": "<caData>"
      }
    }
```

The highlighted lines contains naming convention relevant placeholder `[clusterName]`. This should be replaced by the
native cluster name, e.g. _core_ (for ArgoCD core cluster).
