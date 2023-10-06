---
slug: Office Hours 2023-09-29
title: Office Hours 2023-09-29
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps / System-Team

- In catenax-ng organization we ran out of free Action minutes for private repositories. For the rest of the month a self-hosted runner has been enabled. You can read more about configuring workflows to use these runners [here](https://teams.microsoft.com/l/message/19:9a3c4a05a3514d07b973c13e7b468709@thread.tacv2/1695917732805?tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380&groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&parentMessageId=1695624766075&teamName=Communities%20of%20Practices&channelName=CX%20-%20CoP%20DevSecOps&createdTime=1695917732805&allowXTenantAccess=false). Please reconsider the triggers of the workflows in private repositories so reaching the limit can be avoided in the future.

### Security

- A Tractus-X release guide will be created. This will contain information about secrets, Trivy container, KICS infrastructure scanning. Security configuration will also be included for tools like Kubernetes and Postgresql.
- SSI security topics are becoming more important as EDC is already having an SSI module.

### FOSS

- Tomasz Barwicki got elected as committer. The participation rate on the voting was really high and the committers are reminded that it is their duty to vote and be active.
- First Eclipse Tractus-X Community Days will be in Stuttgart on 7-8 December 2023. It will be organized by Catena-X association and the Eclipse Foundation. The timetable can be found [here](https://eclipse-tractusx.github.io/blog/community-days#what-awaits-you). Registration link is already open.
- [EclipseCon](https://www.eclipsecon.org/2023) will be in Ludwigsburg on 16-19 October 2023. Registration is still open and Eclipse members like committers get a discount. There will be talks from some members of the Tractus-X community.

## Open discussions

- On stable environment when helm charts are configured via ArgoCD some attribute characters (like '$') need to be escaped to properly work.
- Even though a product will not be part of the next release it is encouraged to start contributing to it's repository for many reasons. First of all it help committers in the review process with not overwhelming them before the weeks of the release. Also inactive repositories get archived or deleted after a period of time. Please take a look at the [how to contribute](https://eclipse-tractusx.github.io/docs/oss/how-to-contribute#code) section to learn more.
- Dev ArgoCD performance was down. Keep in mind that the dev environment usually has a high load due to the many deployments. There might be a need to increase the number of nodes and the System Team will address this topic.
- There are no plans on renaming the int environment.
- Changes to a repository configuration can be done via otterdog in the [.eclipsefdn](https://github.com/eclipse-tractusx/.eclipsefdn) repository and a guide can be found [here](https://eclipse-tractusx.github.io/docs/oss/issues#create-manage-a-repository-in-eclipse-tractusx). Also System Team is willing to help out so opening an issue [here](https://github.com/eclipse-tractusx/sig-infra/issues/new/choose) with the request can be processed by them.
- Groups/teams in the eclipse-tractusx organization can be added the the otterdog configuration to let them see the securtiy advisories. Currently it's being discussed who should be able to see them as it comes with security risks.
- Resource requests and limits in Pods will be revisited by the System Team to incorporate the official guidance for QoS available in the Kubernetes documentation.

## Session recording

- You can find the
  recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230929%5FDevSecOps%2DBusiness%20Hours%2DRecording%2Emp4&referrer=OneDriveForBusiness&referrerScenario=OpenFile)
