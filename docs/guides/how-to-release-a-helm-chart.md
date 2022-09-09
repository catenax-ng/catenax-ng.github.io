---
title: How to release a helm chart
---

This guide will describe, why you should release your helm charts and how you can achieve that. We will also describe
some common pitfalls and how to handle them.

If the team has requested the new repository with [k8s-helm-example](https://github.com/catenax-ng/k8s-helm-example) repositry set as template, the [chart releaser action](#adding-the-chart-release-github-workflow) will already be present. The file can be modified/personalized to unique needs.

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

There are several options to release your chart. The one option we propose is using the
[chart-releaser-action](https://github.com/helm/chart-releaser-action) in a
GitHub workflow. For `chart-releaser-action` to work, there need to be some requirements met.

### Prerequisites

We recommend using `chart-releaser-action` in its default configuration. There are two requirements that have to be met,
if you want to use the default configuration.

1. Your helm charts need to be in the `/charts/<chart-name` directory of your repository
2. GitHub pages need to be activated for your repository and point to a 'gh-pages' branch. Your GitHub organization
   admins can activate that for you
3. The gh-pages branch needs to exist on the remote repository on GitHub

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

### How to run the release action

If you are using the chart release workflow 'as-is' from above, you have two options for running it.
The first one is a manual dispatch that you can trigger on the GitHub UI. This is usually not necessary but anyway an
option.

The second and better option is to tag your source code in git and push that tag to the remote repository on GitHub.
This can be done as follows:

```shell
# After after finishing your features and merging it to main branch, tag it with your desired version number

# get the latest version of your main branch
git checkout main && git pull

# define a tag for the current version in main (here version 1.0.0 as example)
git tag v1.0.0
# publish this tag to the remote repository on GitHub
git push origin --tags
```

This will automatically trigger the above defined workflow. The chart-releaser-action will then check your chart for
changes (changed values, changed templates, changed dependencies, etc.) and if there are changes, package the chart
into an compressed archive. Additionally, it will update an index.yaml file in the 'gh-pages' branch. This index.yaml
file is needed, for enabling your GitHub pages to function as repository for the released helm chart.

## Preparing your helm chart for release

While you can release your helm chart 'as is', there are some things regarding the structure and values of your chart.
The following section describe some of these details.

### Add 'enabled' flags to optional services and resources

If your application contains optional steps, like an initial data set, that is created via init container, it is best to
wrap this declaration with an if statement, so that a user of your helm chart can decide to not add this declaration to
his cluster. The ingress definition(s) is also a good candidate for this.

Such an if statement could look like the following:

```yaml
# ingress.yaml
{{- if .Values.ingress.enabled -}}
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
...
{{- end }}
```

To enable/disable the ingress definition, you would then define it like the following in your values.yaml

```yaml
# values.yaml
...
ingress:
  enabled: false # true, if you want to specify ingress definitions
...
```

### Do not specify ingress URLs

If your application includes ingress definitions, you should not include any URL/host declarations in your
`values.yaml`. The default values.yaml file will always be used to configure your deployment. If you release your helm
chart and someone else is using it to deploy your application, the specific domain you declared in your default
values.yaml file will be applied on that infrastructure as well. Regardless of a completely different domain setup.

So it is best, to not add any ingress related configuration at all in your default values.yaml. Instead, just define
what a user of your helm chart can configure with empty values, like in the following example:

```yaml
# values.yaml
ingress:
  enabled: false
  className: ""
  annotations: { }
  hosts: [ ]
  tls: [ ]
```

For deployments to your own infrastructure, you can still configure ingress through an environment specific
`values-<env>.yaml`.
