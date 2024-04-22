"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[3939],{3639:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(5893),i=n(1151);const a={slug:"Office Hours 2023-03-03",title:"Office Hours 2023-03-03",authors:"DevSecOps",tags:["news","officehour"]},r=void 0,o={permalink:"/blog/Office Hours 2023-03-03",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/blog/2023-03-03-OfficeHours.md",source:"@site/blog/2023-03-03-OfficeHours.md",title:"Office Hours 2023-03-03",description:"General updates / information",date:"2023-03-03T00:00:00.000Z",tags:[{label:"news",permalink:"/blog/tags/news"},{label:"officehour",permalink:"/blog/tags/officehour"}],readingTime:1.72,hasTruncateMarker:!1,authors:[{name:"DevSecOps Team",title:"Your DevSecOps enabler",url:"https://github.com/catenax-ng",imageURL:"https://avatars.githubusercontent.com/u/100771185?s=200&v=4",key:"DevSecOps"}],frontMatter:{slug:"Office Hours 2023-03-03",title:"Office Hours 2023-03-03",authors:"DevSecOps",tags:["news","officehour"]},unlisted:!1,prevItem:{title:"Office Hours 2023-03-10",permalink:"/blog/Office Hours 2023-03-10"},nextItem:{title:"Office Hours 2023-02-24",permalink:"/blog/Office Hours 2023-02-24"}},c={authorsImageUrls:[void 0]},l=[{value:"General updates / information",id:"general-updates--information",level:2},{value:"DevSecOps",id:"devsecops",level:3},{value:"Security",id:"security",level:3},{value:"FOSS",id:"foss",level:3},{value:"Open discussions",id:"open-discussions",level:2},{value:"Session recording",id:"session-recording",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"general-updates--information",children:"General updates / information"}),"\n",(0,t.jsx)(s.h3,{id:"devsecops",children:"DevSecOps"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Today (03.03) was the deadline for Quality Gate 5. The System Team have collaborated with the paticipating teams to solve all remaining issues and most of them have already passed the gate."}),"\n",(0,t.jsxs)(s.li,{children:["New ",(0,t.jsx)(s.a,{href:"https://eclipse-tractusx.github.io/docs/release/trg-0/",children:"Draft TRGs"})," are available. These have a proposed mandatory that, so everyone can prepare to meet the new requirements.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Kubernetes versions: each product need to support 3 versions of Kubernetes that can be checked and covered with ",(0,t.jsx)(s.code,{children:"helm test"})," at a future date."]}),"\n",(0,t.jsxs)(s.li,{children:["Upgradeability: each product need to succeessfully perform an ",(0,t.jsx)(s.code,{children:"helm upgrade"})," command on an already deployed chart"]}),"\n",(0,t.jsxs)(s.li,{children:["Helm test: each product need to run ",(0,t.jsx)(s.code,{children:"helm test"})," github actions on different occasions. This spins up a kind kubernetes cluster, deploys the helm chart and runs predefined tests on it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"security",children:"Security"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"New vulnerabilities can appear on applications without any code changes, that is a normal behaviour. Keep an eye on the problems and update your dependency packages accordingly."}),"\n",(0,t.jsx)(s.li,{children:"GitGuardian is available on eclipse-tractusx repositories. If a secret is detected, the Security Teams sends an email to the team. In some cases the found secret is just a dummy value it can be flagged so the scan will ignore it, but be cautious not to ignore any secrets that can expose vulnerabilities!"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"foss",children:"FOSS"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Keep an eye on the Developer Hub's ",(0,t.jsx)(s.a,{href:"https://eclipse-tractusx.github.io/docs/category/open-source-development",children:"Open Source Development"})," section as new articles are available."]}),"\n",(0,t.jsxs)(s.li,{children:["Eclipse Office Hour calendar is available ",(0,t.jsx)(s.a,{href:"https://www.eclipse.org/projects/calendar/",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"open-discussions",children:"Open discussions"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"If a product has a dependency helm chart that is currently not working, it can be configured with the default values.yaml file to specific needs. Mocks can also be created."}),"\n",(0,t.jsx)(s.li,{children:"The application needs to start up without crashing using the default values.yaml file."}),"\n",(0,t.jsxs)(s.li,{children:["A common API documentation is being prepared to be available on the ",(0,t.jsx)(s.a,{href:"https://eclipse-tractusx.github.io/",children:"Eclipse TractusX website"}),". Each team will be able to share their API docs here. In the meantime it can be published on the repository's GitHub pages as well."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"session-recording",children:"Session recording"}),"\n",(0,t.jsxs)(s.p,{children:["You can find the recording ",(0,t.jsx)(s.a,{href:"https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230303_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1",children:"here"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var t=n(7294);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);