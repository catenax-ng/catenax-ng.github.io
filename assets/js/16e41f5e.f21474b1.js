"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[5999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"Office Hours 2022-11-11",title:"Office Hours 2022-11-11",authors:"DevSecOps",tags:["news","officehour"]},o=void 0,s={permalink:"/blog/Office Hours 2022-11-11",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-11-11-OfficeHours.md",source:"@site/blog/2022-11-11-OfficeHours.md",title:"Office Hours 2022-11-11",description:"General updates / information",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.545,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2022-11-11",title:"Office Hours 2022-11-11",authors:"DevSecOps",tags:["news","officehour"]},prevItem:{title:"Office Hours 2022-11-18",permalink:"/blog/Office Hours 2022-11-18"},nextItem:{title:"Office Hours 2022-11-04",permalink:"/blog/Office Hours 2022-11-04"}},l={authorsImageUrls:[void 0]},u=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general-updates--information"},"General updates / information"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DevSecOps:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jira support ticket should be opened for requesting installation of a Github App"),(0,a.kt)("li",{parentName:"ul"},"ArgoCD upgrade to version 2.4 is ongoing (currently only on devsecops-testing environment). See ",(0,a.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/roadmap/#v24"},"changelog")," for new features",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Web terminal will be available for executing commands in pods"))),(0,a.kt)("li",{parentName:"ul"},"The team has started checking/supporting wave B products for Release 2"),(0,a.kt)("li",{parentName:"ul"},"Docker image updates:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"License disclaimers for docker images will probably be provided similarly like in ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin/"},"eclipe-temurin"),", discussions are still ongoing"),(0,a.kt)("li",{parentName:"ul"},"Java based images probably will use eclipse-timurin as base image"),(0,a.kt)("li",{parentName:"ul"},"If security issues are found in eclipse-timurin images, give them feedback to fix those")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Security:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Invicti:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All HTTP requests can be exported from the scans now"),(0,a.kt)("li",{parentName:"ul"},"Roadmap for Invicti: Jira integration, Github Actions to trigger scans after updates"))),(0,a.kt)("li",{parentName:"ul"},"Pen-testing:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"external company will start the tests next week. (Blackbox testing on Portal)"),(0,a.kt)("li",{parentName:"ul"},"internal pen-testing is also ongoing, findings from those test should be implemented/fixed")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FOSS:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"More products have migrated to Eclipse"),(0,a.kt)("li",{parentName:"ul"},"Automation of Dash license checks are documented ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse/dash-licenses#usage"},"here")),(0,a.kt)("li",{parentName:"ul"},"Commiter elections should be described properly with more detail/reasons why the person is eligible for becoming a commiter")),(0,a.kt)("h2",{id:"open-discussions"},"Open discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removing a release from a repository does not mean that the docker image will also be deleted from ghcr image registy"),(0,a.kt)("li",{parentName:"ul"},"Providing environment specific helm values files in ArgoCD will be available in version 2.4. Currently git repository setup works, for Helm option teams need to wait for 2.4 to be available in all environemnts"),(0,a.kt)("li",{parentName:"ul"},"Using GitGuardian in Eclipse is possible, it is free for open source products"),(0,a.kt)("li",{parentName:"ul"},"Requirements and recommendations for the Helm charts can be found ",(0,a.kt)("a",{parentName:"li",href:"https://catenax-ng.github.io/docs/trg/trg-5/trg-5-1#description"},"here")),(0,a.kt)("li",{parentName:"ul"},"Internally in Kubernetes proper service names should be used so DNS would work")),(0,a.kt)("h2",{id:"session-recording"},"Session recording"),(0,a.kt)("p",null,"You can find the recording ",(0,a.kt)("a",{parentName:"p",href:"https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared+Documents%2FCX-CoP+DevSecOps%2FOffice_Hours_Regular_Recordings%2F20221111_DevSecOps+Business+Hours-Recording.mp4&referrer=Teams.TEAMS-WEB&referrerScenario=teamsSdk-openFilePreview&referrer=Teams.TEAMS-ELECTRON&referrerScenario=p2p_ns-bim&web=1"},"here")))}p.isMDXComponent=!0}}]);