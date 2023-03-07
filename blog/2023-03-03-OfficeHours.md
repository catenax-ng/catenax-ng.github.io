---
slug: Office Hours 2023-03-03
title: Office Hours 2023-03-03
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- Today (03.03) was the deadline for Quality Gate 5. The System Team have collaborated with the paticipating teams to solve all remaining issues and most of them have already passed the gate.
- New [Draft TRGs](https://eclipse-tractusx.github.io/docs/release/trg-0/) are available. These have a proposed mandatory that, so everyone can prepare to meet the new requirements.
  - Kubernetes versions: each product need to support 3 versions of Kubernetes that can be checked and covered with `helm test` at a future date.
  - Upgradeability: each product need to succeessfully perform an `helm upgrade` command on an already deployed chart
  - Helm test: each product need to run `helm test` github actions on different occasions. This spins up a kind kubernetes cluster, deploys the helm chart and runs predefined tests on it.

### Security

- New vulnerabilities can appear on applications without any code changes, that is a normal behaviour. Keep an eye on the problems and update your dependency packages accordingly.
- GitGuardian is available on eclipse-tractusx repositories. If a secret is detected, the Security Teams sends an email to the team. In some cases the found secret is just a dummy value it can be flagged so the scan will ignore it, but be cautious not to ignore any secrets that can expose vulnerabilities!

### FOSS

- Keep an eye on the Developer Hub's [Open Source Development](https://eclipse-tractusx.github.io/docs/category/open-source-development) section as new articles are available.
- Eclipse Office Hour calendar is available [here](https://www.eclipse.org/projects/calendar/)

## Open discussions

- If a product has a dependency helm chart that is currently not working, it can be configured with the default values.yaml file to specific needs. Mocks can also be created.
- The application needs to start up without crashing using the default values.yaml file.
- A common API documentation is being prepared to be available on the [Eclipse TractusX website](https://eclipse-tractusx.github.io/). Each team will be able to share their API docs here. In the meantime it can be published on the repository's GitHub pages as well.

## Session recording

You can find the recording [here](https://bcgcatenax.sharepoint.com/:v:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings/20230303_DevSecOps%20Business%20Hours-Recording.mp4?csf=1&web=1).
