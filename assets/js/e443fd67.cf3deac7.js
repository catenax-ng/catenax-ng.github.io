"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4566],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,i(i({ref:n},l),{},{components:t})):a.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:2},i="How to integrate Veracode",s={unversionedId:"security/how-to-integrate-veracode",id:"security/how-to-integrate-veracode",title:"How to integrate Veracode",description:"We perform static application security testing, FOSS license scanning, and software composition analysis with Veracode.",source:"@site/docs/security/how-to-integrate-veracode.md",sourceDirName:"security",slug:"/security/how-to-integrate-veracode",permalink:"/docs/security/how-to-integrate-veracode",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/how-to-integrate-veracode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contact",permalink:"/docs/security/contact"},next:{title:"How to integrate Veracode to your JIRA project",permalink:"/docs/security/how-to-integrate-veracode-to-your-jira-project"}},c={},p=[{value:"Upload and Scan",id:"upload-and-scan",level:2},{value:"Pipeline",id:"pipeline",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-veracode"},"How to integrate Veracode"),(0,r.kt)("p",null,"We perform ",(0,r.kt)("strong",{parentName:"p"},"static application security testing"),", ",(0,r.kt)("strong",{parentName:"p"},"FOSS license scanning"),", and ",(0,r.kt)("strong",{parentName:"p"},"software composition analysis")," with Veracode."),(0,r.kt)("p",null,"Two actions are provided - ",(0,r.kt)("em",{parentName:"p"},"upload and scan")," and ",(0,r.kt)("em",{parentName:"p"},"pipeline"),"."),(0,r.kt)("h2",{id:"upload-and-scan"},"Upload and Scan"),(0,r.kt)("p",null,"Depending on how your application is built, you will need to run the build once and configure it under ",(0,r.kt)("inlineCode",{parentName:"p"},"filepath"),"."),(0,r.kt)("p",null,"Also the name of the Veracode application must be specified under ",(0,r.kt)("inlineCode",{parentName:"p"},"appname"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Veracode upload and scan"\n\non:\n  # push:\n  #   branches: [main]\n  # pull_request:\n  # The branches below must be a subset of the branches above\n  # branches: [ main ]\n  # paths-ignore:\n  #   - "**/*.md"\n  #   - "**/*.txt"\n  schedule:\n    # Once a day\n    - cron: "0 0 * * *"\n  workflow_dispatch:\n  # Trigger manually\n\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      # Build your code according to Veracode rules\n      - name: "Bundle / Build files to scan"\n        run: zip -r foo.zip foo\n\n      - name: Run Veracode Upload And Scan\n        uses: veracode/veracode-uploadandscan-action@0.2.1\n        with:\n          # Specify Veracode application name\n          appname: "<REPLACEME Veracode App Name>"\n          createprofile: false\n          # Specify path to upload\n          filepath: "<REPLACEME Path to file>"\n          vid: "${{ secrets.ORG_VERACODE_API_ID }}"\n          vkey: "${{ secrets.ORG_VERACODE_API_KEY }}"\n')),(0,r.kt)("h2",{id:"pipeline"},"Pipeline"),(0,r.kt)("p",null,"The pipeline scan is a local scan that provides quick results that are imported into the Code Scanning Alerts dashboard. The pipeline scan only supports static application security testing."),(0,r.kt)("p",null,"For example, it can also run as a status check in the pull requests."),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},'--file "<REPLACEME Path to file>"')," with the path to your build or zipped files."),(0,r.kt)("p",null,"The results between the pipeline scan and the upload scan may differ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "Veracode pipeline scan"\n\non:\n  push:\n    branches: [main]\n  # pull_request:\n  # The branches below must be a subset of the branches above\n  # branches: [ main ]\n  # paths-ignore:\n  #   - "**/*.md"\n  #   - "**/*.txt"\n  # schedule:\n  # Once a day\n  # - cron: "0 0 * * *"\n  workflow_dispatch:\n  # Trigger manually\n\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      # Build your code according to Veracode rules\n      - name: "Bundle / Build files to scan"\n        run: zip -r foo.zip foo\n\n      - name: Set up JDK 1.8\n        uses: actions/setup-java@v1\n        with:\n          java-version: 1.8\n      - name: Download the Pipeline Scanner\n        uses: wei/curl@master\n        with:\n          args: -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip\n      - name: Unzip the Pipeline Scanner\n        # Overwrites files\n        # Sometimes there are conflicts, e.g. README.md\n        run: unzip -o pipeline-scan-LATEST.zip\n      - name: Run Pipeline Scanner\n        # Specify path to your files\n        run: java -Dpipeline.debug=true -jar pipeline-scan.jar --veracode_api_id "${{secrets.ORG_VERACODE_API_ID}}" --veracode_api_key "${{secrets.ORG_VERACODE_API_KEY}}" --file "<REPLACEME Path to file>" --fail_on_severity="Very High, High" -jo true\n\n      - name: Convert pipeline scan output to SARIF format\n        if: always()\n        uses: Veracode/veracode-pipeline-scan-results-to-sarif@v0.1.5\n        with:\n          pipeline-results-json: results.json\n          output-results-sarif: veracode-results.sarif\n          source-base-path-1: "^com/veracode:src/main/java/com/veracode"\n          source-base-path-2: "^WEB-INF:src/main/webapp/WEB-INF"\n          finding-rule-level: "3:1:0"\n\n      - name: Upload Veracode sarif file to repository\n        uses: github/codeql-action/upload-sarif@v1\n        if: always()\n        with:\n          sarif_file: veracode-results.sarif\n')))}u.isMDXComponent=!0}}]);