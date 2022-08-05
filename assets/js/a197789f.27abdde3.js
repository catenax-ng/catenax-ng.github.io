"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[8976],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9917:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={title:"How to integrate Veracode to your JIRA project",sidebar_position:2},c=void 0,p={unversionedId:"security/veracode-jira-plugin",id:"security/veracode-jira-plugin",title:"How to integrate Veracode to your JIRA project",description:"About the Veracode JIRA plugin",source:"@site/docs/security/veracode-jira-plugin.md",sourceDirName:"security",slug:"/security/veracode-jira-plugin",permalink:"/docs/security/veracode-jira-plugin",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/veracode-jira-plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to integrate Veracode to your JIRA project",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Veracode",permalink:"/docs/security/veracode"},next:{title:"Trivy",permalink:"/docs/security/trivy"}},s={},u=[{value:"About the Veracode JIRA plugin",id:"about-the-veracode-jira-plugin",level:2},{value:"How can I start using this plugin?",id:"how-can-i-start-using-this-plugin",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Remarks",id:"remarks",level:3},{value:"Steps",id:"steps",level:3},{value:"Import Schedule",id:"import-schedule",level:3},{value:"Finding types",id:"finding-types",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-the-veracode-jira-plugin"},"About the Veracode JIRA plugin"),(0,a.kt)("p",null,"Veracode provides a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.veracode.com/r/4ULk2mjyYUeYb8xd_2nDVw/yoWnZ5~NZchnoLXNqtavrQ"},"plugin")," for JIRA, which\nautomatically creates a JIRA ticket for security flaws which Veracode identifies in your application."),(0,a.kt)("h2",{id:"how-can-i-start-using-this-plugin"},"How can I start using this plugin?"),(0,a.kt)("p",null,"The JIRA plugin is managed by\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://confluence.catena-x.net/display/cxsecurity/Who-is-who+Security"},"Catena-X Security Team"),". In order to use\nthe plugin you must meet the following requirements:"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You've set up your application in Veracode."),(0,a.kt)("li",{parentName:"ol"},"You've set up a project in JIRA, where the tickets for the security flaw will be created.")),(0,a.kt)("h3",{id:"remarks"},"Remarks"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Don't change the Veracode plugin settings, since this will affect other projects."),(0,a.kt)("li",{parentName:"ol"},"Only findings that are breaking our Code Scanning Policy (severity high and very high) will be imported.")),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Contact ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"mailto:dl_CoP_IT_Security@catena-x.net"},"dl_CoP_IT_Security@catena-x.net"))," to request the activation of the automatic\nimports of the Veracode findings into your Jira project."),(0,a.kt)("li",{parentName:"ol"},"Please provide the ",(0,a.kt)("strong",{parentName:"li"},"Project Name")," in Jira and ",(0,a.kt)("strong",{parentName:"li"},"optionally a Team member")," for the issues assignment. This\nteam member will be automatically assigned to all imported findings."),(0,a.kt)("li",{parentName:"ol"},"The Security Team will then setup the findings import.")),(0,a.kt)("h3",{id:"import-schedule"},"Import Schedule"),(0,a.kt)("p",null,"The findings are automatically imported from Veracode to Jira ",(0,a.kt)("strong",{parentName:"p"},"every hour"),"."),(0,a.kt)("h2",{id:"finding-types"},"Finding types"),(0,a.kt)("p",null,"Different finding types will be imported as different Backlogs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Jira Type ",(0,a.kt)("em",{parentName:"strong"},"Bug")),": A ticket of type ",(0,a.kt)("em",{parentName:"p"},"Bug")," is created for each flaw found in a Scan. Contains CWE ID as label.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Jira Type ",(0,a.kt)("em",{parentName:"strong"},"Story")),": A ticket of type ",(0,a.kt)("em",{parentName:"p"},"story")," is created for each Software component with vulnerabilities (High or\nCritical) from the SCA.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Jira Type ",(0,a.kt)("em",{parentName:"strong"},"Subtask")),": A ",(0,a.kt)("em",{parentName:"p"},"subtask")," is created for each CVE of a Software component. It is created under the story\nof the respective component which contains this CVE. The CVE and/or CWE number is set as a label."))))}m.isMDXComponent=!0}}]);