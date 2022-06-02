---
title: How to Access a Private Repo and a Private Package/Image
---

## Accessing a private repo

If your GitHub repo is set to private, you have to do following to be able to onboard

### 1. Create an ssh-key

- e.g. `ssh-keygen -t ed25519`
- Don´t use a passphrase
- Save key to a safe place
- Add sshPublicKey to your Github repo under settings - deploy key.
  - This will only be possible if you have admin role for the repo.
  - If you don´t have this role, please ask someone else from your team who has appropriate rights.
  - You may also send the public key to DevSecOps to put the key to the repo.

### 2. Create a key/value pair in the vault

- Navigate to [https://vault.demo.catena-x.net](https://vault.vault.demo.catena-x.net)
- Click your Secrets Engine
- Click "*Create secret +*"
- In field "Path for this secret" type "deploy-key"
- Under "Secret data" name the key "<product-name\>-deploy-key"
- Paste your sshPrivateKey to the value field
- Save
- Provide this information to DevSecOps team with your ArgoCD project request

## Accessing a private package/image

- Pull secret `machineuser-pull-secret-ro` has to be added to the product´s code

  ```yaml
  imagePullSecrets:
    - name: machineuser-pull-secret-ro
  ```
