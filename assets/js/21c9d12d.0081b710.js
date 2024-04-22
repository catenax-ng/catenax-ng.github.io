"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[5557],{3076:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const r={slug:"Office Hours 2022-8-26",title:"Office Hours 2022-8-26",authors:"DevSecOps",tags:["news","officehour"]},o=void 0,l={permalink:"/blog/Office Hours 2022-8-26",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-08-26-OfficeHours.md",source:"@site/blog/2022-08-26-OfficeHours.md",title:"Office Hours 2022-8-26",description:"Reminders",date:"2022-08-26T00:00:00.000Z",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.76,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2022-8-26",title:"Office Hours 2022-8-26",authors:"DevSecOps",tags:["news","officehour"]},unlisted:!1,prevItem:{title:"Post Mortem 2022-08-29",permalink:"/blog/Post Mortem 2022-08-29"},nextItem:{title:"Office Hours 2022-06-17",permalink:"/blog/Office Hours 2022-06-17"}},a={authorsImageUrls:[void 0]},c=[{value:"Reminders",id:"reminders",level:2},{value:"General updates",id:"general-updates",level:2},{value:"Open discussions",id:"open-discussions",level:2}];function d(e){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"reminders",children:"Reminders"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DevSecOps:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Please do not use the old catena-x GitHub organization anymore. Tooling like sonarcloud and security checks will only be provided for catenax-ng"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Security:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Get in contact with the security experts for a timeline regarding DAST. This is ",(0,s.jsx)(n.strong,{children:"MANDATORY"})," for a proper release 2.0"]}),"\n",(0,s.jsxs)(n.li,{children:["There are still open PRs to exchange checkov with KICS. KICS is ",(0,s.jsx)(n.strong,{children:"MANDATORY"})," for security checks regarding release 2.0"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"FOSS:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Get in contact with angelika regarding the initial contribution to the eclipse foundation. This is ",(0,s.jsx)(n.strong,{children:"MANDATORY"})," to be part of Release 2.0"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"general-updates",children:"General updates"}),"\n",(0,s.jsx)(n.p,{children:"The following updates were presented:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The cosign (signing docker images) step in k8s-helm-example was outdated. New version published and further investigations will follow"}),"\n",(0,s.jsx)(n.li,{children:"In the following days, we will provide examples on how you can test and lint your helm charts in a GitHub workflow"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"open-discussions",children:"Open discussions"}),"\n",(0,s.jsx)(n.p,{children:"The following topics where discussed in the open session:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Is there already guidance on day-to-day working model, once our code passed the initial contribution check to the eclipse foundation?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No official and complete guidance yet"}),"\n",(0,s.jsx)(n.li,{children:"Start with the initial contribution process as soon as possible"}),"\n",(0,s.jsx)(n.li,{children:"During the e2e test phase for release two, we will most likely have repositories exist in catenax-ng and eclipse-tractusx in parallel"}),"\n",(0,s.jsx)(n.li,{children:"Once the initial contribution is done, the DevSecOps team will work on integrating the checks from catenax-ng (i.e. VeraCode) to eclipse-tractusx aswell"}),"\n",(0,s.jsx)(n.li,{children:"After that, you can use the eclipse-tractusx repository as leading one and only catenax-ng for consoritia environment specific deployment configuration"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Are there additional best-practices for Helm releases?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"External dependencies that are copied to your own repo -> Discouraged due to FOSS licensing concerns. Get in touch, if you need further details and guidance"}),"\n",(0,s.jsxs)(n.li,{children:["Versioning","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Try to keep your git tags, docker image tags and helm chart version tag in sync"}),"\n",(0,s.jsx)(n.li,{children:"Release your chart together with your application to make that easier"}),"\n",(0,s.jsx)(n.li,{children:"Changes in your application should also lead to changes in your helm chart. At least the image tag in the values.yaml as default config should change"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);