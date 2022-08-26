---
slug: Office Hours 2022-8-26
title: Office Hours 2022-8-26
authors: DevSecOps
tags: [news, officehour]
---

## Reminders

__DevSecOps:__

- Please do not use the old catena-x GitHub organization anymore. Tooling like sonarcloud and security checks will only be provided for catenax-ng

__Security:__

- Get in contact with the security experts for a timeline regarding DAST. This is __MANDATORY__ for a proper release 2.0
- There are still open PRs to exchange checkov with KICS. KICS is __MANDATORY__ for security checks regarding release 2.0

__FOSS:__

- Get in contact with angelika regarding the initial contribution to the eclipse foundation. This is __MANDATORY__ to be part of Release 2.0

## General updates

The following updates were presented:

- The cosign (signing docker images) step in k8s-helm-example was outdated. New version published and further investigations will follow
- In the following days, we will provide examples on how you can test and lint your helm charts in a GitHub workflow

## Open discussions

The following topics where discussed in the open session:

- Is there already guidance on day-to-day working model, once our code passed the initial contribution check to the eclipse foundation?
  - No official and complete guidance yet
  - Start with the initial contribution process as soon as possible
  - During the e2e test phase for release two, we will most likely have repositories exist in catenax-ng and eclipse-tractusx in parallel
  - Once the initial contribution is done, the DevSecOps team will work on integrating the checks from catenax-ng (i.e. VeraCode) to eclipse-tractusx aswell
  - After that, you can use the eclipse-tractusx repository as leading one and only catenax-ng for consoritia environment specific deployment configuration
- Are there additional best-practices for Helm releases?
  - External dependencies that are copied to your own repo -> Discouraged due to FOSS licensing concerns. Get in touch, if you need further details and guidance
  - Versioning
    - Try to keep your git tags, docker image tags and helm chart version tag in sync
    - Release your chart together with your application to make that easier
    - Changes in your application should also lead to changes in your helm chart. At least the image tag in the values.yaml as default config should change
