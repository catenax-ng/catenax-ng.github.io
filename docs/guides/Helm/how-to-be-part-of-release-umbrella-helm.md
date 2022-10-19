---
title: How to be part of the Release Umbrella Helm Chart
/slug: how-to-be-part-of-release-umbrella-helm
---

This guide describes how a product team can be part of the Release Umbrella Helm chart via pull request in
the [catena-x-release](https://github.com/catenax-ng/catena-x-release) repository. It also explains how an already added
subchart version can be upgraded.

## General information

- There is a [Github repository](https://github.com/catenax-ng/catena-x-release) that is containing a single umbrella
  Helm chart.
- The repository is responsible for collecting the Helm charts of each product team that are part of the release as a
  dependency.
- This way the deployment of the whole stack can be done with a single `helm install` command or a single ArgoCD
  application.
- One unified _values.yaml_ contains the whole configuration of the software stack

## How to include product in the umbrella chart

:::caution
For a team to be able to be part of the umbrella Helm chart, they already need to have their product published to a Helm
chart. It can be done for example with the [helm-chart-releaser Github Action](how-to-release-a-helm-chart.md) that
turnes the repository into a public Helm chart.
:::

If a product team wants to include their application within the umbrella Helm chart, they can do it by as the following:

1. Clone [catena-x-release](https://github.com/catenax-ng/catena-x-release) repository
2. Create new branch from main
3. Edit the _Chart.yaml_ file, add the application's Helm chart as a
   dependency [based on this guide](#add-application-as-a-dependency)
4. Add a condition, so it's deployment can be optional
5. Commit & push changes
6. Open pull request

After these steps are completed, the System Team will review the request. If every check passes, the changes will be
merged back to the main branch and the Umbrella Helm chart will be rebuilt (now including the new application).

## Add application as a dependency

:::caution
It is important to introduce a condition to the dependency, so it can be turned off optionally.
:::

Here is a look at the _Chart.yaml_ file:

```yaml
apiVersion: v2
name: cxcore
description: A Helm containing all core components of the Catena-X Automotive network

type: application

version: 0.1.1

appVersion: "release-2.0"

dependencies:
  - name: product-1
    version: 1.4.1
    condition: product-1.enabled
    repository: https://catenax-ng.github.io/product-repo-1/
  - name: product-2
    version: 1.0.0
    condition: product-2.enabled
    repository: https://catenax-ng.github.io/product-2/

```

If a team edits this file, they need to add a new block inside dependencies:

```yaml
  - name: product-3
    version: 1.0.5
    condition: product-3.enabled
    repository: https://catenax-ng.github.io/product-3/

```

:::tip
How to set values:

- _name_:  
  The name of the chart
- _version_:  
  The chart version of the application, that can be found in the _Chart.yaml_ file's version variable in the
  application's Helm chart
- _condition_:  
  _product-name.enabled_ → This is required, so the application deployment can be skipped optionally when the umbrella
  chart is deployed
- _repository_:  
  The url, where the _index.yaml_ of the Helm chart can be found.

:::

## Update application chart version

If a product team has released a new chart version in their repository, the change should be reflected in the umbrella
Helm chart as well. To do so, the process is the following:

1. New chart version is released in the product's repository
2. Clone [catena-x-release](https://github.com/catenax-ng/catena-x-release) repository
3. Create new branch from main
4. Edit the _Chart.yaml_ file, change the version of the application dependency to the released chart version
5. Commit & push changes
6. Open pull request

After these steps are completed, the System Team will review the request. If every check passes, the changes will be
merged back to the main branch and the Umbrella Helm chart will be rebuilt (now including the new chart version of the
application).
