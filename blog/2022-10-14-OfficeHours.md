---
slug: Office Hours 2022-10-14
title: Office Hours 2022-10-14
authors: DevSecOps
tags: [news, officehour]
---


## General updates / information

__DevSecOps:__

- Moved Loki to the top of backlog as requested. After launch a central log aggregation system will be available for the product teams
- Teams need to fix their Helm Charts / default vaules.yaml files according to this [Tractus-X Release Guidelines Helm](https://catenax-ng.github.io/docs/trg/trg-5/trg-5-1) section
- An updated Helm Linting and Testing workflow (Github Action) is in the works. It will be available in the [How to lint and test your helm chart](https://catenax-ng.github.io/docs/guides/how-to-lint-and-test-your-helm-chart#github-workflow) guide later on
  - External dependency repositories have to be added to the testing configuration file

__Security:__

- External penetration test is still planned around mid November
- Veracode:
  - EDC static scans are running
  - Dynamic tests are processing
  - Active discussions with the teams to improve process

__FOSS:__

- FOSS status page:
  - More teams have moved to Tractus-X
- To become a Committer in Eclipse a formal process is followed: Committer Election
  - Committer can propose someone to become a committer
  - Proposal is about whether the person can be trusted
  - They will have write access to repositories
- Good practice for forking repositories from Tractus-X is to use __tx-__ prefix. See for example [tx-portal-frontend-registration](https://github.com/catenax-ng/tx-portal-frontend-registration)
  - Same repositories in catenax-ng organization can be marked as obsolite and recommended to update the README.md to mark it as well

## Open discussions

The following topics where discussed in the open session:

- Migrating to Tractus-X:
  - Secrets:
    - Migrating secrets to Tractus-X have to be investigated one-by-one as some might be obsolete
  - Gitguardian is a Github app, using it have to be verified with Eclipse
  - Veracode:
    - A secret is needed to trigger Veracode
    - Veracode secret cannot be copied directly to Tractus-X
  - Sonarcloud:
    - Tractus-X has it's own Sonarcloud space
    - With external contributions Sonarcloud workflow does not work due to security concerns
  - Workflows are being overviewed to be repository independent and be able to run in Tractus-X as well
  - Docker Images:
    - Currently the images will be in Tractus-X Github organization as private
    - The plan is to push the images to DockerHub
- [Semantic Versioning 2](https://semver.org/#semantic-versioning-specification-semver) is the preferred versioning strategy for images, charts, tags, etc
- License questions have to be discussed with the Contributor's organization Open Source office

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/_layouts/15/stream.aspx?id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX-CoP%20DevSecOps%2FOffice_Hours_Regular_Recordings%2F%5BCX%5DDevSecOps%20Office%20Hours-20221014_120354-Meeting%20Recording.mp4&referrer=Teams.TEAMS-ELECTRON&referrerScenario=teamsSdk-openFilePreview).
