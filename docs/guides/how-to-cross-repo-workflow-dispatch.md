---
title: How to trigger a workflow in another repository
---

This how-to will guide you through requesting credentials to trigger an external workflow in another repository and provide example workflows.

## Context

This approach is used to provide a secure mean to use workflow dispatches without using a PAT. Only requirement is that the source and target repositories are in the same organization.  

## Request credentials

Request credentials via our [support template](https://jira.catena-x.net/secure/CreateIssueDetails!init.jspa?pid=10212&issuetype=10401&components=10401&priority=3&summary=Request%20credentials%20for%20workflow%20triggers&description=%0Aproduct%20name%3A%0Asource%20repositories%3A%0Atarget%20repositories%3A&labels=requirement-dependent)

In the request you must define your source and target repositories (only your source repositories will be able to access the credentials)

## Sample code for the source repository workflow

Once you received your credentials, integrate them into your GitHub actions. Some examples are posted below:

```
steps:
- name: Get Token
  id: get_workflow_token
  uses: peter-murray/workflow-application-token-action@v1
  with:
    application_id: ${{ secrets.YOUR_APPID }}
    application_private_key: ${{ secrets.YOUR_DISPATCH_KEY }}      
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

## Sample code for the target repository workflow

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
