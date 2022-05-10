---
title: How to expose your app to the internet
---

By default, the pods you create in a kubernetes cluster are not exposed to the outside of the cluster. If you want to
make your application accessible through the internet, you can specify
an [ingress definition](https://kubernetes.io/docs/concepts/services-networking/ingress/). Ingress definitions that are
applied to a kubernetes cluster, are picked up by
an [ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/), which will route
traffic from the entrypoint to your services and/or pods. The ingress controller usually only exists once on a cluster
and can manage multiple ingress definitions provided by you.

## Catena-X kubernetes cluster setup

All the kubernetes clusters provided as demonstration environments at Catena-X already come
with [ingress-nginx](https://kubernetes.github.io/ingress-nginx/)
as ingress controller installed.

For proper TLS setup, [cert-manager](https://cert-manager.io/docs/) is used to provide your application with
certificates issued by [Let's Encrypt](https://letsencrypt.org/).

## Defining your ingress definition (with helm)

Typically, you would add the ingress definition for your app to your helm chart. The following example can be used as a
template:

```yaml
{{- if .Values.ingress.enabled -}}
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  # name of the ingress resource. -ingress suffix as suggestion for clear naming convention
  name: {{ .Values.appName }}-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    nginx.ingress.kubernetes.io/ssl-passthrough: "true"
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
spec:
  rules:
    # IMPORTANT: specifies the entrypoint (domain), myApp will be accessible from
    - host: {{ .Values.appName }}.{{ .Values.environment }}.demo.catena-x.net
      http:
        paths:
          # specific path the app should be reachable on the host
          # complete URL for the app consists of host AND path
          - path: /
            pathType: Prefix
            backend:
              service:
                # Name of the service, the ingress controller should route the traffic to, if the host/path combination is called
                # Adjust that to your service name
                name: my-k8s-service
                port:
                  # Port number, the kubernetes service is listening on
                  # Adjust that to your services' port
                  number: 8080
                  
  # Config for creating proper TLS certificates host has to match the one from the ingress rule
  tls:
    - hosts:
        - {{ .Values.appName }}.{{ .Values.environment }}.demo.catena-x.net
      # Default secret for certificate creation already provided to your namespace
      secretName: tls-secret
{{- end }}
```

A values.yaml used for this template could look like the following:

```yaml
appName: "my-app"
environment: "dev"

ingress:
  enabled: true
```
