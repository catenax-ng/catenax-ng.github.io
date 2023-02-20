---
slug: Office Hours 2023-02-10
title: Office Hours 2023-02-10
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- We advise teams to constantly check the [Tractus-X Release Guidelines](https://eclipse-tractusx.github.io/docs/category/release-guidelines) to be ready for Release 3.0
- The System Team have helped the Release 3.0 candidate products during the week to be ready for Quality Gate 4 and 5

### Security

- [External Penetration Testing](https://confluence.catena-x.net/display/cxsecurity/External+Penetration+Testing) status and agenda is updated and can be followed in Confluence
- Products that use Springboot need to upgrade from version 2.x.x to at least 3.0.1. Security Team can help with the upgrade and they require it for the penetration tests to continue

### FOSS

- A new product is in Eclipse Tractus-X now: [Battery Passport](https://github.com/eclipse-tractusx/digital-product-pass)
- [Vue-loader](https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues/6946) dependency got rejected in the IP checks as it contains malitious code
- Teams need to be aware that IP checks need to be tracked/followed by themselved and not the commiters in Eclipse
- New section in the Developer Hub is available and it contains information about [open source development](https://eclipse-tractusx.github.io/docs/category/open-source-development):
  - Getting started with urls
  - How to contribute
  - Code review process

## Open discussions

- Alpine base image contains openssl library with known vulnerability. The following solutions were discussed with the first point as the recommended one:
  - Wait for Alpine to release a fix
  - Update specific APK packages in the Dockerfile
  - Use other linux distribution (Debian, Ubuntu) that does not contain this vulnerability

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230210%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&referrer=Teams%2ETEAMS%2DWEB&referrerScenario=teamsSdk%2DopenFilePreview).
