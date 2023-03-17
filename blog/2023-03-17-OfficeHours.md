---
slug: Office Hours 2023-03-10
title: Office Hours 2023-03-10
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- Example of using a GitHub issue to track 3rd Party IP issues in the Eclipse Foundation Help Desk: [daps-registration-service/issues/28](https://github.com/eclipse-tractusx/daps-registration-service/issues/28)
- [New repository '.github'](https://github.com/eclipse-tractusx/.github) in eclipse-tractusx. This can be used for organization wide templates (PR, or issue)
- Publishing images on DockerHub:
  - We have the final approval from management, that we can continue with our current approach
  - There will be slight fine-tunings on the legal notice (Link to Dockerfile, Link to list of contained packages + licences)
  - We will go one-by-one for each image to be published to ensure proper annotations
  - We will start with temurin based images, that do not add any additional dependencies
- Sonarcloud in eclipse-tractusx
  - Sonarcloud analysis is possible in eclipse-tractusx
  - Automatic scans can be enabled by the System team -> use existing support request channels
  - Manual scans or monorepo setups have to be enabled by the EF. [Example here](https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues/2810#note_1092963)
  - We'll work on a general ticket template to request it
  - System team will clarify confusion around mandatory or optional requirement for quality gate. Stay tuned!

### Security

- Reminder: Reach out to the Security team, if applications can be removed from Veracode
- Reminder: Some teams have been contacted to support the security team on authentication issues for Invicti -> check your mail
- There is an increase in failing SCA due to outdated libraries. Please check your results and upgrade if possible

### FOSS

- Official Eclipse Foundation Release 3.0.0 is scheduled. See [issue](https://gitlab.eclipse.org/eclipsefdn/emo-team/emo/-/issues/465) for progress
- The four currently open committer elections have been extended. After contributions to tractus-x have been shared via mailing list, please reconsider your vote
- Idea: Share good Help Desk issues in the [Links](https://eclipse-tractusx.github.io/docs/oss/links) section as examples

## Open discussions

- Update from Nico on current learnings about RC branches
  - RC branch approach dropped
  - Instead, focussing on trunk based development
  - Release branches are created after releasing to enable hot fixes on old releases
  - Currently working out, how to handle release workflows in hot fix situations
  - Thanks Nico!

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FCXDevSecOps%20Office%20Hours%2D20230317%5F130206%2DMeeting%20Recording%2Emp4).
