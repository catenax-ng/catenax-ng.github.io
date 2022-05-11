---
slug: Office Hours 2022-04-2
title: Office Hours 2022-04-22
authors: DevSecOps
tags: [news, officehour]
---

In our today's office hours, we discussed the following topics

1. News from the DevSecOps Team
   1. Make sure to use _\*.int.demo.catena-x.net_ when you are on Hotel Budapest. All initially created _\*
      .demo.catena-x.net_ need to migrate
   1. Please align repository names in catenax-ng to start with product-\* and try to keep lower cases seperated with
      - (see all other repositories); Its not critical but helps to align us all.
   1. Be aware that we will enforce 2FA very soon. We will soon announce it with proper documentation. If you can
      already enable it on your account, pls do.
   1.
1. News from the Security Team
   1. No updates
1. Q&A
   1. How does a developer access a database for testing? -> Please try to use a temporary ingress. If this doesn't
      work (we have not verified this yet), pls get in touch with us, so we can provide you with another solution,
      potentially switching the ingress ctrl.
   1. ArgoCD automatic redeployment doesn't work -> You need to enable auto-sync AND self heal. Self heal is relevant
      if you don't have a clean slate, ArgoCD will not auto sync if its not green.
1. Hands-on

You find the
recording [here](https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb)
