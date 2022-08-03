---
title: How to release a helm chart
---

This guide will describe, why you should release your helm charts and how you can achieve that. We will also describe
some common pitfalls and how to handle them.

## Why should you release your helm chart?

There are two main reasons, why we want to release helm charts in the Catena-X context.

1. Testing
2. Releasing

There are two aspects, why we need a released helm chart for testing purposes. Your own application might have a
dependency (i.e. via API call). If you want to test the integration between your app and the app you are depending on,
you need that app running. Best case, you can do that on your own. This is a very easy task if the app you are depending
on is available as released helm chart. This way you can easily add it as dependency to your own deployment.

The second aspect is the overall integration and end-to-end test for Catena-X. A reliable e2e test of Catena-X
components needs a reproducible set of applications in specific versions, with known configuration and test data. We
achieve that, by specifying all necessary components for a test run as dependency in an umbrella helm chart.
Prerequisite for adding a product application as dependency, the corresponding helm chart needs to be released and
publicly available.

After passing the end-to-end testing, a specific set of applications in their tested versions can be released. That
means, we provide some kind of installer, that is capable of installing all the previously tested applications after
they have been quality assured. As this kind of installer, we are again using an umbrella helm chart. This chart can
then be used by anyone, who wants to deploy and host Catena-X applications.

## How can you release your helm chart?

There are several options to release your chart. The one option we propose is using the `chart-releaser-action` in a
GitHub workflow. For `chart-releaser-action` to work, there need to be some requirements met.

### Prerequisites

We recommend using `chart-releaser-action` in its default configuration. There are two requirements that have to be met,
if you want to use the default configuration.

1. Your helm charts need to be in the `/charts/<chart-name` directory of your repository
2. GitHub pages need to be activated for your repository and point to a 'gh-pages' branch. Your GitHub organization
   admins can activate that for you

### Adding the chart release GitHub workflow

As mentioned before, releasing the chart can be done via GitHub workflow. Following, there is an example workflow that
uses the `chart-releaser-action` to publish package and publish your charts. You can use this example in your own
repository without changes.

This workflow can then be triggered manually via GitHub action UI or will automatically be triggered, once you push a
new git tag to your repository.

```yaml
name: Release core Chart

on:
  workflow_dispatch:
  push:
    tags:
      - '*'

jobs:
  release:
    # depending on default permission settings for your org (contents being read-only or read-write for workloads), you will have to add permissions
    # see: https://docs.github.com/en/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token
    permissions:
      contents: write
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Configure Git
        run: |
          git config user.name "$GITHUB_ACTOR"
          git config user.email "$GITHUB_ACTOR@users.noreply.github.com"

      - name: Install Helm
        uses: azure/setup-helm@v1
        with:
          version: v3.9.1

      - name: Run chart-releaser
        uses: helm/chart-releaser-action@v1.4.0
        env:
          CR_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```
