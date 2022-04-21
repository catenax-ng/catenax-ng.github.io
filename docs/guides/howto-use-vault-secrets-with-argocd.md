# How To Use Vault Secrets With ArgoCD

This guide is a small howto about how to use secrets stored in HashiCorp Vault with your ArgoCD applications (with Helm 
charts or Kustomize). Following prerequisites have to be met:

- you must have stored your secret inside your Vault tenant
- you must have configured your ArgoCD application to use at least one ArgoCD Vault Plugin (AVP) using the _vault-secret_
- vault placeholders inside app dependend files (ArgoCD App, helm, kustomize, etc.)

For guidance of how to use Vault and store a secret inside Vault, please refer to
[How To Use Vault](how-to-use-vault.md).

:::info Your Vault Secret

The Vault secret have been created for each product-team during onboarding and is named _vault-secret_.

:::

## Available ArgoCD Vault Plugins

For different approaches there are different ArgoCD Vault Plugins (AVP) available:

- _argocd-vault-plugin_
- _argocd-vault-plugin-helm_
- _argocd-vault-plugin-kustomize_

## Configure The ArgoCD App To Use AVP

To enable your ArgoCD app to use the AVP plugin there are two mandatory steps required:

- Configure the app to use one of the availabl AVP plugins
- Provide an environment variable _AVP_Secret_ to the plugin with _vault-secret_ as value

In general your ArgoCD app manifest should look like this:

```yaml
project: project-name
source:
  repoURL: 'https://github.com/catenax-ng/someRepo/'
  path: path/to/app
  targetRevision: HEAD
  plugin:
    name: argocd-vault-plugin
    env:
      - name: AVP_SECRET
        value: vault-secret
destination:
  server: 'https://kubernetes.default.svc'
  namespace: project-name
```

