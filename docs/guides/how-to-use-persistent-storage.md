---
title: How to use persistent storage
---

This is a short guide on how to create persistent storage on Kubernetes clusters.

## Basic information

By default Kubernetes stores data for pods on the storage of the nodes the pods are started on. This presents various potential issues in terms of capacity, data retention, and security. Your application, and/or its dependency might need to store data in a persistent way. Kubernetes offers a simple to use solution for that in the form of persistent volumes.

One scenario is that your own application uses persistent storage. In this case you need to include the storage definition in the StatefulSet, Deployment or Pod.

The other use case is that you define one or more dependencies for your application, that require persistent storage, in which case the helm chart, that is a dependency, will have the storage defined in a similar way.

:::tip
You can both define persistent storage for your application, and use dependencies that also define such resource needs, at the same time.
:::

In both cases, all the rest will be taken care of by the Kubernetes engine and storage driver, creating the necessary resources in the Kubernetes cluster, and on the underlying cloud platform.

## Examples

### Defining persistent volume claim for deployment

To directly attach persistent storage to your deployment or pod, you will need a persistentVolumeClaim type resource, and add volume(s) to your deployment.

persistentVolumeClaim.yaml:

:::tip
This can be omitted if dynamic provisioning is enabled, i.e. no storageClassName is defined.
If storageClassName is set to "-", storageClassName: "", dynamic provisioning is disabled, in this case you need to define your own persistentVolumeClaim.
:::

```yaml
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: pvc-persistent-tmp-demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 50Mi
```

deployment.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
...
spec:
...
  template:
  ...
    spec:
    ...
      containers:
      ...
        - name: ...
          volumeMounts:
          ...
            - name: pv-tmp-demo
              readOnly: false
              mountPath: /tmp/demo
      volumes:
        ...
        - name: pv-tmp-demo
          persistentVolumeClaim:
            claimName: pvc-persistent-tmp-demo
...
```

### Persistent volumes in statefulSet(s)

When an application has multiple replicas, like in case of statefulSets, volumeClaimTemplates should be used instead of persistentVolumeClaims.
A volumeClaimTemplate will create PVC(s) for each replica.

```yaml
volumeClaimTemplates:
- metadata:
    name: pv-data
  spec:
    accessModes: 
      - ReadWriteOnce
    resources:
      requests:
        storage: 50Mi
```

:::tip
See this in action in our demo project, PVC example:
[persistentVolumeClaim.yaml](https://github.com/catenax-ng/k8s-helm-example/blob/main/charts/k8s-helm-example/templates/persistentVolumeClaim.yaml)
[deployment.yaml](https://github.com/catenax-ng/k8s-helm-example/blob/main/charts/k8s-helm-example/templates/deployment.yaml)
:::

### Defining dependencies that use persistent volume claims

[Product BPDM](https://github.com/catenax-ng/product-bpdm/blob/develop/helm/bpdm/Chart.yaml)

Two dependencies are defined, elasticsearch and postgresql, both of them use persistent volume claims to store their data.

For further information on how to define dependencies, please refer to this documentation

[How to define Helm chart dependencies](https://catenax-ng.github.io/docs/guides/how-to-helm-dependency)

### Defining persistent volume claims

[StatefulSet in Postgres Helm chart](https://github.com/bitnami/charts/blob/master/bitnami/postgresql/templates/primary/statefulset.yaml)

```yaml
  {{- if and .Values.primary.persistence.enabled .Values.primary.persistence.existingClaim }}
        - name: data
          persistentVolumeClaim:
            claimName: {{ tpl .Values.primary.persistence.existingClaim $ }}
  {{- else if not .Values.primary.persistence.enabled }}
        - name: data
          emptyDir: {}
  {{- else }}
  volumeClaimTemplates:
    - metadata:
        name: data
        {{- if .Values.primary.persistence.annotations }}
        annotations: {{- toYaml .Values.primary.persistence.annotations | nindent 10 }}
        {{- end }}
      spec:
        accessModes:
        {{- range .Values.primary.persistence.accessModes }}
          - {{ . | quote }}
        {{- end }}
        {{- if .Values.primary.persistence.dataSource }}
        dataSource: {{- include "common.tplvalues.render" (dict "value" .Values.primary.persistence.dataSource "context" $) | nindent 10 }}
        {{- end }}
        resources:
          requests:
            storage: {{ .Values.primary.persistence.size | quote }}
        {{- if .Values.primary.persistence.selector }}
        selector: {{- include "common.tplvalues.render" (dict "value" .Values.primary.persistence.selector "context" $) | nindent 10 }}
        {{- end }}
        {{- include "common.storage.class" (dict "persistence" .Values.primary.persistence "global" .Values.global) | nindent 8 }}
  {{- end }}
```

[Values file for Postgres Helm chart](https://github.com/bitnami/charts/blob/master/bitnami/postgresql/values.yaml)

```yaml
  ## PostgreSQL Primary persistence configuration
  ##
  persistence:
    ## @param primary.persistence.enabled Enable PostgreSQL Primary data persistence using PVC
    ##
    enabled: true
    ## @param primary.persistence.existingClaim Name of an existing PVC to use
    ##
    existingClaim: ""
    ## @param primary.persistence.mountPath The path the volume will be mounted at
    ## Note: useful when using custom PostgreSQL images
    ##
    mountPath: /bitnami/postgresql
    ## @param primary.persistence.subPath The subdirectory of the volume to mount to
    ## Useful in dev environments and one PV for multiple services
    ##
    subPath: ""
    ## @param primary.persistence.storageClass PVC Storage Class for PostgreSQL Primary data volume
    ## If defined, storageClassName: <storageClass>
    ## If set to "-", storageClassName: "", which disables dynamic provisioning
    ## If undefined (the default) or set to null, no storageClassName spec is
    ##   set, choosing the default provisioner.  (gp2 on AWS, standard on
    ##   GKE, AWS & OpenStack)
    ##
    storageClass: ""
    ## @param primary.persistence.accessModes PVC Access Mode for PostgreSQL volume
    ##
    accessModes:
      - ReadWriteOnce
    ## @param primary.persistence.size PVC Storage Request for PostgreSQL volume
    ##
    size: 8Gi
    ## @param primary.persistence.annotations Annotations for the PVC
    ##
    annotations: {}
    ## @param primary.persistence.selector Selector to match an existing Persistent Volume (this value is evaluated as a template)
    ## selector:
    ##   matchLabels:
    ##     app: my-app
    ##
    selector: {}
    ## @param primary.persistence.dataSource Custom PVC data source
    ##
    dataSource: {}
```

:::tip
If no storage class is defined, the default on the Kubernetes cluster will be used.
:::

### Configuring storage

The needs of the application can be different per use case, therefore it make sense to check the storage options of the cloud provider in use. For example a high I/O application will benefit from high performance SSD storage, in other cases when large amounts of data will be stored, high capacity HDD. You can customize this, as well as the size of your storage through helm chart variable(s), or custom values file(s).
