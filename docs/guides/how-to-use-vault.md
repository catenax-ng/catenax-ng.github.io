# How To Use HashiCorp Vault

This guide is a small howto about how to store your secrets using HashiCorp Vault. Following prerequisites have to be
met:

- your product-team must have been onboarded to Catena-X NG GitHub organization

For guidance of how to use secret with an ArgoCD application, please refer to
[How To Use Vault Secrets With ArgoCD](./howto-use-vault-secrets-with-argocd.md).

The Catena-X Vault instance URL is: [https://vault.vault.demo.catena-x.net](https://vault.vault.demo.catena-x.net)

## Login To Vault

As of now, you can access Vault with the following authentication methods:

- GitHub (Token based)
- AppRole

Github Token is intendet for personal login into Vault. The AppRole method is used for machine logins, aka your ArgoCD
application will use this method to authenticate against Vault.

Planned login/authentication methods:

- OIDC login (using GitHub as SSO, as you know it from ArgoCD UI)

### Login With GitHub Token

#### Create GitHub Token

To be able to use GitHub Token as login method with Vault you first have to create a personal token with appropriate
permissions granted. To create a personalized token:

- login into GitHub and goto [Settings -> Token](https://github.com/settings/tokens).
- click on the _Generate new token_ button in the upper right corner
- add a _Note_ that fits your needs (this helps you to identify the intent of the token later)
- select a _Expiration_ date matching your needs for your token (it's up to you to deside about expiration)
- grant at least [_read:org_](https://www.vaultproject.io/docs/auth/github) permissions to your token
- click on _Generate token_ at the bottom of the form.

After these steps GitHub will show you the token.

:::caution

GitHub will show the token **only once** in WebUI. If you miss to safe the token in any kind (we strongly suggest to
use e.g. [KeePass](https://keepass.info) (or any other password manager) for storing personal sensitive data) you'll
have to generate a new token (and revoke the old one).

:::

#### Using The Token For Login

##### WebUI

To login into Vault using your generated GitHub token, goto [Vault](https://vault.vault.demo.catena-x.net), select
_GitHub_ as Method and enter your token in the field _GitHub token_:

![Vault Login Page](./assets/vault-login-page.png)

##### CLI

You can also use the [Vault Cli](https://www.vaultproject.io/downloads) manage your secrets. To login in CLI execute the
following steps:

```shell
$ export GH_TOKEN="YOUR_TOKEN"
$ export VAULT_ADDR="https://vault.vault.demo.catena-x.net:443"
$ vault login -method=github token=$GH_TOKEN
Success! You are now authenticated. The token information displayed below
is already stored in the token helper. You do NOT need to run "vault login"
again. Future Vault requests will automatically use this token.

Key                    Value
---                    -----
token                  s.Bzfdei921xxx
token_accessor         snJKHKjhadsxxx
token_duration         768h
token_renewable        true
token_policies         ["your_team_name"]
identity_policies      []
policies               ["your_team_name" "default"]
token_meta_username    YourGHName
token_meta_org         catenax-ng
$
```

## Create A Secret

### Using The WebUI

After login to Vault, you'll have access to the Vault secret engine/store created for your product-team.

![Empty secret store](assets/vault-empty-store.png)

To create a secret

- click on _Create secret +_ in the upper right area
- enter a _Path for this secret_, this will be the secret name<br>
  :::tip
  
  We strongly suggest to organize secrets in folders based on its intention. Vault will automatically create
  subfolders, if you enter a specific path.
  :::
- add as many _Secret data_ lines, as you require to store in this secret
- click on the _Save_ button to store your first secret

![create your first secret](assets/vault-add-first-secret.png)

After you have created your first secret in Vault, the path is created inside your secret store and can be browsed
easily.

![Vault secret store folder structure](assets/vault-folder-structure.png)

### Using the Vault Cli

To create a secret using the CLI execute the follwing command `vault kv put path/to/secret key1=value2 [key2=value2]`,
example:

```shell
$ vault kv put product-team-example/hello foo=bar
========= Secret Path =========
product-team-example/data/hello

======= Metadata =======
Key                Value
---                -----
created_time       2022-04-14T13:42:08.41991265Z
custom_metadata    <nil>
deletion_time      n/a
destroyed          false
version            1
```

## Read A Secret

### WebUI

Login to Vault and browse to the secret you need, and click on the copy icon.

![Copy Secret](assets/vault-copy-secret-webui.png)

### CLI

To read a secret using the CLI execute the command `vault kv get path/to/secret`, example:

```shell
$ vault kv get product-team-example/hello
========= Secret Path =========
product-team-example/data/hello

======= Metadata =======
Key                Value
---                -----
created_time       2022-04-14T13:42:08.41991265Z
custom_metadata    <nil>
deletion_time      n/a
destroyed          false
version            1

=== Data ===
Key    Value
---    -----
foo    bar
```

## See Also

For further information about Hashicorp Vault please refer to their [documentation](https://www.vaultproject.io/docs).
