"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"How To Onboard Product-Teams To Any Environment",slug:"/how-to-onboard-teams-to-any-environment"},i=void 0,s={unversionedId:"internal/how-to-onboard-teams-to-any-environment",id:"internal/how-to-onboard-teams-to-any-environment",title:"How To Onboard Product-Teams To Any Environment",description:"This guide is only for those who operate the environment",source:"@site/docs/internal/how-to-onboard-teams-to-any-environment.md",sourceDirName:"internal",slug:"/how-to-onboard-teams-to-any-environment",permalink:"/docs/how-to-onboard-teams-to-any-environment",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/internal/how-to-onboard-teams-to-any-environment.md",tags:[],version:"current",frontMatter:{title:"How To Onboard Product-Teams To Any Environment",slug:"/how-to-onboard-teams-to-any-environment"},sidebar:"tutorialSidebar",previous:{title:"Tractus-X Release Guidelines (moved)",permalink:"/docs/release-guidelines"},next:{title:"How to onboard teams to sonarcloud",permalink:"/docs/how-to-onboard-teams-to-sonarcloud"}},l={},p=[{value:"Basics",id:"basics",level:2},{value:"GitHub",id:"github",level:2},{value:"Invitation of a single user",id:"invitation-of-a-single-user",level:3},{value:"Creating a GitHub team via terraform",id:"creating-a-github-team-via-terraform",level:3},{value:"Creating a repository via terraform",id:"creating-a-repository-via-terraform",level:3},{value:"Assigning a team as contributor to a repository via terraform",id:"assigning-a-team-as-contributor-to-a-repository-via-terraform",level:3},{value:"Vault via terraform",id:"vault-via-terraform",level:2},{value:"Add the new team to the list of product teams",id:"add-the-new-team-to-the-list-of-product-teams",level:3},{value:"ArgoCD",id:"argocd",level:2},{value:"Create ArgoCD Project",id:"create-argocd-project",level:3},{value:"Create AVP Secret",id:"create-avp-secret",level:3},{value:"Prepare Deployment Of ArgoCD Project And AVP Secret",id:"prepare-deployment-of-argocd-project-and-avp-secret",level:3},{value:"Create Pull Request",id:"create-pull-request",level:3},{value:"Special Topics",id:"special-topics",level:2},{value:"Enable access to a private repository via deploy key",id:"enable-access-to-a-private-repository-via-deploy-key",level:3},{value:"Enable access to a private package (central pull secret)",id:"enable-access-to-a-private-package-central-pull-secret",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This guide is only for those who operate the environment")),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("p",null,"We handle all of our support requests as a Jira task. There are ",(0,r.kt)("a",{parentName:"p",href:"https://catenax-ng.github.io/docs/resources"},"templates"),"\npresent for well-known and recurring tasks and also a blank template.\nFor handling these support tasks, we follow our internal support workflow."),(0,r.kt)("p",null,"Since we setup teams and repositories in our GitHub organization and manage secrets in Hashicorp Vault using only one\nscript, at first ",(0,r.kt)("strong",{parentName:"p"},"terraform has to be initialized")," as described in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/100_team_onboarding/README.md"},"README.md")," file in the directory\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding"},"100_team_onboarding"),".\nIt is assumed, that you already have installed the terraform CLI. Before you start, make sure you've cloned\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s_cluster_stack"),"\nrepository and navigated to ",(0,r.kt)("inlineCode",{parentName:"p"},"/terraform/100_team_onboarding")," inside that repository on your terminal.\nThe check of the changes with 'terraform plan' and creation with 'terraform apply' which can be done after every\nterraform change or only at the end of all necessary changes is also described in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/blob/main/terraform/100_team_onboarding/README.md"},"README.md"),"."),(0,r.kt)("p",null,"For 'terraform apply' and 'terraform plan' command the following command line variables has to be set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# You can get a login token, by logging into the Vault web UI and using 'copy token' from the top right user menu\nexport VAULT_TOKEN=<your-vault-token-or-root-token>\n# The OIDC settings that needs to be specified is the client-id and the client-secret for DEX. You can find this\ninformation in our devsecops secret engine in vault at path `devsecops/clusters/vault/github-oauth`.\nexport TF_VAR_vault_oidc_client_id=<client-id-copied-from-vault>\nexport TF_VAR_vault_oidc_client_secret=<client-secret-copied-from-vault>\n# A Github personal access token has to be created.\nexport TF_VAR_github_token=<github-pat>\n")),(0,r.kt)("admonition",{title:"regarding terraform",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Following steps have to be done in the given order, otherwise there could be problems with other developments done in\nparallel:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"create a new branch"),(0,r.kt)("li",{parentName:"ol"},"make changes"),(0,r.kt)("li",{parentName:"ol"},"do a terraform plan to check if the changes meet your expectations"),(0,r.kt)("li",{parentName:"ol"},"create a PR and merge"),(0,r.kt)("li",{parentName:"ol"},"do a terraform apply")),(0,r.kt)("p",{parentName:"admonition"},"Only after the merge in Github and the terraform apply have been done, the terraform state is consistent.\nOtherwise changes which are applied in parallel by someone else might be deleted again")),(0,r.kt)("h2",{id:"github"},"GitHub"),(0,r.kt)("p",null,"The following section describes how to handle users, teams and repositories in our GitHub organisation"),(0,r.kt)("h3",{id:"invitation-of-a-single-user"},"Invitation of a single user"),(0,r.kt)("p",null,'Interaction with most of our tooling and also access to repositories is granted to members of our GitHub organization\n"catenax-ng". So ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/catenax-ng/people"},"inviting")," users to the organization is the starting point for every Catena-X member."),(0,r.kt)("p",null,"As initial information to onboard a user to the organization, we need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The GitHub username (or email address) of the person to onboard"),(0,r.kt)("li",{parentName:"ul"},"A person (i.e. the product PO) to vouch for the person being onboarded to actually be part of Catena-X")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Assigning a GitHub user to the several GitHub product teams should be done by the maintainers of the GitHub product teams. Only in rare cases,\nlike onboarding a new person and a new team in the same step, DevSecOps team should assign github users to github teams.")),(0,r.kt)("h3",{id:"creating-a-github-team-via-terraform"},"Creating a GitHub team via terraform"),(0,r.kt)("p",null,"Access to repositories is granted on a GitHub team level instead of individuals. Also RBAC definitions on Vault and\nArgoCD are based on GitHub team membership."),(0,r.kt)("p",null,"To create GitHub teams, we are using the terraform root module\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding"},"100_team_onboarding"),".\nTo create a new GitHub team, edit ",(0,r.kt)("inlineCode",{parentName:"p"},"main.tf")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"100_team_onboarding")," directory and locate the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"github_teams"),"\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},'module "github" { ... }'),". This variable contains a map of all the teams in our GitHub organization with name and\ndescription properties."),(0,r.kt)("p",null,"All you need to do is to add a new entry to that map with the new team name and an optional description. Make sure, the\nkey you use for your new entry is unique. This key will also be used by terraform to create an entry in the state file."),(0,r.kt)("h3",{id:"creating-a-repository-via-terraform"},"Creating a repository via terraform"),(0,r.kt)("p",null,"Git repositories are also managed by our terraform root module\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding"},"100_team_onboarding"),". The\nprocess of creating a new repository is similar to creating a team. You need to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.tf")," file in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"100_team_onboarding")," directory. Repositories are defined in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"github_repositories")," variable inside ",(0,r.kt)("inlineCode",{parentName:"p"},'module "github" { ... }'),". This variable is a map containing all the repository\ninformation. To create a new one, add a new entry to the map."),(0,r.kt)("p",null,"Event though most of the repository settings are configurable, the following should be set in a default case."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'visibility : "public"'),". Exception is only, if the teams did not yet clarify IP related questions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pages : { enabled : false }"),". If a team wants to use GitHub pages, you can set this to true. This is needed, if teams\nwant to release artifacts like helm charts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"is_template : false"),". We usually do not create new repositories as template"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uses_template : false"),". Currently, our repositories are set up blank and not based on a template"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"template : null"),". Since we usually do not use a template, we do not specify one. In case we want to use a template,\nthis variable has to be defined as object of form ",(0,r.kt)("inlineCode",{parentName:"li"},'{ owner : "github-org" repository : "repo-name" }'))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the team requested k8s-helm-example repository to be used as a template, the following settings needs to be changed:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uses_template : true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'template : { owner : "catenax-ng" repository : "k8s-helm-example" }'))),(0,r.kt)("p",{parentName:"admonition"},"The newly created repository will be populated with files from the template, github pages will be enabled and github action for releasing helm charts to pages will be added.")),(0,r.kt)("h3",{id:"assigning-a-team-as-contributor-to-a-repository-via-terraform"},"Assigning a team as contributor to a repository via terraform"),(0,r.kt)("p",null,"Contribution access to a repository in our GitHub organization is granted on a team level. We do not\ngrant this kind of access to individuals.\nAccess is again managed by our terraform root module\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding"},"100_team_onboarding"),"."),(0,r.kt)("p",null,"To manage contribution access for a team on a repository, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.tf")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"100_team_onboarding")," directory.\nThere, add a new map entry to the ",(0,r.kt)("inlineCode",{parentName:"p"},"github_repositories_teams")," variable inside ",(0,r.kt)("inlineCode",{parentName:"p"},'module "github" { ... }'),".\nAs convention, we decided to for the map key as a combination of repository and team (",(0,r.kt)("inlineCode",{parentName:"p"},"<repository-name-team-name>"),").\nThis is done, because we have cases of multiple teams contributing to a single repository. This is configured, by\nadding multiple entries to the ",(0,r.kt)("inlineCode",{parentName:"p"},"github_repositories_teams")," map, containing the same repository, but a different team\neach time."),(0,r.kt)("p",null,"As default, we configure ",(0,r.kt)("inlineCode",{parentName:"p"},"maintain")," access on the product repositories for the teams, since all the administrative\ntasks are handled by the team managing the organization."),(0,r.kt)("h2",{id:"vault-via-terraform"},"Vault via terraform"),(0,r.kt)("p",null,"To be able to manage secrets in Hashicorp Vault and use them via ArgoCD Vault Plugin (AVP), a team needs the following\nVault resources set up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"secret engine")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"read-write policy")," for the secret engine, used to manage secrets via web UI or CLI; Mapped to the GitHub team"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("em",{parentName:"li"},"approle"),", that is used as AVP credentials"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"read-only policy")," for the secret engine, used as AVP credentials; Mapped to the approle"),(0,r.kt)("li",{parentName:"ul"},"Approle credentials (secret-id and role-id) available as ",(0,r.kt)("em",{parentName:"li"},"avp-config in the devsecops")," secret engine")),(0,r.kt)("p",null,"All of these resources are created through terraform scripts. The scripts are part of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s_cluster_stack")," repository."),(0,r.kt)("h3",{id:"add-the-new-team-to-the-list-of-product-teams"},"Add the new team to the list of product teams"),(0,r.kt)("p",null,"Onboarding a new team is also managed by our terraform root module\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack/tree/main/terraform/100_team_onboarding"},"100_team_onboarding"),".\nYou need to edit ",(0,r.kt)("inlineCode",{parentName:"p"},"main.tf")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"100_team_onboarding")," directory and locate the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"product_teams"),"\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},'module "vault" { ... }'),". This variable contains a map of all the product teams. To create a new one, add a\nnew entry to the map."),(0,r.kt)("h2",{id:"argocd"},"ArgoCD"),(0,r.kt)("p",null,"To provide a product-team access to the Hotel Budapest infrastructure following onboarding steps must be performed (all\nsteps are related to repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s_cluster_stack"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create ArgoCD project"),(0,r.kt)("li",{parentName:"ul"},"create AVP secret"),(0,r.kt)("li",{parentName:"ul"},"deploy ArgoCD project and AVP secret")),(0,r.kt)("p",null,"Create a new branch in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s_cluster_stack")," repo for onboarding a new\nproduct-team to ArgoCD."),(0,r.kt)("h3",{id:"create-argocd-project"},"Create ArgoCD Project"),(0,r.kt)("p",null,"Create a manifest for the new product-team to create:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"k8s namespace"),(0,r.kt)("li",{parentName:"ul"},"ArgoCD project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: product-productName\n---\napiVersion: argoproj.io/v1alpha1\nkind: AppProject\nmetadata:\n  name: product-productName\n  namespace: argocd\nspec:\n  description: Project for product-productName\n  sourceRepos:\n    - "*"\n  destinations:\n    - namespace: product-productName\n      server: https://kubernetes.default.svc\n  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy\n  namespaceResourceBlacklist:\n    - group: ""\n      kind: ResourceQuota\n    - group: ""\n      kind: LimitRange\n    - group: ""\n      kind: NetworkPolicy\n  roles:\n    # A role which provides access to all applications in the project\n    - name: team-admin\n      description: All access to applications inside project-bpdm. Read only on project itself\n      policies:\n        - p, proj:project-productName:team-admin, applications, *, project-productName/*, allow\n      groups:\n        - catenax-ng:product-productName\n')),(0,r.kt)("p",null,"Store this manifest in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repo in\npath ",(0,r.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/argo-projects/")," and in every environment you need it. Default is\ndev and int (Hotel-Budapest)."),(0,r.kt)("h3",{id:"create-avp-secret"},"Create AVP Secret"),(0,r.kt)("p",null,"To enable the product-team to use Vault with ArgoCD create a team specific AVP secret manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  annotations:\n    avp.kubernetes.io/path: "devsecops/data/avp-config/product-productName"\n  name: vault-secret\n  namespace: product-productName\ntype: Opaque\nstringData:\n  VAULT_ADDR: https://vault.demo.catena-x.net/\n  AVP_TYPE: vault\n  AVP_AUTH_TYPE: approle\n  AVP_ROLE_ID: <role_id>\n  AVP_SECRET_ID: <secret_id>\n')),(0,r.kt)("p",null,"Store this manifest in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repo in\npath ",(0,r.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/avp-secrets/")," and in every environment you need it. Default is\ndev and int (Hotel-Budapest)."),(0,r.kt)("p",null,"The secret will be called ",(0,r.kt)("em",{parentName:"p"},"vault-secret")," and stored in k8s namespace related to product-team."),(0,r.kt)("h3",{id:"prepare-deployment-of-argocd-project-and-avp-secret"},"Prepare Deployment Of ArgoCD Project And AVP Secret"),(0,r.kt)("p",null,"To deploy k8s namespace, ArgoCD Project and the AVP secret to Hotel Budapest you'll have to add the two created manifest\nfiles to ",(0,r.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/kustomization.yaml"),"\nin ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n\n#namespace: argocd\n\nresources:\n  [ ... ]\n  - argo-projects/product-productName.yaml\n  - avp-secrets/productName-vault-secret.yaml\n  [ ... ]\n")),(0,r.kt)("p",null,"Please add the new product-team in alphabetical order to the ",(0,r.kt)("em",{parentName:"p"},"resources")," section of file ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomization.yaml"),"."),(0,r.kt)("h3",{id:"create-pull-request"},"Create Pull Request"),(0,r.kt)("p",null,"After you have created the three files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"environments/hotel-budapest/argo-projects/product-productName.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"environments/hotel-budapest/avp-config/productName-team-vault-secret.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"environments/hotel-budapest/kustomization.yaml"))),(0,r.kt)("p",null,"create a PR for your branch. After the PR has been approved and merged into main branch, the new team will be\nautomatically deployed to Hotel Budapest cluster (via ArgoCD application ",(0,r.kt)("em",{parentName:"p"},"hotel-budapest-config")," at ArgoCD ",(0,r.kt)("em",{parentName:"p"},"CORE"),"\ncluster)."),(0,r.kt)("h2",{id:"special-topics"},"Special Topics"),(0,r.kt)("h3",{id:"enable-access-to-a-private-repository-via-deploy-key"},"Enable access to a private repository via deploy key"),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The project/product has to follow the steps which can be found\nhere: ",(0,r.kt)("a",{parentName:"p",href:"guides/how-to-prepare-a-private-repo"},"How to prepare a private repo"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"catenax-ng\\k8s-cluster-stack\\environments\\hotel-budapest\\argo-repos"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"product-<productName>-repo.yaml"),", e.g. for ",(0,r.kt)("em",{parentName:"p"},"product-semantics")," (",(0,r.kt)("inlineCode",{parentName:"p"},"product-semantics-repo.yaml"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: product-semantics-repo\n  namespace: argocd\n  annotations:\n    avp.kubernetes.io/path: "semantics/data/deploy-key"\n  labels:\n    argocd.argoproj.io/secret-type: repository\nstringData:\n  type: git\n  url: git@github.com:catenax-ng/product-semantics\n  name: product-semantics-repo\n  project: project-semantics\n  sshPrivateKey: |\n    <semantics-deploy-key>\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add following line to ",(0,r.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/kustomization.yaml")," and for every environment you need it.\nDefault is dev and int (Hotel-Budapest)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- argo-repos/product-semantics-repo.yaml\n")))),(0,r.kt)("h3",{id:"enable-access-to-a-private-package-central-pull-secret"},"Enable access to a private package (central pull secret)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a PAT within GitHub user account (machine user)\nsettings - Developer settings - Personal access token. Be sure to give just the needed rights (read:package will be\nsufficient to deploy)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Now do a base64 encoding for the PAT $ echo -n "<username',">",":<PAT",">",'" | base64')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},".dockerconfigjson")," containing the base-64 encoded PAT"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auths": {\n    "ghcr.io": {\n      "auth": "<base-64 encoded PAT>"\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Do a base 64 encoding for the auth part"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo -n\'{"auths":{"ghcr.io":{"auth":"<base-64 encoded PAT>"}}}\' | base64\n')),(0,r.kt)("p",{parentName:"li"},"If the output is divided into 2 lines, just add the second line to the first (without space)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerconfigjson.yaml"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Secret\ntype: kubernetes.io/dockerconfigjson\napiVersion: v1\nmetadata:\n  name: budapest-machine-user-read-package\n  labels:\n    app: app-name\ndata:\n  .dockerconfigjson: <base64 encoded auth part, output from second base64 encoding>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then add the secret to the cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f dockerconfigjson.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pull secret has to be added to the product\xb4s code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"imagePullSecrets:\n  - name: <name of the pull secret>\n")))))}m.isMDXComponent=!0}}]);