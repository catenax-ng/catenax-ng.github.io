"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Helm Chart",l={unversionedId:"guides/Helm/helmchart",id:"guides/Helm/helmchart",title:"Helm Chart",description:"General documentation see helm.sh.",source:"@site/docs/guides/Helm/helmchart.md",sourceDirName:"guides/Helm",slug:"/guides/Helm/helmchart",permalink:"/docs/guides/Helm/helmchart",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/Helm/helmchart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How To Use Vault Secrets With ArgoCD",permalink:"/docs/guides/ArgoCD/howto-use-vault-secrets-with-argocd"},next:{title:"How to be part of the Release Umbrella Helm Chart",permalink:"/docs/guides/Helm/how-to-be-part-of-release-umbrella-helm"}},s={},u=[{value:"Learning resources",id:"learning-resources",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Example folder/project structure",id:"example-folderproject-structure",level:3},{value:"Provide external dependencies as optional helm dependencies",id:"provide-external-dependencies-as-optional-helm-dependencies",level:3},{value:"Set memory request and limit to the same value",id:"set-memory-request-and-limit-to-the-same-value",level:3},{value:"Set cpu request to sane default and set limit to a higher value",id:"set-cpu-request-to-sane-default-and-set-limit-to-a-higher-value",level:3},{value:"High availability",id:"high-availability",level:3},{value:"Affinity / Anti-affinity",id:"affinity--anti-affinity",level:4},{value:"Configuration for multiply environments",id:"configuration-for-multiply-environments",level:3},{value:"Init containers and application setup",id:"init-containers-and-application-setup",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"helm-chart"},"Helm Chart"),(0,i.kt)("p",null,"General documentation see ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm.sh"),"."),(0,i.kt)("p",null,"Catena-X uses kubernetes as a platform abstraction which requires kubernetes resources and container images."),(0,i.kt)("p",null,"In a cloud native environment, to be able to deploy software, you need two main components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"container image -> what to run"),(0,i.kt)("li",{parentName:"ul"},"kubernetes resources -> how to run it")),(0,i.kt)("p",null,"To have more flexibility on how to bundle your kubernetes resources, we decided on helm. It provides basic templating, feature flags and separated values files for easy configuration."),(0,i.kt)("p",null,"Helm comes with features which make it easy to use your helm chart from others:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"values.yaml file which enables a central way to configure parameters of your setup"),(0,i.kt)("li",{parentName:"ul"},"helm dependencies: If you need a database or any other service, you can pull in helm charts which provide that service and make your application runable independend from external dependencies. This also makes e2e testing much easier")),(0,i.kt)("h2",{id:"learning-resources"},"Learning resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/chart_best_practices/"},"https://helm.sh/docs/chart_best_practices/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/results?search_query=helm"},"YouTube")),(0,i.kt)("li",{parentName:"ul"},'Google: "helm best practices"')),(0,i.kt)("h2",{id:"best-practices"},"Best practices"),(0,i.kt)("p",null,'This section is a catena-x specific collection of easy to follow "best practices", requirements for working together or asked questions regarding helm and how to solve them.'),(0,i.kt)("p",null,"Feel free to contribute."),(0,i.kt)("h3",{id:"example-folderproject-structure"},"Example folder/project structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/project-x/\n/project-x/chart/<HERE IS YOUR HELM CHART>\n/project-x/chart/README.md This README.md file uses [github markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and describes your helm chart (how to use it, what it is for, what features it has).\n")),(0,i.kt)("h3",{id:"provide-external-dependencies-as-optional-helm-dependencies"},"Provide external dependencies as optional helm dependencies"),(0,i.kt)("p",null,"If you have external dependencies like a database, you should build your helm chart so that you can configure an internal and external database. Internal would be to create a dependency to a database helm chart. External would be a way to configure something like host, username and password."),(0,i.kt)("h3",{id:"set-memory-request-and-limit-to-the-same-value"},"Set memory request and limit to the same value"),(0,i.kt)("p",null,"Memory is a kubernetes resource which can't be compressed or manipulated. If you need to consume memory amount of x but your limit is below this, kubernetes will kill your pod. If you set the request to a small value and limit to a very high value, the amount of memory you will get guaranteed is only what you request. It can easily be the case, that you are not able to request more after."),(0,i.kt)("p",null,"This also leads to pods which get killed due to memory consumption. Only in case of request = limit you know how much memory you can consume without being killed."),(0,i.kt)("p",null,"Swap support in kubernetes might come in 1.24, but this is only an option in the future."),(0,i.kt)("h3",{id:"set-cpu-request-to-sane-default-and-set-limit-to-a-higher-value"},"Set cpu request to sane default and set limit to a higher value"),(0,i.kt)("p",null,"CPU is a compressable resource. This means if you request 500m CPU, you get this, but if you need more, your pod is not getting killed, it will just not get more CPU resources if not more is availab.e"),(0,i.kt)("p",null,"Therefore the current suggestion is to set the request value for CPU to a value which the service normally uses under load. The limit of CPU should be set 2 or 3 times of the request. If your compute node, were your pod is running, is not consuming much CPU, it can be beneficial for you to use the idle resources of the node."),(0,i.kt)("h3",{id:"high-availability"},"High availability"),(0,i.kt)("p",null,"Try to have at least 2 replicas running of your components. This guarantees that your application is still available when an upgrade of the underlying cluster is ongoing and for general availability."),(0,i.kt)("p",null,"Be aware that your application needs to be able to support multiply instances. The biggest issue here is often how sessions are handled. If you depend on sessions, you either need to provide an additional service like redis to exchange your sessions across backends or you need to configure your kubernetes resources with proper sticky session handling."),(0,i.kt)("h4",{id:"affinity--anti-affinity"},"Affinity / Anti-affinity"),(0,i.kt)("p",null,"If you run the same pod multiply times, it can be that the pods are running on the same node. This defies high availaibilty. You should set a sane default for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/"},"anti-affinity"),". This tells kubernetes that you don't want to have the same pod on the same node."),(0,i.kt)("h3",{id:"configuration-for-multiply-environments"},"Configuration for multiply environments"),(0,i.kt)("p",null,"The current approach to manifest environment specific values is to provide a values.yaml with sane default values and overriding only relevant portions in a values-ENV.yaml file. Then referencing both values","*",".yaml files in argocd."),(0,i.kt)("p",null,"If you don't want to have catena-x environment specific 'setting files/value-","*"," files' in your repository, you can do a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases"},"release")," build and remove all files you don't want to officially release."),(0,i.kt)("p",null,"TODO: Add screenshot from argocd and from argocd application code."),(0,i.kt)("h3",{id:"init-containers-and-application-setup"},"Init containers and application setup"),(0,i.kt)("p",null,"To preconfigure an application, you have different options:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your application itself is able to configure itself. It checks on start if it should initialize itself (easiest way to control this behaviour is an Environment variable."),(0,i.kt)("li",{parentName:"ol"},"You create an ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init container")," and use that to initially talk to the application. If the application supports an API to configure it, you should try that first. Otherwise your init controller also can put config files in the expected location or call a shell script to do things")))}p.isMDXComponent=!0}}]);