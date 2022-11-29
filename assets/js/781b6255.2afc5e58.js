"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[9867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"TRG 5.01 - Helm Chart requirements"},i=void 0,o={unversionedId:"trg/trg-5/trg-5-1",id:"trg/trg-5/trg-5-1",title:"TRG 5.01 - Helm Chart requirements",description:"| Author                | Status | Created      | Post-History |",source:"@site/docs/trg/trg-5/trg-5-1.md",sourceDirName:"trg/trg-5",slug:"/trg/trg-5/trg-5-1",permalink:"/docs/trg/trg-5/trg-5-1",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/trg/trg-5/trg-5-1.md",tags:[],version:"current",frontMatter:{title:"TRG 5.01 - Helm Chart requirements"},sidebar:"tutorialSidebar",previous:{title:"TRG 4.04 - Container registries",permalink:"/docs/trg/trg-4/trg-4-5"},next:{title:"TRG 5.02 - Chart structure",permalink:"/docs/trg/trg-5/trg-5-2"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Why",id:"why",level:2},{value:"Released Helm Charts",id:"released-helm-charts",level:3},{value:"Versioning",id:"versioning",level:3},{value:"The <code>values.yaml</code> File",id:"the-valuesyaml-file",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"29-Sept-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"All Catena-X/Tractus-X components ",(0,a.kt)("strong",{parentName:"p"},"must")," be installable via Helm and meet following requirements. The product's Helm chart ",(0,a.kt)("strong",{parentName:"p"},"has to meet")," all of these criteria!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Helm chart ",(0,a.kt)("strong",{parentName:"li"},"must be released"),"."),(0,a.kt)("li",{parentName:"ul"},"Appropriate versioning for ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"appVersion")," has to be used in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chart.yaml"),"."),(0,a.kt)("li",{parentName:"ul"},"The released Helm chart ",(0,a.kt)("strong",{parentName:"li"},"must not contain any environment specific")," ",(0,a.kt)("inlineCode",{parentName:"li"},"values-xyz.yaml")," files."),(0,a.kt)("li",{parentName:"ul"},"Helm chart ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," file ",(0,a.kt)("strong",{parentName:"li"},"must contain proper default values/placeholders"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No hostname provided for ingress"),(0,a.kt)("li",{parentName:"ul"},"Ingress is disabled"),(0,a.kt)("li",{parentName:"ul"},"No references to any secret engine service (e.g.: Hashicorp Vault)"),(0,a.kt)("li",{parentName:"ul"},"Dependencies should be prefixed with the ",(0,a.kt)("inlineCode",{parentName:"li"},"nameOverride")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"fullnameOverride")," properties"),(0,a.kt)("li",{parentName:"ul"},"Image tag is set to the ",(0,a.kt)("strong",{parentName:"li"},"Chart.yaml")," ",(0,a.kt)("inlineCode",{parentName:"li"},"appVersion")," property"))),(0,a.kt)("li",{parentName:"ul"},"Helm chart ",(0,a.kt)("strong",{parentName:"li"},"must be deployable to any environment without overwriting default values")," with a simple ",(0,a.kt)("inlineCode",{parentName:"li"},"helm install")," command."),(0,a.kt)("li",{parentName:"ul"},"If there is an ",(0,a.kt)("strong",{parentName:"li"},"Ingress")," resource present, it can be turned off and it is disabled by default."),(0,a.kt)("li",{parentName:"ul"},"Helm dependencies have to be declared in ",(0,a.kt)("inlineCode",{parentName:"li"},"Chart.yaml")," file.")),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("h3",{id:"released-helm-charts"},"Released Helm Charts"),(0,a.kt)("p",null,"Tractus-X components can only be used and bundled with other components of Tractus-X if there is a version of the\ncomponent with reliable content. This can only be achieved by creating a release of your Helm chart. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../../guides/Helm/how-to-release-a-helm-chart"},(0,a.kt)("em",{parentName:"a"},"\nHow to release a Helm Chart"))," and ",(0,a.kt)("a",{parentName:"p",href:"../../guides/Helm/how-to-be-part-of-release-umbrella-helm"},(0,a.kt)("em",{parentName:"a"},"How to be part of the Release Umbrella\nHelm Chart")),"."),(0,a.kt)("h3",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Versioning is essential when it comes to releasing Helm charts. In an ideal world your chart version (defined\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),") matches the application version (defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"appVersion")," inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),") which the\nHelm chart will deploy. This makes it for users easier to get an idea what will be installed in which version. Please\nrefer also to ",(0,a.kt)("a",{parentName:"p",href:"/docs/trg/trg-5/trg-5-3"},(0,a.kt)("em",{parentName:"a"},"TRG 5.03 - Version Strategy")),"."),(0,a.kt)("p",null,"To achieve a proper versioning of your Helm chart keep in mind, that it shall not contain version information that could\nchange outside the Helm chart, e.g. container image tags (\u2192 don't use container image tag ",(0,a.kt)("em",{parentName:"p"},"latest"),")."),(0,a.kt)("h3",{id:"the-valuesyaml-file"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"values.yaml")," File"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file is essential for Helm charts. The file ",(0,a.kt)("strong",{parentName:"p"},"must")," contain all values the chart is expecting and there\n",(0,a.kt)("strong",{parentName:"p"},"must")," be no other values files except of ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. Released Helm charts ",(0,a.kt)("strong",{parentName:"p"},"must")," contain only ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."))}c.isMDXComponent=!0}}]);