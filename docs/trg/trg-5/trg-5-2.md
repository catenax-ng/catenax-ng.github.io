---
title: TRG 5.02 - Chart structure
---

| Author               | Status | Created      | Post-History |
|----------------------|--------|--------------|--------------|
| Catena-X System Team | Draft  | 14-Sept-2022 | n/a          |
| Catena-X System Team | Draft  | 28-Sept-2022 | n/a          |

## Description

Each Helm chart should follow a specific structure. Helm provides [recommendations for creating charts](https://helm.sh/docs/chart_template_guide/getting_started/).

### Top level

Helm charts should be put in separate directories inside the /charts folder in the Git repository's root.  

:::tip

For example:

- /charts/chart-1/
- /charts/chart-2/

:::

### Structure of a Helm chart

A Helm chart need to contain the following files/directories:

- _Chart.yaml_: Contains the description of the chart like name, version, appVersion, dependencies. See the [documentation](https://helm.sh/docs/topics/charts/#the-chartyaml-file)
- _templates/_ directory: Helm is sending every template file in this directory through a rendering pipeline and sends the result to Kubernetes.
- _.helmigore_: List files and directories that should be excluded from the chart. Recommended to use, so no unnecessary artefacts will be included.

## Why

Following best practices when creating the chart helps everyone better understand, deploy and test the product. Having similar structure for every Helm chart enables easy implementation of testing and deployment workflows.
