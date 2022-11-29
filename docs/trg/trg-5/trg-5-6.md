---
title: TRG 5.06 - Chart Dependencies
---

| Author               | Status | Created      | Post-History |
|----------------------|--------|--------------|--------------|
| Catena-X System Team | Draft  | 28-Nov-2022 | n/a          |

## Description

Helm chart dependecies are defined in the `Chart.yaml` file. They are used to provide additional software to the application that is required for running. The intent of this section is to align the versions of specific widely used dependencies so all product teams will use the same. This can lead to better parity and will grant the opportunity to probably use a single instane of these dependencies that can be shared among all products in the future.

## Helm dependency example

An example dependency definition in the `Chart.yaml` file:

```yaml
dependencies:
  - condition: postgresql.enabled
    alias: product-name-postgresql
    name: postgresql
    repository: https://charts.bitnami.com/bitnami
    version: 11.x.x
```

- Usage of condition, alias and version properties are optional but highly recommended
- Add a unique alias as name to your dependency that corresponds with your product name
- With the condition, dependencies can be disabled/enabled on demand

## Installing a chart with dependencies

The following commands have to run before installing the chart if it has dependencies:

```
helm repo add [REPO_URL] //for example: https://charts.bitnami.com/bitnami
helm dependency update
```

Then the install can be done with `helm install [NAME] [CHART] [flags]`

## Aligning dependency versions

|Name |Repo URL |Chart version | App version|
|--- | --- | ---| ---|
|postgresql | [Bitnami](https://charts.bitnami.com/bitnami) | 11.x.x| 14.5.0|
