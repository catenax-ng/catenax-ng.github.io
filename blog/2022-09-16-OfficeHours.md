---
slug: Office Hours 2022-09-16
title: Office Hours 2022-09-16
authors: DevSecOps
tags: [news, officehour]
---

## Reminders

__DevSecOps:__

- ArgoCD creating Apps using HELM  
  Creating ArgoCD App the HELM way when HELM Chart contains dependencies failed. We've found a solution for that
  adjusting the AVP configuration.
- ArgoCD Version upgrade  
  We will upgrade our environments (DEV/INT/BETA/Pre-PROD) to ArgoCD v2.3.7 as there were security fix. This will be
  available as of monday, 19th sept. 2022.

__Security:__

- In near future pen-testing will be offered though a third party company. Security team will announce details later.
- Invicti has been purchased and security team is currently setting up scans.
- Security team renewed call for delete unused Veracode applications due to running short on
  licenses. [See Sec teams announcement](https://teams.microsoft.com/l/message/19:9a3c4a05a3514d07b973c13e7b468709@thread.tacv2/1662714418275?tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380&groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&parentMessageId=1662714418275&teamName=Communities%20of%20Practices&channelName=CX%20-%20CoP%20DevSecOps&createdTime=1662714418275&allowXTenantAccess=false)
  in DevSecOps CoP channel.

__FOSS:__

- Short overview about open issues in eclipse board
- Regarding moving to Eclipse foundation some product teams already have committer role in Eclipse. These teams will
  support product teams which don't have a committer yet.

## General updates

The following updates were presented:

- ArgoCD will be upgraded to v2.3.7 as of monday. There are currently no plans to upgrade to v2.4.x as ArgoCD introduced
  braking changes which have to be checked by system team.

## Open discussions

The following topics where discussed in the open session:

- ArgoCD - permission problems inside POD/Container
- Veracode - Vulnerability in a dependency package, but already using the latest version for this dep (keycloak).
  Problem solved, as in the meantime a new version has been released fixing this.
- Eclipse - General questions about license scan. Former scans were green, but now scan complains.

## Session recording

You find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/Shared%20Documents/Forms/AllItems.aspx?sortField=Modified&isAscending=false&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20220916%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&viewid=a90239a2%2D4eb1%2D446e%2D9246%2Daedc18ebdc75&parent=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings).
