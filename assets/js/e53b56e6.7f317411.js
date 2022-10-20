"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"How To Use HashiCorp Vault"},i=void 0,l={unversionedId:"internal/how-to-use-vault",id:"internal/how-to-use-vault",title:"How To Use HashiCorp Vault",description:"This guide is documents additional internal information for external How To Use HashiCorp Vault",source:"@site/docs/internal/how-to-use-vault.md",sourceDirName:"internal",slug:"/internal/how-to-use-vault",permalink:"/docs/internal/how-to-use-vault",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/internal/how-to-use-vault.md",tags:[],version:"current",frontMatter:{title:"How To Use HashiCorp Vault"},sidebar:"tutorialSidebar",previous:{title:"How to setup Hashicorp Vault",permalink:"/docs/internal/how-to-setup-hashicorp-vault"},next:{title:"Naming Convention",permalink:"/docs/internal/naming-convention"}},u={},c=[{value:"Login to web UI via OIDC",id:"login-to-web-ui-via-oidc",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide is documents additional internal information for external ",(0,o.kt)("a",{parentName:"p",href:"docs/guides/how-to-use-vault"},"How To Use HashiCorp Vault")),(0,o.kt)("h2",{id:"login-to-web-ui-via-oidc"},"Login to web UI via OIDC"),(0,o.kt)("p",null,"Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"argocdadmins")," use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/modules/vault/main.tf#L84"},(0,o.kt)("inlineCode",{parentName:"a"},"devsecops-admins"))," to login."))}p.isMDXComponent=!0}}]);