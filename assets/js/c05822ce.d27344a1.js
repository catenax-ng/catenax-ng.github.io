"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[6682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?a.createElement(d,s(s({ref:t},u),{},{components:r})):a.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"Office Hours 2023-07-14",title:"Office Hours 2023-07-14",authors:"DevSecOps",tags:["news","officehour"]},s=void 0,i={permalink:"/blog/Office Hours 2023-07-14",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-07-14-OfficeHours.md",source:"@site/blog/2023-07-14-OfficeHours.md",title:"Office Hours 2023-07-14",description:"General updates / information",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.15,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-07-14",title:"Office Hours 2023-07-14",authors:"DevSecOps",tags:["news","officehour"]},prevItem:{title:"Office Hours 2023-07-21",permalink:"/blog/Office Hours 2023-07-21"},nextItem:{title:"Office Hours 2023-07-07",permalink:"/blog/Office Hours 2023-07-07"}},l={authorsImageUrls:[void 0]},c=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Test-Managment",id:"test-managment",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"general-updates--information"},"General updates / information"),(0,n.kt)("h3",{id:"devsecops"},"DevSecOps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keep in mind, that resources at Eclipse Foundation (IP-Team), System-Team and Security-Team will have only limited resources available during holiday season (August 2023)."),(0,n.kt)("li",{parentName:"ul"},"Gentle reminder to set ",(0,n.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-04/"},"proper lower")," CPU pod ressource requests / limits on dev cluster (no improvements since the last office hour) and same problems occurs on Beta cluster now as well.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See the ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now&viewPanel=8"},"CPU Quota Panel")," which is part of this general ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.dev.demo.catena-x.net/d/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=now-7d&to=now"},"dashboard")," as reference\nunit for CPU fragments are the so called millicores, which means 1000m = 1 full CPU"),(0,n.kt)("li",{parentName:"ul"},"Hint: ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits"},"K8s documentation"))))),(0,n.kt)("h3",{id:"security"},"Security"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Friendly Reminder: Please look at VeraCode"),(0,n.kt)("li",{parentName:"ul"},"Security assessments ongoing")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Announcement")," VeraCode presentation session is planned for the Friday 21.7.2023")),(0,n.kt)("h3",{id:"foss"},"FOSS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Presentation from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/paullatzelsperger"},"Paul"),' "How to use a reusable ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/.github/blob/main/.github/workflows/dependency-check.yml"},"Workflow"),' for gradle Dash Licence Check"')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n check:\n  uses: eclipse-edc/.github/.github/workflows/dependency-check.yml@main\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reminder from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/evegufy"},"Evelyn"),'  "How to use a reusable ',(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/sig-infra/blob/main/.github/workflows/reusable-dependencies-dotnet.yaml"},"Workflow"),' for dotnet / yarn Dash Licence Check"')),(0,n.kt)("h3",{id:"test-managment"},"Test-Managment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Info from Test Management Feature Freeze on INT Environment 24.07.23 - 16.8.23",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Contact: Rainer Herger, Peter Volk, Bernd Rothbrust")))),(0,n.kt)("h2",{id:"open-discussions"},"Open discussions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Feedback and Live Demo to VeraCode ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/sig-infra/issues/165"},"issue")),(0,n.kt)("li",{parentName:"ul"},"Contact person for ArgoCD / INT Environment shared to the ",(0,n.kt)("a",{parentName:"li",href:"https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380"},"CoP DevSecOps MS Teams channel")),(0,n.kt)("li",{parentName:"ul"},"Feedback to ",(0,n.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/docs/release/trg-5/trg-5-09/"},"TRG 5.09")," about Helm Testing")),(0,n.kt)("h2",{id:"session-recording"},"Session recording"),(0,n.kt)("p",null,"You can find the\nrecording ",(0,n.kt)("a",{parentName:"p",href:"https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/Shared%20Documents/Forms/AllItems.aspx?OR=Teams%2DHL&CT=1689595535113&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIxNDE1LzIzMDYwNDAxMTc3IiwiSGFzRmVkZXJhdGVkVXNlciI6ZmFsc2V9&sortField=Modified&isAscending=false&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FMicrosoftTeams%2Dvideo%20%286%29%2Emp4&viewid=a90239a2%2D4eb1%2D446e%2D9246%2Daedc18ebdc75&parent=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings"},"here"),"."))}p.isMDXComponent=!0}}]);