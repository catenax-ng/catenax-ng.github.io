"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[2472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"Office Hours 2023-03-24",title:"Office Hours 2023-03-24",authors:"DevSecOps",tags:["news","officehour"]},o=void 0,s={permalink:"/blog/Office Hours 2023-03-24",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-03-24-OfficeHours.md",source:"@site/blog/2023-03-24-OfficeHours.md",title:"Office Hours 2023-03-24",description:"General updates / information",date:"2023-03-24T00:00:00.000Z",formattedDate:"March 24, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.745,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-03-24",title:"Office Hours 2023-03-24",authors:"DevSecOps",tags:["news","officehour"]},prevItem:{title:"Office Hours 2023-03-28",permalink:"/blog/Office Hours 2023-03-28"},nextItem:{title:"Office Hours 2023-03-17",permalink:"/blog/Office Hours 2023-03-17"}},l={authorsImageUrls:[void 0]},u=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general-updates--information"},"General updates / information"),(0,a.kt)("h3",{id:"devsecops"},"DevSecOps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We're planning to upgrade Argo CD in the near future",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"New version will introduce bigger restructuring in Argo CDs plugin implementation"),(0,a.kt)("li",{parentName:"ul"},"We do not expect any impact on existing applications"),(0,a.kt)("li",{parentName:"ul"},"We'll post updates to the CoP, as soon we start upgrading DEV, INT, PRE-PROD and BETA"))),(0,a.kt)("li",{parentName:"ul"},"IRS is the first Temurin based product on ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tractusx/irs-api"},"DockerHub"),"!",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Learning: Use absolute URLs to point to files and logos, since it would be rendered on DockerHub otherwise"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apk upgrade")," to fix the previously existing CVE is no longer necessary"),(0,a.kt)("li",{parentName:"ul"},"Altering the image on top of just copying the .jar file should be avoided, so the Temurin used library annotations are correct")))),(0,a.kt)("h3",{id:"security"},"Security"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overview of Pen-Testing executions: ",(0,a.kt)("a",{parentName:"li",href:"https://confluence.catena-x.net/display/cxsecurity/External+Penetration+Testing"},"https://confluence.catena-x.net/display/cxsecurity/External+Penetration+Testing")),(0,a.kt)("li",{parentName:"ul"},"Clarification: Security assessments have to be done on every release, even if there are no changes to the app")),(0,a.kt)("h3",{id:"foss"},"FOSS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reminder: Try to frequently contribute back to eclipse-tractusx instead of working on forks until next release",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Background: Big contributions require a similar IP issue like the initial contribution. ",(0,a.kt)("a",{parentName:"li",href:"https://www.eclipse.org/projects/handbook/#ip-project-content"},"EF handbook")),(0,a.kt)("li",{parentName:"ul"},"Smaller PRs are easier to review for committers that are not part of your team"),(0,a.kt)("li",{parentName:"ul"},"Well structured PRs are perfect for potential committer nomination")))),(0,a.kt)("h2",{id:"open-discussions"},"Open discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issues with multiple Eclipse Foundation accounts:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you have multiple accounts by accident (i.e. private + company mail), please delete the one you are not using.\nUsually the private one, since you need the company address in your commits for copyright reasons"),(0,a.kt)("li",{parentName:"ul"},"Deletion request can be sent to '",(0,a.kt)("a",{parentName:"li",href:"mailto:privacy@eclipse.org"},"privacy@eclipse.org"),"'. Best from the Email address you want the account to be deleted"))),(0,a.kt)("li",{parentName:"ul"},"New products directly starting in eclipse-tractusx",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you have no code published yet, you can directly start contributing"),(0,a.kt)("li",{parentName:"ul"},"If you already have initial code, you are allowed to push directly, but have to immediately open the initial contribution IP issue afterwards"),(0,a.kt)("li",{parentName:"ul"},"How to cleanup container images, that are no longer needed (i.e. build for container scanning)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"suggestion: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts"},"https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts"))))))),(0,a.kt)("h2",{id:"session-recording"},"Session recording"),(0,a.kt)("p",null,"You can find the recording ",(0,a.kt)("a",{parentName:"p",href:"https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FCXDevSecOps%20Office%20Hours%2D20230324%5F124644%2DMeeting%20Recording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview"},"here"),"."))}p.isMDXComponent=!0}}]);