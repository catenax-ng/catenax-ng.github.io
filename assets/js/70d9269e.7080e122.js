"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[3939],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={slug:"Office Hours 2023-03-03",title:"Office Hours 2023-03-03",authors:"DevSecOps",tags:["news","officehour"]},o=void 0,s={permalink:"/blog/Office Hours 2023-03-03",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-03-03-OfficeHours.md",source:"@site/blog/2023-03-03-OfficeHours.md",title:"Office Hours 2023-03-03",description:"General updates / information",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.72,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-03-03",title:"Office Hours 2023-03-03",authors:"DevSecOps",tags:["news","officehour"]},prevItem:{title:"Office Hours 2023-03-10",permalink:"/blog/Office Hours 2023-03-10"},nextItem:{title:"Office Hours 2023-02-24",permalink:"/blog/Office Hours 2023-02-24"}},l={authorsImageUrls:[void 0]},c=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"general-updates--information"},"General updates / information"),(0,n.kt)("h3",{id:"devsecops"},"DevSecOps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Today (03.03) was the deadline for Quality Gate 5. The System Team have collaborated with the paticipating teams to solve all remaining issues and most of them have already passed the gate."),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/docs/release/trg-0/"},"Draft TRGs")," are available. These have a proposed mandatory that, so everyone can prepare to meet the new requirements.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Kubernetes versions: each product need to support 3 versions of Kubernetes that can be checked and covered with ",(0,n.kt)("inlineCode",{parentName:"li"},"helm test")," at a future date."),(0,n.kt)("li",{parentName:"ul"},"Upgradeability: each product need to succeessfully perform an ",(0,n.kt)("inlineCode",{parentName:"li"},"helm upgrade")," command on an already deployed chart"),(0,n.kt)("li",{parentName:"ul"},"Helm test: each product need to run ",(0,n.kt)("inlineCode",{parentName:"li"},"helm test")," github actions on different occasions. This spins up a kind kubernetes cluster, deploys the helm chart and runs predefined tests on it.")))),(0,n.kt)("h3",{id:"security"},"Security"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New vulnerabilities can appear on applications without any code changes, that is a normal behaviour. Keep an eye on the problems and update your dependency packages accordingly."),(0,n.kt)("li",{parentName:"ul"},"GitGuardian is available on eclipse-tractusx repositories. If a secret is detected, the Security Teams sends an email to the team. In some cases the found secret is just a dummy value it can be flagged so the scan will ignore it, but be cautious not to ignore any secrets that can expose vulnerabilities!")),(0,n.kt)("h3",{id:"foss"},"FOSS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keep an eye on the Developer Hub's ",(0,n.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/docs/category/open-source-development"},"Open Source Development")," section as new articles are available."),(0,n.kt)("li",{parentName:"ul"},"Eclipse Office Hour calendar is available ",(0,n.kt)("a",{parentName:"li",href:"https://www.eclipse.org/projects/calendar/"},"here"))),(0,n.kt)("h2",{id:"open-discussions"},"Open discussions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If a product has a dependency helm chart that is currently not working, it can be configured with the default values.yaml file to specific needs. Mocks can also be created."),(0,n.kt)("li",{parentName:"ul"},"The application needs to start up without crashing using the default values.yaml file."),(0,n.kt)("li",{parentName:"ul"},"A common API documentation is being prepared to be available on the ",(0,n.kt)("a",{parentName:"li",href:"https://eclipse-tractusx.github.io/"},"Eclipse TractusX website"),". Each team will be able to share their API docs here. In the meantime it can be published on the repository's GitHub pages as well.")),(0,n.kt)("h2",{id:"session-recording"},"Session recording"),(0,n.kt)("p",null,"You can find the recording ",(0,n.kt)("a",{parentName:"p",href:"https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230303_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1"},"here"),"."))}p.isMDXComponent=!0}}]);