---
slug: Post Mortem 2022-08-29
title: Post Mortem 2022-08-29
authors: DevSecOps
tags: [news, post-mortem]
---

## DEV Environment Inaccessible

### Date

| Start                       | End                    |
|-----------------------------|------------------------|
| August 29th 2022, 8:10 CEST | 29.08.2022, 14:15 CEST |

### Authors

Carsten Lenz, Mercedes-Benz Tech Innovation GmbH

### Status

Solved

### Summary

Due to maintenance work the kubernetes ingress controller stopped working. As a result DEV environment seemed to be
down.

### Impact

All product teams as well as system team where unable to access the Catena-X
DEV [ArgoCD instance](https://argo.dev.demo.catena-x.net)

### Root Causes

Upgrading Azure AKS Kubernetes Cluster to 1.24 introduced a breaking change regarding ingress controller configuration.
Due to broken Ingress DEV environment was inaccessible.

Microsoft has changed protocol for health probing from TCP to HTTP/HTTPS which blocked all HTTP/S traffic as health
probing had higher priority over ordinary traffic reaching the cluster.

In the end the outage was caused by a missing AKS related annotation for ingress controller, which Microsoft only added
to the AKS documentation after there were many issues reported to AKS. At time of DEV outage the MS documentation was
lacking this information.

### Resolution

Adding missing annotation to ingress controller:

````yaml
ingress-nginx:
  controller:
    service:
      annotations:
        service.beta.kubernetes.io/azure-load-balancer-health-probe-request-path: "/healthz"
````

## Action Items

- Adherence to internal policies (-> system team)
- Implement better testing upfront of maintenance tasks
- Do not upgrade to latest available AKS version

## Lessons Learned

- No careless execution of maintenance work
- Better maintenance planning upfront
