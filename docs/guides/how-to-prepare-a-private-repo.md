---
title: How to prepare a private repo
---

If your GitHub repo is set to private, you have to do following to be able to onboard

## 1. Create an ssh-key

- e.g. `ssh-keygen -t ed25519`
- Don´t use a passphrase
- Save key to a safe place
- Add sshPublicKey to your Github repo under settings - deploy key

## 2. Create a key/value pair in the vault

- Navigate to [https://vault.vault.demo.catena-x.net](https://vault.vault.demo.catena-x.net)
- Click your Secrets Engine
- Click "*Create secret +*"
- In field "Path for this secret" type "deploy-key"
- Under "Secret data" name the key "<project-name\>-deploy-key"
- Paste your sshPrivateKey to the value field
- Save
- Provide this information to DevSecOps team with your ArgoCD project request
