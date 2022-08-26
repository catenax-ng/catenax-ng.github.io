"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[6073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},o="How to integrate GitGuardianShield",l={unversionedId:"security/how-to-integrate-gitguardianshield",id:"security/how-to-integrate-gitguardianshield",title:"How to integrate GitGuardianShield",description:"GitGuardianShield is a CLI application that runs in your local environment to detect secrets and block them before they",source:"@site/docs/security/how-to-integrate-gitguardianshield.md",sourceDirName:"security",slug:"/security/how-to-integrate-gitguardianshield",permalink:"/docs/security/how-to-integrate-gitguardianshield",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/how-to-integrate-gitguardianshield.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to integrate Trivy",permalink:"/docs/security/how-to-integrate-trivy"},next:{title:"How to integrate KICS",permalink:"/docs/security/how-to-integrate-kics"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Login",id:"login",level:2},{value:"Local Scanning",id:"local-scanning",level:2},{value:"Integration",id:"integration",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Pre-commit",id:"pre-commit",level:3},{value:"Steps",id:"steps",level:4},{value:"Pre-push",id:"pre-push",level:3},{value:"Steps",id:"steps-1",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-gitguardianshield"},"How to integrate GitGuardianShield"),(0,r.kt)("p",null,"GitGuardianShield is a CLI application that runs in your local environment to detect secrets and block them before they\nenter the git repository. Using a hook ",(0,r.kt)("strong",{parentName:"p"},"pre-commit"),"/",(0,r.kt)("strong",{parentName:"p"},"pre-push")," the secret scans can be automated."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Python and Pip"),(0,r.kt)("li",{parentName:"ol"},"GitGuardian account")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Execute the following CLI:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pip install ggshield"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If this doesn't work, try ",(0,r.kt)("inlineCode",{parentName:"p"},"pip3 install ggshield"),".")),(0,r.kt)("h2",{id:"login"},"Login"),(0,r.kt)("p",null,"To use GitGuardianshield you need to be authentified by the GitGuardian Server. For this, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"ggshield auth login"),".\nThis automatically generates an access token."),(0,r.kt)("h2",{id:"local-scanning"},"Local Scanning"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To scan a file use the ",(0,r.kt)("strong",{parentName:"p"},"CLI"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'ggshield secret scan path "Name of File"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To scan a directory use the ",(0,r.kt)("strong",{parentName:"p"},"CLI"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ggshield secret scan path -r ."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To scan every changes that have been staged in a git repo (pre-commit) use the ",(0,r.kt)("strong",{parentName:"p"},"CLI"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ggshield secret scan pre-commit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To scan all commits in a git repository use the ",(0,r.kt)("strong",{parentName:"p"},"CLI"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ggshield secret scan repo ."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To ignore the last fund secrets use the ",(0,r.kt)("strong",{parentName:"p"},"CLI"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ggshield ignore --last-found"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To ignore a path add to the ",(0,r.kt)("strong",{parentName:"p"},"gitguardian.yaml File"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"paths-ignore:\n'**/folder-path/**'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To ignore selected files add to the ",(0,r.kt)("strong",{parentName:"p"},"gitguardian.yaml File"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"paths-ignore:\n'**/file-path'\n")))),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("p",null,"Install pre-commit with the ",(0,r.kt)("strong",{parentName:"p"},"CLI")," ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install pre-commit"),"."),(0,r.kt)("h3",{id:"pre-commit"},"Pre-commit"),(0,r.kt)("p",null,"The pre-commit hook checks the commit for secrets and blocks the commit if there are any. The pre-commit hook is easier\nto work with since it catches the error as you made it. An internet connection will be required for the commits."),(0,r.kt)("h4",{id:"steps"},"Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("em",{parentName:"p"},"pre-commit-config.yaml")," file in your root repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"repos:\n  - repo: https://github.com/gitguardian/ggshield\n    rev: v1.10.7 (latest version)\n    hooks:\n      - id: ggshield\n        language_version: python3\n        stage: [commit]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install a githook based on the yaml file with the CLI:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"pre-commit install")))),(0,r.kt)("h3",{id:"pre-push"},"Pre-push"),(0,r.kt)("p",null,"The pre-push checks a group of commits for secrets, and block the push if there are any. The pre-push hook reduces the\namount of scanning but if a secret is detected, you have to rewrite your history."),(0,r.kt)("h4",{id:"steps-1"},"Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("em",{parentName:"p"},"pre-commit-config.yaml")," file in your root repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"repos:\n  - repo: https://github.com/gitguardian/ggshield\n    rev: v1.10.7 (latest version)\n    hooks:\n      - id: ggshield-push\n        language_version: python3\n        stage: [push]\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install a githook based on the yaml file with the ",(0,r.kt)("strong",{parentName:"p"},"CLI"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"pre-commit install --hook-type pre-push")))))}u.isMDXComponent=!0}}]);