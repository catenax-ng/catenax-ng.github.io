"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[953],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"Office Hours 2022-04-2",title:"Office Hours 2022-04-22",authors:"DevSecOps",tags:["news","officehour"]},c=void 0,s={permalink:"/blog/Office Hours 2022-04-2",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-04-22-OfficeHours.md",source:"@site/blog/2022-04-22-OfficeHours.md",title:"Office Hours 2022-04-22",description:"In our today's office hours, we discussed the following topics",date:"2022-04-22T00:00:00.000Z",formattedDate:"April 22, 2022",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:.99,truncated:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2022-04-2",title:"Office Hours 2022-04-22",authors:"DevSecOps",tags:["news","officehour"]},nextItem:{title:"Office Hours 2022-04-08",permalink:"/blog/Office Hours 2022-04-08"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In our today's office hours, we discussed the following topics"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"News from the DevSecOps Team",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Make sure to use ",(0,a.kt)("em",{parentName:"li"},".int.demo.catena-x.net when you are on Hotel Budapest. All initially created "),".demo.catena-x.net need to migrate"),(0,a.kt)("li",{parentName:"ol"},"Please align repository names in catenax-ng to start with product-* and try to keep lower cases seperated with - (see all other repositories); Its not critical but helps to align us all."),(0,a.kt)("li",{parentName:"ol"},"Be aware that we will enforce 2FA very soon. We will soon announce it with proper documentation. If you can already enable it on your account, pls do."),(0,a.kt)("li",{parentName:"ol"}))),(0,a.kt)("li",{parentName:"ol"},"News from the Security Team",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"No updates"))),(0,a.kt)("li",{parentName:"ol"},"Q&A",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"How does a developer access a database for testing? -> Please try to use an temporial ingress. If this doesn't work (we have not verified this yet), pls get in touch with us so we can provide you with another solution, potentially switching the ingress ctrl."),(0,a.kt)("li",{parentName:"ol"},"ArgoCD automatic redeployment doesn't work -> You need to enable auto-sync AND self heal. Self heal is relevant if you don't have a clean slate, ArgoCD will not auto sync if its not green."))),(0,a.kt)("li",{parentName:"ol"},"Hands-on")),(0,a.kt)("p",null,"You find the recording ",(0,a.kt)("a",{parentName:"p",href:"https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb"},"here")))}m.isMDXComponent=!0}}]);