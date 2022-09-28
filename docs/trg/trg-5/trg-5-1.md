---
title: TRG 5.01 - HELM Chart requirements
---

| Author               | Status | Created      | Post-History |
|----------------------|--------|--------------|--------------|
| Catena-X System Team | Draft  | 28-Sept-2022 | n/a          |

## Description

All Catena-X/ Tractus-X components must be installable via HELM and meet following requirements:

- HELM chart must be released.
- Use appropriate versioning for `version` and `appVersion` in `Chart.yaml`.
- The released HELM chart shall not contain any environment specific `values-xyz.yaml` files.
- HELM chart `values.yaml` file must contain all values the chart will expect.
- HELM dependencies have to be declared in `Charts.yaml` file.

## Why

### Released HELM Charts

Tractus-X components can only be used and bundled with other components of Tractus-X if there is a version of the
component with reliable content. This can only be achieved by creating a release of your HELM chart. Please refer to [_
How to release a Helm Chart_](../../guides/how-to-release-a-helm-chart.md) and [_How to be part of the Release Umbrella
Helm Chart_](../../guides/how-to-be-part-of-release-umbrella-helm.md).

### Versioning

Versioning is essential when it comes to releasing HELM charts. In an ideal world your chart Version (defined
in `version` inside `Chart.yaml`) match the application version (defined in `appVersion` inside `Chart.yaml`) which the
HELM chart will deploy. This makes it for users easier to get and idea what will be installed in which version. Please
refer also to [_TRG 5.03 - Version Strategy_](trg-5-3.md).

To achieve a proper versioning of your HELM chart keep in mind, that it shall not contain version information that could
change outside the HELM chart, e.g. conatiner image tags (→ don't use container image tag _latest_).

### The `value.yaml` File

The `values.yaml` file is essential for HELM charts. The file must contain all values the chart is expecting and there
must no other values files except of `values.yaml` file. Released HELM charts must contain only `values.yaml` file.

### Dependencies

If a HELM chart has dependencies to other HELM charts, e.g. PostgreSQL, these dependencies must be specified in
the `Charts.yaml` file. Do not use outdated `requirements.yaml`.
