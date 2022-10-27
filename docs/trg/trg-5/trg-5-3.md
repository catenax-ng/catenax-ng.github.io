---
title: TRG 5.03 - Version strategy
---

| Author               | Status | Created      | Post-History |
|----------------------|--------|--------------|--------------|
| Catena-X System Team | Draft  | 14-Sept-2022 | n/a          |
| Catena-X System Team | Draft  | 28-Sept-2022 | n/a          |

## Description

Correct versioning is crucial when testing and deploying the application.
It helps identifying issues with the chart or the application image.
Upgrading or rolling back of the deployment would lead to problems without proper versioning.

For more details, see the [official documentation](https://helm.sh/docs/topics/charts/#charts-and-versioning)
There are two different version properties for a Helm chart:

- Chart version
- App version

### Chart version

It is located in the _Chart.yaml_ under the _version_ property.
It requires __semantic versioning__ format.
The __Chart version have to be incresed__ every time one of the following file is changed:

- Chart.yaml
- values.yaml
- templates directory

### App version

The default app version value is located in the _Chart.yaml_ file under the __appVersion__ property.
Any format can be used, but the appVersion and the image tag of your
docker images should be aligned. This means, the appVersion should be used in the templates as the __default image tag__
for the deployment/pod.
Every time the appVersion property is upgraded the __chart version__ number have to be increased as well.
