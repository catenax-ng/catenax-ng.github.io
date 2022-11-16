---
slug: Office Hours 2022-11-11
title: Office Hours 2022-11-11
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

__DevSecOps:__

- Jira support ticket should be opened for requesting installation of a Github App
- ArgoCD upgrade to version 2.4 is ongoing (currently only on devsecops-testing environment). See [changelog](https://argo-cd.readthedocs.io/en/stable/roadmap/#v24) for new features
  - Web terminal will be available for executing commands in pods
- The team has started checking/supporting wave B products for Release 2
- Docker image updates:
  - License disclaimers for docker images will probably be provided similarly like in [eclipe-temurin](https://hub.docker.com/_/eclipse-temurin/), discussions are still ongoing
  - Java based images probably will use eclipse-timurin as base image
  - If security issues are found in eclipse-timurin images, give them feedback to fix those

__Security:__

- Invicti:
  - All HTTP requests can be exported from the scans now
  - Roadmap for Invicti: Jira integration, Github Actions to trigger scans after updates
- Pen-testing:
  - external company will start the tests next week. (Blackbox testing on Portal)
  - internal pen-testing is also ongoing, findings from those test should be implemented/fixed

__FOSS:__

- More products have migrated to Eclipse
- Automation of Dash license checks are documented [here](https://github.com/eclipse/dash-licenses#usage)
- Commiter elections should be described properly with more detail/reasons why the person is eligible for becoming a commiter

## Open discussions

- Removing a release from a repository does not mean that the docker image will also be deleted from ghcr image registy
- Providing environment specific helm values files in ArgoCD will be available in version 2.4. Currently git repository setup works, for Helm option teams need to wait for 2.4 to be available in all environemnts
- Using GitGuardian in Eclipse is possible, it is free for open source products
- Requirements and recommendations for the Helm charts can be found [here](https://catenax-ng.github.io/docs/trg/trg-5/trg-5-1#description)
- Internally in Kubernetes proper service names should be used so DNS would work

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared+Documents%2FCX-CoP+DevSecOps%2FOffice_Hours_Regular_Recordings%2F20221111_DevSecOps+Business+Hours-Recording.mp4&referrer=Teams.TEAMS-WEB&referrerScenario=teamsSdk-openFilePreview&referrer=Teams.TEAMS-ELECTRON&referrerScenario=p2p_ns-bim&web=1)
