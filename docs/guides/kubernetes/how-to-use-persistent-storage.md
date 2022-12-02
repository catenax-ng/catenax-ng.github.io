---
title: How to use persistent storage
---

This is a short guide on how to create persistent storage on Kubernetes clusters.

## A very basic PersistentVolumeClaim (PVC) definition

PVC without storage class, using default

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: example-pvc
spec:
  accessModes:
    - ReadWriteOnce
  volumeMode: Filesystem
  resources:
    requests:
      storage: 8Gi
```

:::caution Reclaim policy Delete vs Retain
By default AKS clusters have storage classes with reclaim policy Delete
This means if the PVC is deleted, the underlying PersistentVolume (PV) will also be deleted
To prevent this from happening, on **dev and int clusters** use storageclass **default-retain**

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: example-pvc
spec:
  accessModes:
    - ReadWriteOnce
  volumeMode: Filesystem
  storageClassName: default-retain
  resources:
    requests:
      storage: 8Gi
```

:::

A basic example in [k8s-helm-example](https://github.com/catenax-ng/k8s-helm-example/tree/main/charts/k8s-helm-example/templates/persistentVolumeClaim.yaml)

## Templating PVC

### Create a template in the templates directory of the helm chart

```yaml templates/PVC.yaml
{{- if .Values.persistence.enabled }}
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: {{ .Release.Name }}
spec:
  accessModes:
    {{- range .Values.persistence.accessModes }}
    - {{ . | quote }}
    {{- end }}
  volumeMode: {{ .Values.persistence.mode }}
  {{- if .Values.persistence.class }}
  storageClassName: {{ .Values.persistence.class }}
  {{- end }}
  resources:
    requests:
      storage: {{ .Values.persistence.size }}
{{- end }}
```

### Specify values for PVC in values.yaml

```yaml values.yaml
persistence:
  enabled: true
  accessModes:
    - ReadWriteOnce
  mode: Filesystem
  class: default-retain
  size: 8Gi
```

:::info Persistent Volumes in Statefulsets
In case a Statefulset needs persistent storage, volume claim templates generate PVCs for its replicas

```yaml
volumeClaimTemplates:
- metadata:
    name: example-pvc
  spec:
    accessModes:
      - ReadWriteOnce
    volumeMode: Filesystem
    storageClassName: default-retain
    resources:
      requests:
        storage: 8Gi

```

:::
