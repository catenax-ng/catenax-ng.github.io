---
slug: Office Hours 2022-11-18
title: Office Hours 2022-11-18
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

__DevSecOps:__

- The use case of [GitHub Check Results page](https://gh-org-checks.core.demo.catena-x.net/) needs to be clarified.
  - The tool is __not used__ to display the current product versions deployed to different clusters!
  - Rather it is helping teams __check basic repository structure__
  - Identify issues / missing files that need to be fixed
  - Comply with __Security Team / FOSS Team / Eclipse / System Team__ defined requirements
  - The tool will be reworked / extended in the future to be more useful for the product teams and Release Management
- __ArgoCD v2.4 upgrade__ is imminent. After the upgrade, the web terminal will be available for teams to access pods and run commands within

__Security:__

- No updates

__FOSS:__

- The FOSS team is offering __pre-screening of Commiter nominations__. High quality nominations help everyone decide whether they elect the person to be Eclipse Commiter
- [Commiter Infos](https://confluence.catena-x.net/pages/viewpage.action?spaceKey=CF&title=Committer+Infos+@+Eclipse+TractusX) page helps see a person's different contact / account info (Confluence, Eclipse, GitHub, Product names)

## Open discussions

- For penetration testing the __dev__ cluster should be used. Teams who started deploying their application on int environment for testing, please migrate to dev cluster
- In the Eclipse Tractus-X Github org, the __Veracode secrets__ are called `VERACODE_API_ID` and `VERACODE_API_KEY`. In the catena-X (ng) GitHub Org, the names `ORG_VERACODE_API_ID` and `ORG_VERACODE_API_KEY` can also be used as Veracode secrets
- Getting __product DAPS__ to Eclipse requires a license / IP check as it contains external dependency / software

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20221118%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DELECTRON&referrerScenario=p2p%5Fns%2Dbim)
