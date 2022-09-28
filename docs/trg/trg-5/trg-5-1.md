---
title: TRG 5.01 - HELM Chart requirements
---

| Author               | Status | Created      | Post-History |
|----------------------|--------|--------------|--------------|
| Catena-X System Team | Draft  | 14-Sept-2022 | n/a          |
| Catena-X System Team | Draft  | 28-Sept-2022 | n/a          |

## Description

All Catena-X/ Tractus-X components must be installable via HELM and meet following requirements:

- HELM Chart must be released
- The _index.yaml_ that contains the Helm Chart must be publicly available
- A _values.yaml_ file with default values (no environment specific) should be present in the Chart
- The Chart should be installable via _helm install_ command without providing any value override
- The _Chart.yaml_ should contain proper versioning, _version_ and _appVersion_ variables need to be set according to the official [documentation](https://helm.sh/docs/topics/charts/#charts-and-versioning)

We are also providing guides on the following Helm related topics:

- [How to be part of the Release Umbrella Helm Chart](../../guides/how-to-be-part-of-release-umbrella-helm.md)
- [How To Define Helm Chart Dependencies](../../guides/how-to-helm-dependency.md)
- [How to lint and test your helm chart](../../guides/how-to-lint-and-test-your-helm-chart.md)
- [How to release a Helm chart](../../guides/how-to-release-a-helm-chart.md)

## Why

It is crucial to have a properly working Helm Chart for every product. The applications has to be installable without providing any overriding values, so they can be tested, deployed, included in ci/cd workflows, etc. All charts have to follow versioning rules, so everyone can have an easy understanding what chart version and application version (container tag) is being deployed.
