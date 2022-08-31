"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[8282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?a.createElement(g,o(o({ref:n},i),{},{components:t})):a.createElement(g,o({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8119:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={title:"How To Define Helm Chart Dependencies"},o=void 0,l={unversionedId:"guides/how-to-helm-dependency",id:"guides/how-to-helm-dependency",title:"How To Define Helm Chart Dependencies",description:"This guide shows how to reference a Helm chart as dependency through an example.",source:"@site/docs/guides/how-to-helm-dependency.md",sourceDirName:"guides",slug:"/guides/how-to-helm-dependency",permalink:"/docs/guides/how-to-helm-dependency",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/how-to-helm-dependency.md",tags:[],version:"current",frontMatter:{title:"How To Define Helm Chart Dependencies"},sidebar:"tutorialSidebar",previous:{title:"How to expose your app to the internet",permalink:"/docs/guides/how-to-expose-an-app-to-the-internet"},next:{title:"How lint and test your helm chart",permalink:"/docs/guides/how-to-lint-and-test-your-helm-chart"}},c={},p=[],i={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide shows how to reference a Helm chart as dependency through an example.\nThe example application is ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/"},"Backstage")," which by default installs a dedicated Postgresql instance as a dependency in case you do not already have one and want to specify it in the application configuration."),(0,r.kt)("p",null,"How to reference the Postgresql Helm chart:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/contrib/chart/backstage/Chart.yaml"},"Chart.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\ndependencies:\n  - name: postgresql\n    condition: postgresql.enabled\n    version: 9.8.12\n    repository: https://charts.bitnami.com/bitnami\n...\n")),(0,r.kt)("p",null,"Name should match the name in the Chart.yaml of the dependency Helm chart."),(0,r.kt)("p",null,"The version field should contain a semantic version or version range."),(0,r.kt)("p",null,"The repository URL should point to a Chart Repository, or can be defined as the path to the directory of the dependency charts stored locally."),(0,r.kt)("p",null,"The condition controls whether or not to install the dependency, in this case this option is defined in values.yaml (see below)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_dependency/"},"Further info")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_best_practices/dependencies/"},"Best Pactices")),(0,r.kt)("p",null,"How to en-/disable the deployment of Postgresql and configure it:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/contrib/chart/backstage/values.yaml"},"values.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\npostgresql:\n  enabled: true\n  nameOverride: postgresql\n  tls:\n    enabled: true\n    certificatesSecret: backstage-postgresql-certs\n    certFilename: tls.crt\n    certKeyFilename: tls.key\n  volumePermissions:\n    enabled: true\n  initdbScriptsSecret: backstage-postgresql-initdb\n...\n")),(0,r.kt)("p",null,"Further parameters that can be configured:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/blob/master/bitnami/postgresql/README.md#parameters"},"Bitnami Postgresql Helm Chart readme")),(0,r.kt)("p",null,"Generate ca certs and random password for Postgresql:"),(0,r.kt)("p",null,"(e.g. templates_helpers.tpl)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{{/*\nGenerate ca for postgresql\n*/}}\n{{- define "backstage.postgresql.generateCA" -}}\n{{- $ca := .ca | default (genCA (include "backstage.postgresql.fullname" .) 365) -}}\n{{- $_ := set . "ca" $ca -}}\n{{- $ca.Cert -}}\n{{- end -}}\n\n{{/*\nGenerate certificates for postgresql\n*/}}\n{{- define "generateCerts" -}}\n{{- $postgresName := (include "backstage.postgresql.fullname" .) }}\n{{- $altNames := list $postgresName ( printf "%s.%s" $postgresName .Release.Namespace ) ( printf "%s.%s.svc" ( $postgresName ) .Release.Namespace ) -}}\n{{- $ca := .ca | default (genCA (include "backstage.postgresql.fullname" .) 365) -}}\n{{- $_ := set . "ca" $ca -}}\n{{- $cert := genSignedCert ( $postgresName ) nil $altNames 365 $ca -}}\ntls.crt: {{ $cert.Cert | b64enc }}\ntls.key: {{ $cert.Key | b64enc }}\n{{- end -}}\n\n{{/*\nGenerate a password for the postgres user used for the connections from the backend and lighthouse\n*/}}\n{{- define "postgresql.generateUserPassword" -}}\n{{- $pgPassword := .pgPassword | default ( randAlphaNum 12 ) -}}\n{{- $_ := set . "pgPassword" $pgPassword -}}\n{{ $pgPassword}}\n{{- end -}}\n')),(0,r.kt)("p",null,"Create a configmap or secret with the generated cert:"),(0,r.kt)("p",null,"(e.g. templates/...yaml)"),(0,r.kt)("p",null,"configmap - cert:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{{- if .Values.postgresql.enabled }}\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: {{ include "backstage.fullname" . }}-postgres-ca\n  labels:\n    app: {{ include "backstage.postgresql.fullname" . }}\n    release: {{ .Release.Name }}\n  annotations:\n    "helm.sh/hook": "pre-install"\n    "helm.sh/hook-delete-policy": "before-hook-creation"\ndata:\n  {{ .Values.global.postgresql.caFilename }}: |\n{{ include "backstage.postgresql.generateCA" . | indent 4}}\n{{- else }}\n{{- $caConfig := printf "%s-postgres-ca"  (include "backstage.fullname" .) }}\n{{- if not ( lookup "v1" "ConfigMap" .Release.Namespace $caConfig ) }}\n{{- fail (printf "\\n\\nPlease create the \'%s\' configmap with the CA certificate for your existing postgresql: kubectl create configmap %s --from-file=ca.crt" $caConfig $caConfig) }}\n{{- end }}\n{{- end }}\n\n')),(0,r.kt)("p",null,"secret - cert:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{{- if .Values.postgresql.enabled }}\n---\napiVersion: v1\nkind: Secret\ntype: kubernetes.io/tls\nmetadata:\n  name: {{ required ".Values.postgresql.tls.certificatesSecret is required" .Values.postgresql.tls.certificatesSecret }}\n  labels:\n    app: {{ include "backstage.postgresql.fullname" . }}\n    release: {{ .Release.Name }}\n  annotations:\n    "helm.sh/hook": "pre-install"\n    "helm.sh/hook-delete-policy": "before-hook-creation"\ndata:\n{{ include "generateCerts" . | indent 2 }}\n{{- end }}\n')),(0,r.kt)("p",null,"secret - password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Secret\ntype: Opaque\nmetadata:\n  name: {{ include "backend.postgresql.passwordSecret" . }}\n  labels:\n    release: {{ .Release.Name }}\n  annotations:\n    "helm.sh/hook": "pre-install,pre-upgrade"\n    "helm.sh/hook-delete-policy": "before-hook-creation"\ndata:\n{{- if not .Values.postgresql.enabled }}\n  postgresql-password: {{ .Values.appConfig.backend.database.connection.password | b64enc }}\n{{- else -}}\n  postgresql-password: {{ include postgresql.generateUserPassword . | b64enc }}\n{{- end }}\n')),(0,r.kt)("p",null,"Postgresql connetion settings:"),(0,r.kt)("p",null,"(backend deployment)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: Deployment\n...\nspec:\n...\n  templates:\n  ...\n    spec:\n    ...\n      containers:\n      ...\n        env:\n        ...\n          - name: APP_CONFIG_backend_database_connection_password\n            valueFrom:\n              secretKeyRef:\n                name: {{ include "backend.postgresql.passwordSecret" .}}\n                key: postgresql-password\n        volumeMounts:\n          {{- if .Values.backend.postgresCertMountEnabled }}\n          - name: postgres-ca\n            mountPath: {{ include "backstage.backend.postgresCaDir" . }}\n          {{- end }}\n        ...\n      volumes:\n        {{- if .Values.backend.postgresCertMountEnabled }}\n        - name: postgres-ca\n          configMap:\n            name: {{ include "backstage.fullname" . }}-postgres-ca\n        {{- end }}\n')),(0,r.kt)("p",null,"(values.yaml)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...\nappConfig:\n...\n  backend:\n  ...\n    database:\n      client: pg\n      connection:\n        database: backstage_plugin_catalog\n        host:\n        user:\n        port:\n        password:\n        ssl:\n          rejectUnauthorized: false\n          ca:\n...\n")))}d.isMDXComponent=!0}}]);