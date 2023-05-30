"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[7744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Office Hours 2023-05-26",title:"Office Hours 2023-05-26",authors:"DevSecOps",tags:["news","officehour"]},i=void 0,s={permalink:"/blog/Office Hours 2023-05-26",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-05-26-OfficeHours.md",source:"@site/blog/2023-05-26-OfficeHours.md",title:"Office Hours 2023-05-26",description:"General updates / information",date:"2023-05-26T00:00:00.000Z",formattedDate:"May 26, 2023",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:2.88,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-05-26",title:"Office Hours 2023-05-26",authors:"DevSecOps",tags:["news","officehour"]},nextItem:{title:"Office Hours 2023-05-19",permalink:"/blog/Office Hours 2023-05-19"}},l={authorsImageUrls:[void 0]},c=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-updates--information"},"General updates / information"),(0,o.kt)("h3",{id:"devsecops"},"DevSecOps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Former PRE-PROD environment/cluster will be sun downed and a new STABLE environment/cluster will be available.\nAvailability is planned for week of may, 29th."),(0,o.kt)("li",{parentName:"ul"},"GH Action Minutes in Catenax-NG organization ran into limitation. There are no more minutes available this month, as\nof 1st of June GH Workflows will be functioning again."),(0,o.kt)("li",{parentName:"ul"},"New GH Support Process is used, but we have a couple of hints:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Please identify yourself, either on your GH profile page or in the issue itself. In general everyone with a GH\naccount is able to create a support issue and in some cases we've to validate if the request itself is valid. It\nhelps a lot to know who is opening the request to verify."),(0,o.kt)("li",{parentName:"ul"},"Be careful with sensitive data, like email addresses, provided in issues. When you request to onboard a new\ndeveloper to our Catenax-ng organization. It's sufficient to provide the GH account name, there is no need for any\nemail-address. Keep in mind, that these issues are public and can be read from everyone, even spam-bots."))),(0,o.kt)("li",{parentName:"ul"},"E2E-Testing Helm Chart: We encourage you to contribute to\nthis ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/e2e-testing/tree/main/charts/umbrella"},"e2e-testing repository"),". The goal of this repository is to have an umbrella Helm chart to install a Catena-X/Tractus-X Network with all\nrequired components with one single Helm chart."),(0,o.kt)("li",{parentName:"ul"},"ArgoCD has been updated to version 2.6.8 today in the morning.")),(0,o.kt)("h3",{id:"security"},"Security"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Well known penetration testing are ongoing."),(0,o.kt)("li",{parentName:"ul"},"Security Assessment has started with a couple of products/components, mainly focused on migration DAPS \u2192 SSI."),(0,o.kt)("li",{parentName:"ul"},"Short live demo of a GH workflow using several open-source security scanning tools within one workflow. Goal is to\nhave/provide a security scanning without using commercial products and to support open-source tools.")),(0,o.kt)("h3",{id:"foss"},"FOSS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Frequent reminder for:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Update upstream EF repositories on a regular basis (which will keep the PR small)"),(0,o.kt)("li",{parentName:"ul"},"Update dependencies on a regular basis and open required IP issues in a timely manner to avoid lack of time in the\nend of a PI when release cycle starts again.")))),(0,o.kt)("h2",{id:"open-discussions"},"Open discussions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow-up discussion about the live demo security team provided about aims and goals."),(0,o.kt)("li",{parentName:"ul"},"Discussion about How to work with EF repositories without being a Committer",(0,o.kt)("br",{parentName:"li"}),"This topic has been also discussed on our ",(0,o.kt)("a",{parentName:"li",href:"https://accounts.eclipse.org/mailing-list/tractusx-dev"},"mailing list"),". It\nis impossible to commit to EF repositories/branches without being a committer. It has been also discussed with EF, and\nthere is no way. So best practice is to fork the repository, create a branch where you can add your changes/code/etc.\nand open a PR from this branch to the upstream repository. Please avoid to merge the branch inside of the fork to the\nforks main branch. It's recommended to have a branch (main) which represents the current state of the upstream at any\ntime."),(0,o.kt)("li",{parentName:"ul"},"Discussion about opening IP checks when PR contains more than 1000 lines of changed code, even if the changes only\nbelong to changed/added documentation. In the end, it's up to the committer to decide. If only documentation is added\nin a PR with more than 100 lines of changes, then of course opening a IP check can be omitted."),(0,o.kt)("li",{parentName:"ul"},"Some team is working on GH Action/Workflow to automatically handle changed dependencies and running EF dash tool.\nThere will be a demo in one of the next office hours to present the results.")),(0,o.kt)("h2",{id:"session-recording"},"Session recording"),(0,o.kt)("p",null,"You can find the\nrecording ",(0,o.kt)("a",{parentName:"p",href:"https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230526%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview"},"here"),"."))}p.isMDXComponent=!0}}]);