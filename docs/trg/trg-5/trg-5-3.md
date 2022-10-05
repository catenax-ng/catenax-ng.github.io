---
title: TRG 5.03 - Version strategy
---

| Author               | Status | Created      | Post-History |
|----------------------|--------|--------------|--------------|
| Catena-X System Team | Draft  | 14-Sept-2022 | n/a          |
| Catena-X System Team | Draft  | 28-Sept-2022 | n/a          |

## Description

Versioning is a complex topic in Helm charts.
For more details, see the [official documentation](https://helm.sh/docs/topics/charts/#charts-and-versioning)
Version numbers can be separated to two categories:

- Helm chart version
- App version

### Helm chart version

It is located in the _Chart.yaml_ under the _version_ property.
It follows semantic versioning.
The version should be bumped every time the _Chart.yaml_ file or any file in the _templates_ directory is changed.

### App version

The default app version value is located in the _Chart.yaml_ file under the _appVersion_ property.
The format does not have to follow semantic versioning but it is recommended.
The _appVersion_ should be used in the templates as the default image tag for the deployment/pod.
The image tag should be overridable through values files.
Every time the _appVersion_ property is upgraded the chart _version_ number should be bumped as well.

## Why

Correct versioning is crucial when testing and deploying the application.
It helps identifying issues with the chart or the application image.
Upgrading or rolling back of the deployment would lead to problems without proper versioning.
