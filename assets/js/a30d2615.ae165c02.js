"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[6309],{8525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(5893),s=a(1151);const o={title:"How To Monitor CPU And Memory Usage"},r=void 0,i={id:"guides/kubernetes/how-to-monitor",title:"How To Monitor CPU And Memory Usage",description:"To get information about e.g. CPU and memory usage, a Grafana dashboard is provided.",source:"@site/docs/guides/kubernetes/how-to-monitor.md",sourceDirName:"guides/kubernetes",slug:"/guides/kubernetes/how-to-monitor",permalink:"/docs/guides/kubernetes/how-to-monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/kubernetes/how-to-monitor.md",tags:[],version:"current",frontMatter:{title:"How To Monitor CPU And Memory Usage"},sidebar:"tutorialSidebar",previous:{title:"How to expose your app to the internet",permalink:"/docs/guides/kubernetes/how-to-expose-an-app-to-the-internet"},next:{title:"How to use persistent storage",permalink:"/docs/guides/kubernetes/how-to-use-persistent-storage"}},d={},h=[{value:"Login to Grafana",id:"login-to-grafana",level:2},{value:"Setting up a predefined dashboard",id:"setting-up-a-predefined-dashboard",level:2}];function c(e){const t={a:"a",br:"br",em:"em",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"To get information about e.g. CPU and memory usage, a Grafana dashboard is provided.\r\nYou can get to the dashboard via the landingpage(s)"}),"\n",(0,n.jsxs)(t.p,{children:["DEV: ",(0,n.jsx)(t.a,{href:"https://home.dev.demo.catena-x.net/",children:"https://home.dev.demo.catena-x.net/"})]}),"\n",(0,n.jsxs)(t.p,{children:["INT: ",(0,n.jsx)(t.a,{href:"https://home.int.demo.catena-x.net/",children:"https://home.int.demo.catena-x.net/"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"grafana_welcome",src:a(2632).Z+"",width:"709",height:"575"})}),"\n",(0,n.jsx)(t.p,{children:"or directly to these urls:"}),"\n",(0,n.jsxs)(t.p,{children:["DEV: ",(0,n.jsx)(t.a,{href:"https://grafana.dev.demo.catena-x.net/",children:"https://grafana.dev.demo.catena-x.net/"})]}),"\n",(0,n.jsxs)(t.p,{children:["INT: ",(0,n.jsx)(t.a,{href:"https://grafana.int.demo.catena-x.net/",children:"https://grafana.int.demo.catena-x.net/"})]}),"\n",(0,n.jsx)(t.h2,{id:"login-to-grafana",children:"Login to Grafana"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"grafana_welcome",src:a(7009).Z+"",width:"472",height:"564"})}),"\n",(0,n.jsx)(t.p,{children:"Login via GitHub"}),"\n",(0,n.jsx)(t.p,{children:"if you do this the first time the authorization must be given"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"grafana_authorize_github",src:a(2194).Z+"",width:"378",height:"506"})}),"\n",(0,n.jsx)(t.p,{children:"the Grafana start page opens without any dashboard"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"grafana_dashboard_empty",src:a(8808).Z+"",width:"2160",height:"676"})}),"\n",(0,n.jsx)(t.h2,{id:"setting-up-a-predefined-dashboard",children:"Setting up a predefined dashboard"}),"\n",(0,n.jsx)(t.p,{children:"Go to Dashboards > Browse"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"grafana_dashboard_browse",src:a(6925).Z+"",width:"283",height:"304"})}),"\n",(0,n.jsxs)(t.p,{children:["all available dashboards are listed, but this might be the most interesting for you:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"Kubernetes/Compute Resources/Namespace (Pods)"}),(0,n.jsx)(t.br,{}),"\n","to check CPU usage, memory usage and a few things more"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"grafana_create_dashboard",src:a(8005).Z+"",width:"520",height:"579"})})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-1-9dc99cbfc80a7887a556683456c8b987.jpg"},2194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-authorize-github-8b9866279539e91c3f13a20d8f052ab3.jpg"},8005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-create-dashboards-43c744bc995ea000b0150d2dbefafcdb.jpg"},6925:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-dashboard-browse-f319e1960b35daf0afe13e0e9baf51ba.jpg"},8808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-dashboard-empty-26e5592aa9327f123edb310c32d9c451.jpg"},7009:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafana-welcome-image-ad9e74f8428396b96df8061b6c64aa13.jpg"},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>r});var n=a(7294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);