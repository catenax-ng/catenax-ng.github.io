---
title: How To Define Helm Chart Dependencies
---

This guide shows how to reference a Helm chart as dependency through an example.
The example application is [Backstage](https://backstage.io/) which by default installs a dedicated Postgresql instance as a dependency in case you do not already have one and want to specify it in the application configuration.

How to reference the Postgresql Helm chart:

[Chart.yaml](https://github.com/backstage/backstage/blob/master/contrib/chart/backstage/Chart.yaml)

```
...
dependencies:
  - name: postgresql
    condition: postgresql.enabled
    version: 9.8.12
    repository: https://charts.bitnami.com/bitnami
...
```

Name should match the name in the Chart.yaml of the dependency Helm chart.

The version field should contain a semantic version or version range.

The repository URL should point to a Chart Repository, or can be defined as the path to the directory of the dependency charts stored locally.

The condition controls whether or not to install the dependency, in this case this option is defined in values.yaml (see below).

[Further info](https://helm.sh/docs/helm/helm_dependency/)

[Best Pactices](https://helm.sh/docs/chart_best_practices/dependencies/)

How to en-/disable the deployment of Postgresql and configure it:

[values.yaml](https://github.com/backstage/backstage/blob/master/contrib/chart/backstage/values.yaml)

```
...
postgresql:
  enabled: true
  nameOverride: postgresql
  tls:
    enabled: true
    certificatesSecret: backstage-postgresql-certs
    certFilename: tls.crt
    certKeyFilename: tls.key
  volumePermissions:
    enabled: true
  initdbScriptsSecret: backstage-postgresql-initdb
...
```

Further parameters that can be configured:

[Bitnami Postgresql Helm Chart readme](https://github.com/bitnami/charts/blob/master/bitnami/postgresql/README.md#parameters)

Generate ca certs and random password for Postgresql:

(e.g. templates\_helpers.tpl)

```
{{/*
Generate ca for postgresql
*/}}
{{- define "backstage.postgresql.generateCA" -}}
{{- $ca := .ca | default (genCA (include "backstage.postgresql.fullname" .) 365) -}}
{{- $_ := set . "ca" $ca -}}
{{- $ca.Cert -}}
{{- end -}}

{{/*
Generate certificates for postgresql
*/}}
{{- define "generateCerts" -}}
{{- $postgresName := (include "backstage.postgresql.fullname" .) }}
{{- $altNames := list $postgresName ( printf "%s.%s" $postgresName .Release.Namespace ) ( printf "%s.%s.svc" ( $postgresName ) .Release.Namespace ) -}}
{{- $ca := .ca | default (genCA (include "backstage.postgresql.fullname" .) 365) -}}
{{- $_ := set . "ca" $ca -}}
{{- $cert := genSignedCert ( $postgresName ) nil $altNames 365 $ca -}}
tls.crt: {{ $cert.Cert | b64enc }}
tls.key: {{ $cert.Key | b64enc }}
{{- end -}}

{{/*
Generate a password for the postgres user used for the connections from the backend and lighthouse
*/}}
{{- define "postgresql.generateUserPassword" -}}
{{- $pgPassword := .pgPassword | default ( randAlphaNum 12 ) -}}
{{- $_ := set . "pgPassword" $pgPassword -}}
{{ $pgPassword}}
{{- end -}}
```

Create a configmap or secret with the generated cert:

(e.g. templates/...yaml)

configmap - cert:

```
{{- if .Values.postgresql.enabled }}
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ include "backstage.fullname" . }}-postgres-ca
  labels:
    app: {{ include "backstage.postgresql.fullname" . }}
    release: {{ .Release.Name }}
  annotations:
    "helm.sh/hook": "pre-install"
    "helm.sh/hook-delete-policy": "before-hook-creation"
data:
  {{ .Values.global.postgresql.caFilename }}: |
{{ include "backstage.postgresql.generateCA" . | indent 4}}
{{- else }}
{{- $caConfig := printf "%s-postgres-ca"  (include "backstage.fullname" .) }}
{{- if not ( lookup "v1" "ConfigMap" .Release.Namespace $caConfig ) }}
{{- fail (printf "\n\nPlease create the '%s' configmap with the CA certificate for your existing postgresql: kubectl create configmap %s --from-file=ca.crt" $caConfig $caConfig) }}
{{- end }}
{{- end }}

```

secret - cert:

```
{{- if .Values.postgresql.enabled }}
---
apiVersion: v1
kind: Secret
type: kubernetes.io/tls
metadata:
  name: {{ required ".Values.postgresql.tls.certificatesSecret is required" .Values.postgresql.tls.certificatesSecret }}
  labels:
    app: {{ include "backstage.postgresql.fullname" . }}
    release: {{ .Release.Name }}
  annotations:
    "helm.sh/hook": "pre-install"
    "helm.sh/hook-delete-policy": "before-hook-creation"
data:
{{ include "generateCerts" . | indent 2 }}
{{- end }}
```

secret - password:

```
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: {{ include "backend.postgresql.passwordSecret" . }}
  labels:
    release: {{ .Release.Name }}
  annotations:
    "helm.sh/hook": "pre-install,pre-upgrade"
    "helm.sh/hook-delete-policy": "before-hook-creation"
data:
{{- if not .Values.postgresql.enabled }}
  postgresql-password: {{ .Values.appConfig.backend.database.connection.password | b64enc }}
{{- else -}}
  postgresql-password: {{ include postgresql.generateUserPassword . | b64enc }}
{{- end }}
```

Postgresql connetion settings:

(backend deployment)

```
apiVersion: apps/v1
kind: Deployment
...
spec:
...
  templates:
  ...
    spec:
    ...
      containers:
      ...
        env:
        ...
          - name: APP_CONFIG_backend_database_connection_password
            valueFrom:
              secretKeyRef:
                name: {{ include "backend.postgresql.passwordSecret" .}}
                key: postgresql-password
        volumeMounts:
          {{- if .Values.backend.postgresCertMountEnabled }}
          - name: postgres-ca
            mountPath: {{ include "backstage.backend.postgresCaDir" . }}
          {{- end }}
        ...
      volumes:
        {{- if .Values.backend.postgresCertMountEnabled }}
        - name: postgres-ca
          configMap:
            name: {{ include "backstage.fullname" . }}-postgres-ca
        {{- end }}
```

(values.yaml)

```
...
appConfig:
...
  backend:
  ...
    database:
      client: pg
      connection:
        database: backstage_plugin_catalog
        host:
        user:
        port:
        password:
        ssl:
          rejectUnauthorized: false
          ca:
...
```
