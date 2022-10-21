"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[5596],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7296:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:2},i="Overview",s={unversionedId:"getstarted/overview",id:"getstarted/overview",title:"Overview",description:"This page gives you a short overview over all critical things you need to know to get started. Pls be aware that all",source:"@site/docs/getstarted/overview.md",sourceDirName:"getstarted",slug:"/getstarted/overview",permalink:"/docs/getstarted/overview",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/getstarted/overview.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/getstarted/intro"},next:{title:"Architecture",permalink:"/docs/getstarted/architecture"}},u={},l=[{value:"Who we are",id:"who-we-are",level:2},{value:"What do we provide",id:"what-do-we-provide",level:2},{value:"What we do NOT provide",id:"what-we-do-not-provide",level:2},{value:"How to get support",id:"how-to-get-support",level:2},{value:"How to onboard your product / component",id:"how-to-onboard-your-product--component",level:2}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This page gives you a short overview over all critical things you need to know to get started. Pls be aware that all\nother documentation is here for your to browse & share."),(0,n.kt)("h2",{id:"who-we-are"},"Who we are"),(0,n.kt)("p",null,"We are the DevSecOps Tooling team inside Catena-X. You find our Team page\nin ",(0,n.kt)("a",{parentName:"p",href:"https://confluence.catena-x.net/display/ARTI/Product%3A+System+Team"},"Confluence"),"."),(0,n.kt)("p",null,"Here is a short overview about our goals:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Overview_Responsibilities",src:o(3474).Z,width:"791",height:"581"})),(0,n.kt)("h2",{id:"what-do-we-provide"},"What do we provide"),(0,n.kt)("p",null,"We provide the platform stack of Catena-X as sane default in context of open source. We also provide environments to all\nCatena-X members for them to run their product/component on this platform stack. Included in the platform stack are also\nany number of Git repositories hosted in the catenax-ng GitHub organization, that you need to build your product."),(0,n.kt)("h2",{id:"what-we-do-not-provide"},"What we do NOT provide"),(0,n.kt)("p",null,"We are not responsible for all topics regarding infrastructure. We do not manage JIRA, MS Teams and other centrally used\nservices. If it is connected to environments and running your product/component, we are, otherwise we are not."),(0,n.kt)("h2",{id:"how-to-get-support"},"How to get support"),(0,n.kt)("p",null,"This documentation should be your entry point to everything you need to know to run a product/component in Catena-X."),(0,n.kt)("p",null,"Please get onboarded through your team members first, before creating requests or questions on our support channel. We\nare happy to help you, but to keep the capacity available to us to develop more and better features for you, we would\nask you to try to use existing materials first."),(0,n.kt)("p",null,"We have a MS Teams Support channel\n(",(0,n.kt)("a",{parentName:"p",href:"https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380"},"Communities of Practices -> CX - CoP DevSecOps"),")\nyou can join and ask questions with very little overhead (no ticket required for simple questions)."),(0,n.kt)("p",null,"In case you prefer a hands-on/direct approach, we have an office hour every friday between 13:00-15:00 (german timezone)\n. You can find the calendar\ninvite ",(0,n.kt)("a",{parentName:"p",href:"https://confluence.catena-x.net/pages/viewpage.action?pageId=25228715#InternalCatenaXinformationforsharingthroughLanding/Supportpage-OfficeHourCalendarInvite"},"here"),"."),(0,n.kt)("p",null,"The format of our Office Hour has a short update section at the beginning and after that its open for everyone to ask\nquestions or discuss specific questions you have."),(0,n.kt)("p",null,"If you still feel lost or you don't feel confident to use our open office hour in a big group, feel free to request a\ndirect ",(0,n.kt)("a",{parentName:"p",href:"/docs/resources"},"consulting")," with us."),(0,n.kt)("h2",{id:"how-to-onboard-your-product--component"},"How to onboard your product / component"),(0,n.kt)("p",null,"For everything you need to request, pls go to our ",(0,n.kt)("a",{parentName:"p",href:"/docs/resources"},"Things to request")," page."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request access to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/catenax-ng"},"Catena-X (ng) GithHub Org"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you join a Team, your Team can invite you to your team"))),(0,n.kt)("li",{parentName:"ul"},"Request a Team"),(0,n.kt)("li",{parentName:"ul"},"Request a Repository"),(0,n.kt)("li",{parentName:"ul"},"Create your code in your new repository"),(0,n.kt)("li",{parentName:"ul"},"Create a helm chart"),(0,n.kt)("li",{parentName:"ul"},"Build your container images and push them to github packages"),(0,n.kt)("li",{parentName:"ul"},"Request access to environments"),(0,n.kt)("li",{parentName:"ul"},"Use ArgoCD to deploy your product / component")))}p.isMDXComponent=!0},3474:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Architecture-810bfa3263613653a8fc2d1a64a00d51.svg"}}]);