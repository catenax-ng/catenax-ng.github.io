---
title: How To Use Vault Secrets With ArgoCD
---

This guide is a small howto about using secrets stored in HashiCorp Vault with your ArgoCD applications (with Helm
charts or Kustomize).

:::info tl;dr
To use vault secrets with your ArgoCD app, you have to

- store your secret inside your Vault tenant
- insert placeholders to app dependend files (ArgoCD App, helm, kustomize, etc.)
- configure your ArgoCD application to use an ArgoCD Vault Plugin (AVP) using the _vault-secret_

For guidance of how to use Vault and store a secret inside Vault, please refer to
[How To Use Vault](how-to-use-vault.md).

:::

## Add Placeholder To Your Code

The AVP plugin use placeholders to recognize where you want to place a Vault secret value inside your code. Example
placeholder:

- `<placeholder>`
- `<path:some/path#secret-key>`
- `<path:some/path#secret-key#version>`

The secret path can alternatively be defined as annotation in manifest files instead of inside the placeholder.

### Examples

Placeholder with inline path:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: avp-example-secret
type: Opaque
stringData:
  //highlight-next-line
  foo: <path:product-team-example/data/hello#foo>
```

Placeholder and annotation for secret path:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: avp-example-secret
  annotations:
  //highlight-next-line
  avp.kubernetes.io/path: "product-team-example/data/hello"
type: Opaque
stringData:
  //highlight-next-line
  foo: <foo>
```

:::note
When using annotation to specify the path to the secret inside vault, the placeholder represents only the key inside the
secret.

If you're using secrets from different paths within one file you must use placeholder with inline path definition, as
only one secret path can be provided by annotation.

Please keep in mind that the path must contain _data_ (e.g. `product-team-example/data/hello`) otherwize you'll get an
error message about _secret not found_ or similiar.

:::

You are not limited to use these placeholders inside manifest files, you can also use these inside helm specific file
like `values.yaml`:

```yaml
avp:
  helm:
    secretPath: <path:product-team-example/data/hello#foo>
```

And inside e.g. the helm templates you can reference like this:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: avp-example-path-secret
type: Opaque
stringData:
  foo: { { .Values.avp.helm.secretPath } }
```

:::tip
Additional information about replacement behavior, placeholder types and more can be found
in [ArgoCD Vault Plugin Documentation](https://argocd-vault-plugin.readthedocs.io/en/stable/howitworks/).

:::

## Configure The ArgoCD App To Use AVP

To enable your ArgoCD app to use the AVP plugin there are two mandatory steps required:

- Configure the app to use one of the available AVP plugins
- Provide an environment variable _AVP_Secret_ to the plugin with _vault-secret_ as value

:::info Your Vault Secret

The _vault-secret_ has been created for each product-team during onboarding.

:::

In general your ArgoCD app manifest should look like this:

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-argo-app
spec:
  project: project-name
  destination:
    server: https://kubernetes.default.svc
    namespace: project-name
  source:
    repoURL: https://github.com/catenax-ng/someRepo/
    targetRevision: HEAD
    path: path/to/app
    // highlight-start
    plugin:
      name: argocd-vault-plugin
      env:
        - name: AVP_SECRET
          value: vault-secret
    // highlight-end
```

To configure your ArgoCD application to use an AVP plugin using the ArgoCD WebUI after the _Destination_ section you
have to select _Plugin_ from the dropdown selector, select the appropriate AVP plugin and enter the secret information:

![Select Plugin](assets/avp_plugin_webui1.png "Select Plugin")

![AVP configuration](assets/avp_plugin_webui2.png "AVP configuration")

## Available ArgoCD Vault Plugins

For different approaches there are different ArgoCD Vault Plugins (AVP) available:

- _argocd-vault-plugin_
- _argocd-vault-plugin-helm_
- _argocd-vault-plugin-helm-args_
- _argocd-vault-plugin-kustomize_

### _argocd-vault-plugin_

Use this AVP plugin when your ArgoCD app is based on plain kubernetes manifest files, and you want to pull secrets from
vault into your app.

The App manifest should contain:

```yaml
  plugin:
    //highlight-next-line
    name: argocd-vault-plugin
    env:
      - name: AVP_SECRET
        value: vault-secret
```

### _argocd-vault-plugin-helm_

Use this AVP plugin when your ArgoCD app is based on helm charts, and you want to pull secrets from vault into your app.

The App manifest should contain:

```yaml
  plugin:
    //highlight-next-line
    name: argocd-vault-plugin-helm
    env:
      - name: AVP_SECRET
        value: vault-secret
```

### _argocd-vault-plugin-helm-args_

Use this AVP plugin when your ArgoCD app is based on helm charts but you have e.g. environment
specific `values-env.yaml` files to apply, and you want to pull secrets from vault into your app.

The App manifest should contain:

```yaml
  plugin:
    //highlight-next-line
    name: argocd-vault-plugin-helm-args
    env:
      - name: AVP_SECRET
        value: vault-secret
      //highlight-start
      - name: helm_args
        value: '-f values.yaml -f values-env.yaml'
      //highlight-end
```

### _argocd-vault-plugin-kustomize_

Use this AVP plugin when your ArgoCD app is based on plain kubernetes manifest files, and you want to pull secrets from
vault into your app.

The App manifest should contain:

```yaml
  plugin:
    //highlight-next-line
    name: argocd-vault-plugin-kustomize
    env:
      - name: AVP_SECRET
        value: vault-secret
```
