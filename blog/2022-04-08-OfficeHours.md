---
slug: Office Hours 2022-04-08
title: Office Hours 2022-04-08
authors: DevSecOps
tags: [news, officehour]
---

In our today's office hours, we discussed the following topics

1. News from the DevSecOps Team
   1. Still working on finishing argocd, dns and vault setup
1. News from the Security Team
   1. Live VeraCode presentation. Already 7 products are onboarded
1. Q&A
   1. Question to security team regarding VeraCode and license scan: Is the license scan of VeraCode already aligned with Catena-X requirements -> Question was taken by security team, no answer yet
   1. When should the code base moved from tractusx to catenax-ng -> As soon as possible. Supported / Golden path is catenax-ng only
   1. Issue with VeraCode Intellij Integration. A collegue was not able to use it. Security collegue figured out that a permission was missing on VeraCode.
   1. How are Multi environment deployments done correctly -> Every new environment will provide its own argocd instance. You will define your application per environment on the environment argocd
   1. How do you work with Secrets and ArgoCD? -> Currently you send your secrets manually to us and we will apply it in your namespace. The vault integration is very close to finish, then you will be able to reference inside ArgoCD secrets from vault
   1. How to work with Helm dependencies? This was asked in context of how to seperate the catena-x specific helm chart and your product helm chart. The motivation for separation is to have not catena-x specific code in your repository -> There is no particular requirement to keep catena-x specifics out of your repository. Best practice might be to have a release process which removes all catena-x specific files (which would then also generate a documentation and other things)
1. Hands-on

You find the recording [here](https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb)
