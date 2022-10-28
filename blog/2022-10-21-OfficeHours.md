---
slug: Office Hours 2022-10-21
title: Office Hours 2022-10-21
authors: DevSecOps
tags: [news, officehour]
---


## General updates / information

__DevSecOps:__

- Docker image handling in Tractus-X - currently not possible -> put images into Catena-X (ng) for the time being.
- Sonarcloud analysis of pull requests to Tractus-X repositories - no solution yet

__Security:__

- Invicti testing - please provide the following information when ordering:
  - for APIs: open API file
  - for applications: application URL + credentials
- Gitguardian - Emails are sent on findings to respective repository owners (Catena-X ng repositories only)

__FOSS:__

- Migration to Tractus-X well on track
- Intellectual Property - Björn Roy will support on open issues
- Please subscribe to the [Tractus-X Dev Mailing List](https://accounts.eclipse.org/mailing-list/tractusx-dev).
- Please prefix your helpdesk tickets at the Eclipse Foundation with "tractus-x".

## Open discussions

The following topics where discussed in the open session:

- Portal team: the if statements in the [helm-lint-test.yaml](https://github.com/catenax-ng/tractus-x-release/blob/main/.github/workflows/helm-lint-test.yaml#L66) caused missing and superfluous runs of the action -> we will investigate.

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20221021_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1&e=5nfe1e).
