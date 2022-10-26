"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"How to release a Helm chart"},i=void 0,l={unversionedId:"guides/Helm/how-to-release-a-helm-chart",id:"guides/Helm/how-to-release-a-helm-chart",title:"How to release a Helm chart",description:"This guide will describe, why you should release your Helm charts and how you can achieve that. We will also describe some common pitfalls and how to handle them.",source:"@site/docs/guides/Helm/how-to-release-a-helm-chart.md",sourceDirName:"guides/Helm",slug:"/guides/Helm/how-to-release-a-helm-chart",permalink:"/docs/guides/Helm/how-to-release-a-helm-chart",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/Helm/how-to-release-a-helm-chart.md",tags:[],version:"current",frontMatter:{title:"How to release a Helm chart"},sidebar:"tutorialSidebar",previous:{title:"How to lint and test your helm chart",permalink:"/docs/guides/Helm/how-to-lint-and-test-your-helm-chart"},next:{title:"How to expose your app to the internet",permalink:"/docs/guides/kubernetes/how-to-expose-an-app-to-the-internet"}},s={},c=[{value:"Why should you release your Helm chart?",id:"why-should-you-release-your-helm-chart",level:2},{value:"How can you release your Helm chart?",id:"how-can-you-release-your-helm-chart",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Adding the chart release GitHub workflow",id:"adding-the-chart-release-github-workflow",level:3},{value:"How to run the release action",id:"how-to-run-the-release-action",level:3},{value:"Preparing your Helm chart for release",id:"preparing-your-helm-chart-for-release",level:2},{value:"Add &#39;enabled&#39; flags to optional services and resources",id:"add-enabled-flags-to-optional-services-and-resources",level:3},{value:"Do not specify ingress URLs",id:"do-not-specify-ingress-urls",level:3}],h={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will describe, why you should release your Helm charts and how you can achieve that. We will also describe some common pitfalls and how to handle them."),(0,r.kt)("p",null,"If the team has requested a new repository based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-Helm-example"},"k8s-helm-example")," template repository, the ",(0,r.kt)("a",{parentName:"p",href:"#adding-the-chart-release-github-workflow"},"chart releaser action")," will be part of it. The file can be modified/personalized to specific needs."),(0,r.kt)("h2",{id:"why-should-you-release-your-helm-chart"},"Why should you release your Helm chart?"),(0,r.kt)("p",null,"There are two main reasons, why we want to release Helm charts in the Catena-X context."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Testing"),(0,r.kt)("li",{parentName:"ol"},"Releasing")),(0,r.kt)("p",null,"First, your application may have dependencies (i.e. via API call). If you want to test the integration between your app and the app you are depending on, you need a well working version of the app. Best case, you can do that on your own. This is a very easy task if the app you are depending on is available as released Helm chart. This way you can easily add it as dependency to your own deployment."),(0,r.kt)("p",null,"The second aspect is the overall integration and end-to-end test for Catena-X. A reliable end-to-end test of Catena-X components needs a reproducible set of applications in specific versions, with known configuration and test data. We achieve that, by specifying all necessary components for a test run as dependency in an umbrella Helm chart. Prerequisite for adding a product application as dependency, the corresponding Helm chart needs to be released and publicly available."),(0,r.kt)("p",null,"After passing the end-to-end testing, a specific set of applications in their tested versions can be released. This means, we will provide some kind of installer, that is capable of installing all the previously tested applications after they have been quality assured. This installer will be provided as an umbrella Helm chart as well. This chart can  be used by anyone, who wants to deploy and host Catena-X applications."),(0,r.kt)("h2",{id:"how-can-you-release-your-helm-chart"},"How can you release your Helm chart?"),(0,r.kt)("p",null,"There are several options to release your chart. We recommend to use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/chart-releaser-action"},"chart-releaser-action")," in a GitHub workflow. For ",(0,r.kt)("inlineCode",{parentName:"p"},"chart-releaser-action")," to work, the repo needs to meet some requirements:"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"chart-releaser-action")," in its default configuration. There are three requirements that have to be met, if you want to use the default configuration."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Your Helm charts need to be in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/charts/<chart-name>")," directory of your repository"),(0,r.kt)("li",{parentName:"ol"},"GitHub pages need to be activated for your repository and point to a 'gh-pages' branch. Your GitHub organization admins can activate that for you"),(0,r.kt)("li",{parentName:"ol"},"The gh-pages branch needs to exist on the remote repository on GitHub")),(0,r.kt)("h3",{id:"adding-the-chart-release-github-workflow"},"Adding the chart release GitHub workflow"),(0,r.kt)("p",null,"As mentioned before, releasing the chart can be done via GitHub workflow. Below, you can find an example workflow that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"chart-releaser-action")," to package and publish your charts. You can use this example in your own repository without changes."),(0,r.kt)("p",null,"This workflow can then be triggered manually via GitHub action UI or will automatically be triggered on pushing into the the main branch of your repository."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Step ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Update Helm dependencies for chartX"))," needs to be included for every chart in the repository that has\ndependencies in their ",(0,r.kt)("em",{parentName:"p"},"Chart.yaml")," file!"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"      - name: Update Helm dependencies for chartX\n        run: |\n          cd charts/chartX\n          helm repo add bitnami https://charts.bitnami.com/bitnami\n          helm dependency update\n")),(0,r.kt)("p",{parentName:"admonition"},"Explanation:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd charts/<chart-name>")," : Change the working directory to the directory where the ",(0,r.kt)("em",{parentName:"li"},"Chart.yaml")," is located"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"helm repo add")," : add the external repository for every dependency that is in the ",(0,r.kt)("em",{parentName:"li"},"Chart.yaml")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"helm dependency update")," : can run as it is"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Release core Chart\n\non:\n  push:\n    # prevent unnecessary GH action runs for files outside of charts folder\n    paths:\n      - \'charts/**\'\n    branches:\n      - main\n\njobs:\n  release:\n    # depending on default permission settings for your org (contents being read-only or read-write for workloads), you will have to add permissions\n    # see: https://docs.github.com/en/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token\n    permissions:\n      contents: write\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n\n      - name: Configure Git\n        run: |\n          git config user.name "$GITHUB_ACTOR"\n          git config user.email "$GITHUB_ACTOR@users.noreply.github.com"\n\n      - name: Install Helm\n        uses: azure/setup-helm@v3\n        with:\n          version: v3.10.0\n\n      # OPTIONAL, SEE NOTE ABOVE!!\n      - name: Update helm dependencies for chart1\n        run: |\n          cd charts/chart1\n          helm repo add bitnami https://charts.bitnami.com/bitnami\n          helm dependency update\n\n      # OPTIONAL, SEE NOTE ABOVE!!\n      - name: Update helm dependencies for chart2\n        run: |\n          cd charts/chart2\n          helm repo add azure-marketplace https://marketplace.azurecr.io/helm/v1/repo\n          helm dependency update\n\n      - name: Run chart-releaser\n        uses: helm/chart-releaser-action@v1.4.1\n        env:\n          CR_TOKEN: "${{ secrets.GITHUB_TOKEN }}"\n')),(0,r.kt)("h3",{id:"how-to-run-the-release-action"},"How to run the release action"),(0,r.kt)("p",null,"If you are using the chart release workflow 'as-is' from above, it will be triggered automatically on every push that contains changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"charts")," directory."),(0,r.kt)("p",null,"The chart-releaser-action will check your charts directory for the following changes (changed values, changed templates, changed dependencies, etc.) and if there are changes, package the chart into an compressed archive. Additionally, it will update the index.yaml file in the 'gh-pages' branch. This index.yaml file is needed, for enabling your GitHub pages to function as repository for the released Helm chart."),(0,r.kt)("h2",{id:"preparing-your-helm-chart-for-release"},"Preparing your Helm chart for release"),(0,r.kt)("p",null,"While you can release your Helm chart 'as is', there are some details to pay attention to regarding the structure and values of your chart:"),(0,r.kt)("h3",{id:"add-enabled-flags-to-optional-services-and-resources"},"Add 'enabled' flags to optional services and resources"),(0,r.kt)("p",null,"If your application contains optional steps, like an initial data set that is created via init container, it is best to wrap this declaration with an if statement, so that an user of your Helm chart can decide to not add this declaration to his cluster. The ingress definition(s) is also a good candidate for this."),(0,r.kt)("p",null,"Such an if statement could look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# ingress.yaml\n{ { - if .Values.ingress.enabled - } }\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n...\n  { { - end } }\n")),(0,r.kt)("p",null,"To enable/disable the ingress definition, you can define it in this way in your values.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# values.yaml\n...\ningress:\n  enabled: false # true, if you want to specify ingress definitions\n...\n")),(0,r.kt)("h3",{id:"do-not-specify-ingress-urls"},"Do not specify ingress URLs"),(0,r.kt)("p",null,"If your application include ingress definitions, you should not include any URL/host declarations in your\n",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),". The default file will always be used to configure your deployment. If you release your Helm chart including a specific domain will be applied on every infrastructure as well. Regardless of their completely different domain setup."),(0,r.kt)("p",null,"It is best practice to not add any ingress related configuration at all in your default ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),". Instead, just define what a user of your Helm chart can configure through empty values, like in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# values.yaml\ningress:\n  enabled: false\n  className: ""\n  annotations: { }\n  hosts: [ ]\n  tls: [ ]\n')),(0,r.kt)("p",null,"For deployments to your own infrastructure, you can still configure your ingress through an environment specific ",(0,r.kt)("inlineCode",{parentName:"p"},"values-<env>.yaml"),"."))}u.isMDXComponent=!0}}]);