---
slug: Office Hours 2022-09-23
title: Office Hours 2022-09-23
authors: DevSecOps
tags: [news, officehour]
---

## Agenda

__DevSecOps:__

- Office hours will be reduced to 1 hour (Fridays 13.00 - 14.00), can be extended if needed.

__Security:__

- first products onboarded and started scans with invicti
  - SSL/TLS findings - false posivites, will be fixed
  - JIRA integration is active, onboarding requests via christian.winnen@mhp.com
- external company has been requested for pen tests
  contact for requests : dl_CoP_IT_Security@catena-x.net

__FOSS:__

- All products started using licence checks, example for legal documentation:
  [FOSS example repo](https://github.com/catenax-ng/foss-example)
- tractus-x templates (license header) need to be used for contribution
- when moving to tractus-x repository and Git history is not complete -> add copyright header (either your company name or own name if self-employed)
- [Eclipse convention Ludwigsburg](https://www.eclipsecon.org/2022)

## General updates

n/a

## Open discussions

The following topics where discussed in the open session:

- ArgoCD - showcase of usage with Vault
- status in sonarcloud "not computed" (probably quality gates are not configured), wil be checked by system team
- finding: [CVE-2022-40674](https://github.com/catenax-ng/product-item-relationship-service/blob/main/Dockerfile)
  - [proposed fix](https://github.com/libexpat/libexpat/blob/R_2_4_9/expat/Changes)
  - nevertheless switch base image with alpine (or distro less [see](https://github.com/GoogleContainerTools/distroless))

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20220923_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=AgXswX).
