---
title: How to use persistent storage
---

This is a short guide on how to create persistent storage on Kubernetes clusters.

# Basic information

Your application, and/or one of its dependencies might need to store data in persistent storage. Kubernetes offers a simple to use solution for that.

One scenario is that your own application uses persistent storage. In this case you need to include the storage definition in the StatefulSet, Deployment or Pod.

The other use case is that you define one or more dependencies for your application, that require persistent storage, in which case the helm chart, that is a dependency, will have the storage defined in a similar way.

:::tip
You can both define persistent storag for your application, and use dependencies that also define such resource needs, at the same time.
:::

In both cases, all the rest will be taken care of by the Kubernetes engine and storage driver, creating the necessary resources in the Kubernetes cluster, and on the underlying cloud platform.

# Examples

## Defining dependencies that use persistent volume claims

[Product BPDM](https://github.com/catenax-ng/product-bpdm/blob/develop/helm/bpdm/Chart.yaml)

Two dependencies are defined, elasticsearch and postgresql, both of them use persistent volume claims to store their data.

For further information on how to define dependencies, please refer to this documentation

[How to define Helm chart dependencies](https://catenax-ng.github.io/docs/guides/how-to-helm-dependency)

## Defining persistent volume claims

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

Although conditions and values file variables are extensively used in this exaple, the persistent volume claims are defined.

:::tip
If you feel the need to increase the storage capacity for a dependency of your application, you can do so by supplying the appropriate configuration through helm chart variable(s), or custome values file(s).
:::
