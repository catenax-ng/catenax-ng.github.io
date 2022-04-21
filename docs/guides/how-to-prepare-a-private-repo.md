---
title: How to prepare a private repo
---

*** if your Github repo is set to private, you have to do following to be able to onboard ***

#### 1. create an ssh-key
  - e.g. ssh-keygen -t ed25519
  - don´t use a passphrase
  - save key to a safe place
  - add sshPublicKey to your Github repo under settings - deploy key

#### 2. create a key/value pair in the the vault

  - navigate to https://vault.vault.demo.catena-x.net/  
  - click your Secrets Engine
  - click "Create secret +"
  - in field "Path for this secret" type "deploy-key"
  - under "Secret data" name the key "<project-name\>-deploy-key"
  - paste your sshPrivateKey to the value field
  - save
  - provide this information to DevSecOps team with your ArgoCD project request