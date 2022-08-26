"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4532],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=u(a),d=l,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1652:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const i={title:"How To Use Vault Secrets With ArgoCD"},o=void 0,r={unversionedId:"guides/howto-use-vault-secrets-with-argocd",id:"guides/howto-use-vault-secrets-with-argocd",title:"How To Use Vault Secrets With ArgoCD",description:"This guide is a small how-to about using secrets stored in HashiCorp Vault with your ArgoCD applications (with Helm",source:"@site/docs/guides/howto-use-vault-secrets-with-argocd.md",sourceDirName:"guides",slug:"/guides/howto-use-vault-secrets-with-argocd",permalink:"/docs/guides/howto-use-vault-secrets-with-argocd",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/howto-use-vault-secrets-with-argocd.md",tags:[],version:"current",frontMatter:{title:"How To Use Vault Secrets With ArgoCD"},sidebar:"tutorialSidebar",previous:{title:"How To Use HashiCorp Vault",permalink:"/docs/guides/how-to-use-vault"},next:{title:"FOSS @ Catena-X",permalink:"/docs/foss"}},p={},u=[{value:"Add Placeholder To Your Code",id:"add-placeholder-to-your-code",level:2},{value:"Examples",id:"examples",level:3},{value:"Configure The ArgoCD App To Use AVP",id:"configure-the-argocd-app-to-use-avp",level:2},{value:"Use multiple helm values file when using AVP",id:"use-multiple-helm-values-file-when-using-avp",level:3},{value:"Available ArgoCD Vault Plugins",id:"available-argocd-vault-plugins",level:2},{value:"<em>argocd-vault-plugin</em>",id:"argocd-vault-plugin",level:3},{value:"<em>argocd-vault-plugin-helm</em>",id:"argocd-vault-plugin-helm",level:3},{value:"<em>argocd-vault-plugin-helm-args</em>",id:"argocd-vault-plugin-helm-args",level:3},{value:"<em>argocd-vault-plugin-kustomize</em>",id:"argocd-vault-plugin-kustomize",level:3}],s={toc:u};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide is a small how-to about using secrets stored in HashiCorp Vault with your ArgoCD applications (with Helm\ncharts or Kustomize)."),(0,l.kt)("admonition",{title:"tl;dr",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"To use vault secrets with your ArgoCD app, you have to"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"store your secret inside your Vault tenant"),(0,l.kt)("li",{parentName:"ul"},"insert placeholders to app dependent files (ArgoCD App, helm, Kustomize, etc.)"),(0,l.kt)("li",{parentName:"ul"},"configure your ArgoCD application to use an ArgoCD Vault Plugin (AVP) using the ",(0,l.kt)("em",{parentName:"li"},"vault-secret"))),(0,l.kt)("p",{parentName:"admonition"},"For guidance of how to use Vault and store a secret inside Vault, please refer to\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/how-to-use-vault"},"How To Use Vault"),".")),(0,l.kt)("h2",{id:"add-placeholder-to-your-code"},"Add Placeholder To Your Code"),(0,l.kt)("p",null,"The AVP plugin use placeholders to recognize where you want to place a Vault secret value inside your code. Example\nplaceholder:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<placeholder>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<path:some/path#secret-key>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<path:some/path#secret-key#version>"))),(0,l.kt)("p",null,"The secret path can alternatively be defined as annotation in manifest files instead of inside the placeholder."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Placeholder with inline path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: avp-example-secret\ntype: Opaque\nstringData:\n  //highlight-next-line\n  foo: <path:product-team-example/data/hello#foo>\n")),(0,l.kt)("p",null,"Placeholder and annotation for secret path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: avp-example-secret\n  annotations:\n  //highlight-next-line\n  avp.kubernetes.io/path: "product-team-example/data/hello"\ntype: Opaque\nstringData:\n  //highlight-next-line\n  foo: <foo>\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When using annotation to specify the path to the secret inside vault, the placeholder represents only the key inside the\nsecret."),(0,l.kt)("p",{parentName:"admonition"},"If you're using secrets from different paths within one file you must use placeholder with inline path definition, as\nonly one secret path can be provided by annotation."),(0,l.kt)("p",{parentName:"admonition"},"Please keep in mind that the path must contain ",(0,l.kt)("em",{parentName:"p"},"data")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"product-team-example/data/hello"),") otherwise you'll get an\nerror message about ",(0,l.kt)("em",{parentName:"p"},"secret not found")," or similar.")),(0,l.kt)("p",null,"You are not limited to use these placeholders inside manifest files, you can also use these inside helm specific file\nlike ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"avp:\n  helm:\n    secretPath: <path:product-team-example/data/hello#foo>\n")),(0,l.kt)("p",null,"And inside e.g. the helm templates you can reference like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: avp-example-path-secret\ntype: Opaque\nstringData:\n  foo: { { .Values.avp.helm.secretPath } }\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Additional information about replacement behavior, placeholder types and more can be found\nin ",(0,l.kt)("a",{parentName:"p",href:"https://argocd-vault-plugin.readthedocs.io/en/stable/howitworks/"},"ArgoCD Vault Plugin Documentation"),".")),(0,l.kt)("h2",{id:"configure-the-argocd-app-to-use-avp"},"Configure The ArgoCD App To Use AVP"),(0,l.kt)("p",null,"To enable your ArgoCD app to use the AVP plugin there is a mandatory step required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure the app to use one of the available AVP plugins")),(0,l.kt)("admonition",{title:"Your Vault Secret",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("em",{parentName:"p"},"vault-secret")," has been created for each product-team during onboarding.")),(0,l.kt)("p",null,"In general your ArgoCD app manifest should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: my-argo-app\nspec:\n  project: project-name\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: project-name\n  source:\n    repoURL: https://github.com/catenax-ng/someRepo/\n    targetRevision: HEAD\n    path: path/to/app\n    // highlight-start\n    plugin:\n      name: argocd-vault-plugin\n    // highlight-end\n")),(0,l.kt)("p",null,"To configure your ArgoCD application to use an AVP plugin using the ArgoCD Web UI after the ",(0,l.kt)("em",{parentName:"p"},"Destination")," section you\nhave to select ",(0,l.kt)("em",{parentName:"p"},"Plugin")," from the dropdown selector, select the appropriate AVP plugin and enter the secret information:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Select Plugin",src:a(1599).Z,title:"Select Plugin",width:"958",height:"674"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"AVP configuration",src:a(3933).Z,title:"AVP configuration",width:"816",height:"556"})),(0,l.kt)("h3",{id:"use-multiple-helm-values-file-when-using-avp"},"Use multiple helm values file when using AVP"),(0,l.kt)("p",null,"Please read here if your application is using helm chart. If you use not only default ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml"),", but also provide an\nadditional value file. The priority will be given to the last (right-most) file specified. (see: ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_install/"},"Helm Documentation"),") Please use vault plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"argocd-vault-plugin-helm-args")," and configure it like the example:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Multiple Helm values",src:a(4590).Z,title:"AVP configuration",width:"848",height:"242"})),(0,l.kt)("p",null,"To configure multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," in App manifest, please refer\nto ",(0,l.kt)("a",{parentName:"p",href:"#argocd-vault-plugin-helm-args"},"argocd-vault-plugin-helm-args"),"."),(0,l.kt)("h2",{id:"available-argocd-vault-plugins"},"Available ArgoCD Vault Plugins"),(0,l.kt)("p",null,"For different approaches there are different ArgoCD Vault Plugins (AVP) available:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"argocd-vault-plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"argocd-vault-plugin-helm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"argocd-vault-plugin-helm-args")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"argocd-vault-plugin-kustomize"))),(0,l.kt)("h3",{id:"argocd-vault-plugin"},(0,l.kt)("em",{parentName:"h3"},"argocd-vault-plugin")),(0,l.kt)("p",null,"Use this AVP plugin when your ArgoCD app is based on plain Kubernetes manifest files, and you want to pull secrets from\nvault into your app."),(0,l.kt)("p",null,"The App manifest should contain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  plugin:\n    //highlight-next-line\n    name: argocd-vault-plugin\n")),(0,l.kt)("h3",{id:"argocd-vault-plugin-helm"},(0,l.kt)("em",{parentName:"h3"},"argocd-vault-plugin-helm")),(0,l.kt)("p",null,"Use this AVP plugin when your ArgoCD app is based on helm charts, and you want to pull secrets from vault into your app."),(0,l.kt)("p",null,"The App manifest should contain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  plugin:\n    //highlight-next-line\n    name: argocd-vault-plugin-helm\n")),(0,l.kt)("h3",{id:"argocd-vault-plugin-helm-args"},(0,l.kt)("em",{parentName:"h3"},"argocd-vault-plugin-helm-args")),(0,l.kt)("p",null,"Use this AVP plugin when your ArgoCD app is based on helm charts, but you have e.g. environment\nspecific ",(0,l.kt)("inlineCode",{parentName:"p"},"values-env.yaml")," files to apply, and you want to pull secrets from vault into your app."),(0,l.kt)("p",null,"The App manifest should contain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  plugin:\n    //highlight-next-line\n    name: argocd-vault-plugin-helm-args\n    env:\n      //highlight-start\n      - name: helm_args\n        value: '-f values.yaml -f values-env.yaml'\n      //highlight-end\n")),(0,l.kt)("h3",{id:"argocd-vault-plugin-kustomize"},(0,l.kt)("em",{parentName:"h3"},"argocd-vault-plugin-kustomize")),(0,l.kt)("p",null,"Use this AVP plugin when your ArgoCD app is based on plain Kubernetes manifest files, and you want to pull secrets from\nvault into your app."),(0,l.kt)("p",null,"The App manifest should contain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  plugin:\n    //highlight-next-line\n    name: argocd-vault-plugin-kustomize\n")))}m.isMDXComponent=!0},1599:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avp_plugin_webui1-a1db77ad7550dd0a1890af5eb8e8e32e.png"},3933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/avp_plugin_webui2-6e5e49e7ef891437f512b4e9540d9b24.png"},4590:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vault-multiple-helm-values-fca15f4ea52242c6d079d3c2044a3368.png"}}]);