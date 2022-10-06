---
title: How to release a Helm chart
---

This guide will describe, why you should release your Helm charts and how you can achieve that. We will also describe some common pitfalls and how to handle them.

If the team has requested a new repository based on the [k8s-helm-example](https://github.com/catenax-ng/k8s-Helm-example) template repository, the [chart releaser action](#adding-the-chart-release-github-workflow) will be part of it. The file can be modified/personalized to specific needs.

## Why should you release your Helm chart?

There are two main reasons, why we want to release Helm charts in the Catena-X context.

1. Testing
2. Releasing

First, your application may have dependencies (i.e. via API call). If you want to test the integration between your app and the app you are depending on, you need a well working version of the app. Best case, you can do that on your own. This is a very easy task if the app you are depending on is available as released Helm chart. This way you can easily add it as dependency to your own deployment.

The second aspect is the overall integration and end-to-end test for Catena-X. A reliable end-to-end test of Catena-X components needs a reproducible set of applications in specific versions, with known configuration and test data. We achieve that, by specifying all necessary components for a test run as dependency in an umbrella Helm chart. Prerequisite for adding a product application as dependency, the corresponding Helm chart needs to be released and publicly available.

After passing the end-to-end testing, a specific set of applications in their tested versions can be released. This means, we will provide some kind of installer, that is capable of installing all the previously tested applications after they have been quality assured. This installer will be provided as an umbrella Helm chart as well. This chart can  be used by anyone, who wants to deploy and host Catena-X applications.

## How can you release your Helm chart?

There are several options to release your chart. We recommend to use the
[chart-releaser-action](https://github.com/helm/chart-releaser-action) in a GitHub workflow. For `chart-releaser-action` to work, the repo needs to meet some requirements:

### Prerequisites

We recommend using `chart-releaser-action` in its default configuration. There are three requirements that have to be met, if you want to use the default configuration.

1. Your Helm charts need to be in the `/charts/<chart-name>` directory of your repository
2. GitHub pages need to be activated for your repository and point to a 'gh-pages' branch. Your GitHub organization admins can activate that for you
3. The gh-pages branch needs to exist on the remote repository on GitHub

### Adding the chart release GitHub workflow

As mentioned before, releasing the chart can be done via GitHub workflow. Below, you can find an example workflow that uses the `chart-releaser-action` to package and publish your charts. You can use this example in your own repository without changes.

This workflow can then be triggered manually via GitHub action UI or will automatically be triggered on pushing into the the main branch of your repository.

:::caution
Step ___Update Helm dependencies for chartX___ needs to be included for every chart in the repository that has
dependencies in their _Chart.yaml_ file!

```yaml
      - name: Update Helm dependencies for chartX
        run: |
          cd charts/chartX
          helm repo add bitnami https://charts.bitnami.com/bitnami
          helm dependency update
```

Explanation:

- `cd charts/<chart-name>` : Change the working directory to the directory where the _Chart.yaml_ is located
- `helm repo add` : add the external repository for every dependency that is in the _Chart.yaml_ file
- `helm dependency update` : can run as it is

:::

```yaml
name: Release core Chart

on:
  push:
    # prevent unnecessary GH action runs for files outside of charts folder
    paths:
      - 'charts/**'
    branches:
      - main

jobs:
  release:
    # depending on default permission settings for your org (contents being read-only or read-write for workloads), you will have to add permissions
    # see: https://docs.github.com/en/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token
    permissions:
      contents: write
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Configure Git
        run: |
          git config user.name "$GITHUB_ACTOR"
          git config user.email "$GITHUB_ACTOR@users.noreply.github.com"

      - name: Install Helm
        uses: azure/setup-helm@v3
        with:
          version: v3.10.0

      # OPTIONAL, SEE NOTE ABOVE!!
      - name: Update helm dependencies for chart1
        run: |
          cd charts/chart1
          helm repo add bitnami https://charts.bitnami.com/bitnami
          helm dependency update

      # OPTIONAL, SEE NOTE ABOVE!!
      - name: Update helm dependencies for chart2
        run: |
          cd charts/chart2
          helm repo add azure-marketplace https://marketplace.azurecr.io/helm/v1/repo
          helm dependency update

      - name: Run chart-releaser
        uses: helm/chart-releaser-action@v1.4.1
        env:
          CR_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```

### How to run the release action

If you are using the chart release workflow 'as-is' from above, it will be triggered automatically on every push that contains changes in the `charts` directory.

The chart-releaser-action will check your charts directory for the following changes (changed values, changed templates, changed dependencies, etc.) and if there are changes, package the chart into an compressed archive. Additionally, it will update the index.yaml file in the 'gh-pages' branch. This index.yaml file is needed, for enabling your GitHub pages to function as repository for the released Helm chart.

## Preparing your Helm chart for release

While you can release your Helm chart 'as is', there are some details to pay attention to regarding the structure and values of your chart:

### Add 'enabled' flags to optional services and resources

If your application contains optional steps, like an initial data set that is created via init container, it is best to wrap this declaration with an if statement, so that an user of your Helm chart can decide to not add this declaration to his cluster. The ingress definition(s) is also a good candidate for this.

Such an if statement could look like the following:

```yaml
# ingress.yaml
{ { - if .Values.ingress.enabled - } }
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
...
  { { - end } }
```

To enable/disable the ingress definition, you can define it in this way in your values.yaml

```yaml
# values.yaml
...
ingress:
  enabled: false # true, if you want to specify ingress definitions
...
```

### Do not specify ingress URLs

If your application include ingress definitions, you should not include any URL/host declarations in your
`values.yaml`. The default file will always be used to configure your deployment. If you release your Helm chart including a specific domain will be applied on every infrastructure as well. Regardless of their completely different domain setup.

It is best practice to not add any ingress related configuration at all in your default `values.yaml`. Instead, just define what a user of your Helm chart can configure through empty values, like in the following example:

```yaml
# values.yaml
ingress:
  enabled: false
  className: ""
  annotations: { }
  hosts: [ ]
  tls: [ ]
```

For deployments to your own infrastructure, you can still configure your ingress through an environment specific `values-<env>.yaml`.
