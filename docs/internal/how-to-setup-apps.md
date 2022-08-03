---
title: How to setup GitHub apps
---

This how-to will guide you through the deployment and configuration of GitHub Apps

## Context

As users don't have admin rights on repositories, they can't trigger actions in other repositories. They could use their PATs, but this is seen as bad practice. But as this got requested more often, we set up GitHub Apps which act like a technical user.

In this document the source repository is referring to the repository from which an action is initiated, whereas the target repository will be the one where the actions will be called. 

## Create GitHub App

To create an app follow the offical guide [here](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app)

- Callback URL needs to be filled out, we just use the standard catena homepage link
- As we just use a basic setup, options like the webhook URL and device workflow don't need to be configured. 

The app then needs to be configured within the organization menu:

![Administration](assets/app1.png)

The individual configuration is described below.

## General

From this menu one needs the app ID:

![Administration](assets/app2.png)

Further below a private key needs to be created (You need to download it):

![Administration](assets/app3.png)

These settings (app ID and private key) need to be stored as secrets, as the users will can use them in their actions/workflows:

![Administration](assets/app4.png)

In this example PORTAL is the product name:

- ORG_PORTAL_DISPATCH_APPID -> app ID from above
- ORG_PORTAL_DISPATCH_KEY -> content of private key file

When creating the secret, set the scope (=permissions to the source repository)

## Permissions & events

Here only permission for actions need to be set to read and write

## Install App

Here you need to choose all source and target repositories

![Administration](assets/app5.png)

## Additions for the source repository workflow

The products need to add the following steps to their calling action:

```
steps:
- name: Get Token
  id: get_workflow_token
  uses: peter-murray/workflow-application-token-action@v1
  with:
    application_id: ${{ secrets.ORG_REPO_DISPATCH_APPID }}
    application_private_key: ${{ secrets.ORG_REPO_DISPATCH_KEY }}      
- name: trigger-workflow
  id: call_action
  env:
    TOKEN: ${{ steps.get_workflow_token.outputs.token }}
  run: |
    curl -v \
      --request POST \
      --url https://api.github.com/repos/catenax-ng/playground-target/actions/workflows/example.yaml/dispatches \
      --header "authorization: Bearer $TOKEN" \
      --header "Accept: application/vnd.github.v3+json" \
      --data '{"ref":"test_branch","inputs":{"any_data":"anything","any_data2":"anything2"}}' \
      --fail
```

## Additions for the target repository workflow

```
name: Demo
on: 
  workflow_dispatch:
    inputs:
    # any parameter used in calling workflow needs to be declared here
    # setting required to false means it's an optional parameter
      any_data:
        description: "content here"
        required: true
        default: "no content"
      any_data2:
        description: "more data"
        required: false
        default: "no content"
jobs:
  show_workspace:
    runs-on: ubuntu-latest
    steps:
      - run: echo "event payload ${{ github.event.inputs.any_data }}"
```
