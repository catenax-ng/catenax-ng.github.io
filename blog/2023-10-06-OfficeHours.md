---
slug: Office Hours 2023-10-06
title: Office Hours 2023-10-06
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps / System-Team

- Improvements on the Tractus-X [Release Guidelines Checks](https://eclipse-tractusx.github.io/sig-release/) page.
  - Repositories are grouped by type (product, special interest groups, supporting).
  - Repositories are now sorted in alphabetical order.
  - The team is aware of some issues (like base image detection) and are investigating a solution.
  - Please give us feedback if you find any issues or have some ideas on how to improve!
- A [Release Planning board](https://github.com/orgs/eclipse-tractusx/projects/26/views/9)is available now on GitHub.
  - POs and PMs are being onboarded to have access to this new approach.
  - Issues are moved over to this new board from Jira.
  - You can read more about the working model [here](https://github.com/eclipse-tractusx/sig-release#sig-release).

### Security

- New TRG 4.07 is WIP (see the [pull request](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/pull/414)) regarding Read-only filesystems.
  - Suggestinos (like how to handle temoprary filesystems) to extend this TRG is welcome.
- Veracode consulting hours are available and can be requested on the Veracode page. If any questions come up regarding findings a Veracode consultant is available to help.

### FOSS

- [EclipseCon](https://www.eclipsecon.org/2023) will be in Ludwigsburg on 16-19 October 2023. Registration is still open and Eclipse members like committers get a discount. There will be talks from some members of the Tractus-X community.
  - Registration is open [here](https://www.eclipsecon.org/2023/registration).
- First Eclipse Tractus-X Community Days will be in Stuttgart on 7-8 December 2023. It will be organized by Catena-X association and the Eclipse Foundation. The timetable can be found [here](https://eclipse-tractusx.github.io/blog/community-days#what-awaits-you). Registration link is already open.
- If somebody wants to become a commiter they can contact the community to help with the election.

## Open discussions

- Making large changes the are only formatting (like introducing checkstlye) can be done in one pull request. But be sure not to include any other features, bugfixes and make your description straightforward that this only contains formatting. Be aware that you need to make an IP check if more than a 1000 lines are changed but there can be exceptions with this rule.
- Upgrading Postgresql Bitnami Helm chart from appVersion 14 to 15 is not working currently. An investigation is needed to determine if this is even possible. For the moment wiping the data and creating the database from scratch with new version is possible and should be feasable as in Catena-X we don't operate production environments and a managed database instance would make this effort much easier. A discussion about this topic can be found [here](https://github.com/eclipse-tractusx/sig-infra/issues/271).
- There are some issues regarding GitHub workflows using the default runners in the free plan. This occures usually running the helm lint and test workflow with a large chat with many objects that consume a lot of resources and take a lot of time to spin up and run. There were already indications that GitHub Enterprise will be enabled for the eclipse-tractusx organization that would enable to use runners with more CPU and memory resources. In the meantime it is suggested to disable as many dependencies in your default values.yaml file as possible without breaking the deployment and the runtime of your application. Another suggestion is to adjust the container resource requests as setting them too large could also interfere with the resource usage.
- Using Hashicorp applications can be still used as they are not direct dependencies for the products but for the future there must be some replacement/solution provided by the Catena-X Architecture board.
- There was an issue with Managed Identity Wallets product regarding token validation on the int environment. Onboarding of MiW in Portal works properly. Please make sure when a similar issue happens, open a discussion in the [Tractus-X chat](https://chat.eclipse.org/#/room/#tools.tractus-x:matrix.eclipse.org) and open an issue in the relevant GitHub repository (this case for [MiW repo](https://github.com/eclipse-tractusx/managed-identity-wallet/issues/new/choose)).

## Session recording

- You can find the
  recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20231006%5FDevSecOps%2DBusiness%20Hours%2DRecording%2Emp4&referrer=SharePoint&referrerScenario=OpenFile)
