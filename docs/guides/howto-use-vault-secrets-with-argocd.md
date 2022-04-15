# How To Use Vault Secrets With ArgoCD

This guide is a small howto about how to use secrets stored in HashiCorp Vault with your ArgoCD applications (with Helm
charts or Kustomize). Following prerequisites have to be met:

- you must have configured your ArgoCD application to use at least one ArgoCD Vault Plugin (AVP)
- you must know your _vaultSecret_, which is project dependent
- you must have stored your secret inside your Vault tenant

For guidance of how to use Vault and store a secret inside Vault, please refer to
[How To Use Vault](how-to-use-vault.md).

tbc