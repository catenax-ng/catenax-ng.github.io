---
slug: Office Hours 2023-11-10
title: Office Hours 2023-11-10
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps / System-Team

- AKS cluster updates began to follow Azure supported versions. Currently dev and int environment
  are upgraded to 1.27.3. Stable is still on 1.25.3 and will be upgraded at a future date before
  Tractus-X 23.12 release will be deployed.
- Please reply on this [GH Discussion](https://github.com/eclipse-tractusx/sig-infra/discussions/308)
  so we can learn more about how different products leverage Postgresql.

### Security

- Veracode reports red findings for a couple of products that needs to be addressed.
- Some hard coded tokens were found for EDC in catenax-ng repos. These are being investigated an addressed
  as soon as possible.

### FOSS

- [Andrea Bertagnolli](https://github.com/ndr-brt) has been elected as a committer in the Eclipse Foundation
  and will join the Tractus-X project.

## Open discussions

- The reason to move from Postgresql version 14 to 15 is to align each team and potentially prepare for
  a production environment where there might be a single instance of external database. Upgrading from
  version 14 to 15 using the Bitnami helm chart is possible and the process is being refined and documented
  and will be made available by the System Team at a later date.
- Catena-X does not have it's own CA to use for SSL. At the moment [Let't Encrypt](https://letsencrypt.org/)
  is used to sign certificates for browser applications.
- You can read more about how to become a contributor and a committer [here](https://eclipse-tractusx.github.io/docs/oss/getting-started) and [here](https://eclipse-tractusx.github.io/docs/dev_faq#how-can-i-become-an-official-tractus-x-contributor-with-triage-role). You can also open a support [issue ticket](https://github.com/eclipse-tractusx/sig-infra/issues/new?assignees=&labels=support&projects=&template=support-add-project-contributor.md&title=New+Tractus-X+project+contributor) about becoming a contributor.
- A demo will be shown on how to generate PDF file from markdown using [pandoc](https://pandoc.org/) soon.

## Session recording

- You can find the recording [HERE](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FCXDevSecOps%20Office%20Hours%2D20231110%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview)
