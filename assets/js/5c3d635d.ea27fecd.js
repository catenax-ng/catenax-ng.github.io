"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[2070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,d=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"How to lint and test your helm chart"},o=void 0,l={unversionedId:"guides/Helm/how-to-lint-and-test-your-helm-chart",id:"guides/Helm/how-to-lint-and-test-your-helm-chart",title:"How to lint and test your helm chart",description:"This how-to will show you some options, how you can improve the quality of your helm chart by linting and testing",source:"@site/docs/guides/Helm/how-to-lint-and-test-your-helm-chart.md",sourceDirName:"guides/Helm",slug:"/guides/Helm/how-to-lint-and-test-your-helm-chart",permalink:"/docs/guides/Helm/how-to-lint-and-test-your-helm-chart",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/Helm/how-to-lint-and-test-your-helm-chart.md",tags:[],version:"current",frontMatter:{title:"How to lint and test your helm chart"},sidebar:"tutorialSidebar",previous:{title:"How To Define Helm Chart Dependencies",permalink:"/docs/guides/Helm/how-to-helm-dependency"},next:{title:"How to release a Helm chart",permalink:"/docs/guides/Helm/how-to-release-a-helm-chart"}},s={},c=[{value:"GitHub workflow",id:"github-workflow",level:2},{value:"What is helm test",id:"what-is-helm-test",level:2}],h={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This how-to will show you some options, how you can improve the quality of your helm chart by linting and testing\nit in a GitHub workflow."),(0,i.kt)("h2",{id:"github-workflow"},"GitHub workflow"),(0,i.kt)("p",null,"The GitHub workflow in this section is a good option to run checks on pull requests when there are modifications in the ",(0,i.kt)("strong",{parentName:"p"},"charts")," directory.\nIt will lint your Helm chart and execute helm test to validate your installation on a kind cluster, that will be\ncreated on demand on the GitHub runner."),(0,i.kt)("p",null,"You can use the following workflow definition as a starting point:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Lint and Test Charts\n\n# Run chart linting and tests on each pull request\non: \n  pull_request:\n    paths:\n      - 'charts/**'\n\njobs:\n  lint-test:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n\n      - name: Set up Helm\n        uses: azure/setup-helm@v3\n        with:\n          version: v3.10.3\n\n      # Setup python as a prerequisite for chart linting \n      - uses: actions/setup-python@v4\n        with:\n          python-version: 3.7\n\n      - name: Set up chart-testing\n        uses: helm/chart-testing-action@v2.3.1\n\n      - name: Run chart-testing (list-changed)\n        id: list-changed\n        run: |\n          changed=$(ct list-changed --target-branch ${{ github.event.repository.default_branch }})\n          if [[ -n \"$changed\" ]]; then\n            echo \"CHART_CHANGED=true\" >> $GITHUB_ENV\n          fi\n\n      # run chart linting \n      - name: Run chart-testing (lint)\n        run: ct lint --target-branch ${{ github.event.repository.default_branch }} --config charts/chart-testing-config.yaml\n\n      # Preparing a kind cluster to install and test charts on\n      - name: Create kind cluster\n        uses: helm/kind-action@v1.4.0\n        if: ${{ env.CHART_CHANGED == 'true' }}\n\n      # install the chart to the kind cluster and run helm test\n      # define charts to test with the --charts parameter\n      - name: Run chart-testing (install)\n        run: ct install --charts charts/cxcore --config charts/chart-testing-config.yaml\n        if: ${{ env.CHART_CHANGED == 'true' }}\n\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Step ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Run chart-testing (lint)"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Run chart-testing (install)"))," uses a config file that needs to be modified for every dependency repository url that is specified in the ",(0,i.kt)("em",{parentName:"p"},"Chart.yaml")," file! A  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"chart-repos"))," section has to be added to the config. Example:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"In Chart.yaml there are bitnami and runix dependecies specified:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  - condition: postgresql.enabled\n    name: postgresql\n    repository: https://charts.bitnami.com/bitnami\n    version: 11.x.x\n  - condition: pgadmin4.enabled\n    name: pgadmin4\n    repository: https://helm.runix.net\n    version: 1.11.x\n")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Then the ",(0,i.kt)("strong",{parentName:"li"},"chart-testing-config.yaml")," file needs a section for bitnami and runix repo urls:")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"chart-repos:\n  - bitnami=https://charts.bitnami.com/bitnami\n  - runix=https://helm.runix.net\n"))),(0,i.kt)("p",null,"You also need to adapt is the list of charts to test in the final ",(0,i.kt)("inlineCode",{parentName:"p"},"ct install")," step."),(0,i.kt)("p",null,"As you might have noticed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ct lint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ct install")," steps are also using a configuration file specified by a\n",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," parameter. Currently, we recommend using the chart-testing defaults. The only settings you might want to\ndisable is the maintainer check while linting the chart.\nThis can be achieved with the following setting in the configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# charts/chart-testing-config.yaml\nvalidate-maintainers: false\n")),(0,i.kt)("h2",{id:"what-is-helm-test"},"What is helm test"),(0,i.kt)("p",null,"The above described workflow described, how you can lint your helm chart and how to run ",(0,i.kt)("inlineCode",{parentName:"p"},"helm test")," in a GitHub workflow.\nThis section will focus on ",(0,i.kt)("inlineCode",{parentName:"p"},"helm test")," itself and how you can use it to validate your Helm chart installation process.\nYou can also consult the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_tests/"},"official documentation")," on this topic."),(0,i.kt)("p",null,"The following listing shows an example helm test from our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-helm-example/blob/main/charts/k8s-helm-example"},"k8s-helm-example")," chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# https://github.com/catenax-ng/k8s-helm-example/blob/main/charts/k8s-helm-example/templates/tests/test-service-connection.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: "{{ include "k8s-helm-example.fullname" . }}-test-connection"\n  labels:\n    {{- include "k8s-helm-example.labels" . | nindent 4 }}\n  annotations:\n    "helm.sh/hook": test\nspec:\n  containers:\n    - name: wget\n      image: busybox\n      command: [\'wget\']\n      args: [\'{{ include "k8s-helm-example.fullname" . }}:{{ .Values.service.port }}\']\n  restartPolicy: Never\n')),(0,i.kt)("p",null,"As you can see, a helm tests is a regular kubernetes resource definition. The important part in this definition\nis the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},'"helm.sh/hook": test'),". This specifies, that the pod will be executed, when using the helm test\ncommand."),(0,i.kt)("p",null,"The example above will run a basic wget call to the kubernetes service and will succeed, if the service is reachable\nand fail, if it isn't."))}m.isMDXComponent=!0}}]);