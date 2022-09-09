---
slug: Post Mortem 2022-08-30
title: Post Mortem 2022-08-30
authors: DevSecOps
tags: [news, post-mortem]
---

## Azure AKS - Unable to pull images

### Date

| Start                       | End                    |
|-----------------------------|------------------------|
| August 30th 2022, 8:00 CEST | 31.08.2022, 11:42 CEST |

### Authors

Carsten Lenz, Mercedes-Benz Tech Innovation GmbH

### Status

Solved

### Summary

Outgoing internet traffic on Azure AKS clusters was blocked. As a result, pulling images in our environments did not
work.

### Impact

All Catena-X AKS clusters were affected by this issue.

### Root Causes

Microsoft deployed a defective systemd version to AKS clusters, which blocked outgoing internet traffic.

Sources:

- [Canonical launchpad with bug report](https://bugs.launchpad.net/ubuntu/+source/systemd/+bug/1988119)
- [heise.de Azure: Ubuntu-VMs durch systemd-Update lahmlegt, Kubernetes-Services gestört (german)](https://www.heise.de/news/Azure-Ubuntu-VMs-durch-systemd-Update-lahmlegt-Kubernetes-Services-gestoert-7249521.html)

### Resolution

We have been in contact with MS Azure support starting 30.08.2022. During 31.08.2022 we received a temporary solution
from MS support, which was applied to all our AKS clusters. Afterwards our clusters recovered and image pulling was
possible again.

## Action Items

None, as this was a global MS Azure AKS related incident.
