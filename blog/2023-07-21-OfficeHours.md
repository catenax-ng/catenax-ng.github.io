---
slug: Office Hours 2023-07-21
title: Office Hours 2023-07-21
authors: DevSecOps
tags: [ news, officehour ]
---

## General updates / information

### DevSecOps

- [Run-dash action](https://github.com/eclipse-tractusx/sig-infra/tree/main/.github/actions/run-dash#run-dash-action) is available. The goal of this action is to run the [Eclipse Dash](https://github.com/eclipse/dash-licenses) tool to generate a temporary DEPENDENCIES file to compare it to the current one. Please see documentation on how to use it, what inputs are needed and what outputs it generates.
- ArgoCD updated to 2.6.13 on all environments (previous version was 2.6.10).
  - Changelogs:
    - [v2.6.11](https://github.com/argoproj/argo-cd/releases/tag/v2.6.11)
    - [v2.6.12](https://github.com/argoproj/argo-cd/releases/tag/v2.6.12)
    - [v2.6.13](https://github.com/argoproj/argo-cd/releases/tag/v2.6.13)

### Security

- Veracode presented a new tool. See further details at the bottom of this post.
- 3rd pentest for product Portal is currently ongoing.
- An alternative is available with dyanmic application secutiry testing. Security team can be contacted to help with using this open source tool called [ZAP provided by OWASP](https://www.zaproxy.org/).

### FOSS

- Old TRG 7.07 is deprecated and split into two new TRGs that are currently in the draft section ([TRG 7.07](https://eclipse-tractusx.github.io/docs/release/trg-0/trg-7-07) and [TRG 7.08](https://eclipse-tractusx.github.io/docs/release/trg-0/trg-7-08)).
- People who create new rooms in the Eclipse Element chat are responsible for it. Please keep it maintained!
- [EclipseCon](https://www.eclipsecon.org/2023) will happen in October.

## Open discussions

- Merging repos (like frontend & backend) into a monorepo requires some work and changes to the folder structure, the workflow files and some FOSS file contents. A recommendation is to create conditional workflows so they don't trigger too often when not necessary.
- There is no minimum number of reviewers required on Pull Requests. It depends on the trust of the reviewer and can be evaluated on every PR.

## Veracode presentation

- [WeAreDevelopers World Congress](https://www.wearedevelopers.com/world-congress) happening in July and Veracode will present in the AI topic.
- [Veracode Fix](https://www.veracode.com/fix) is a tool to analyze code and on security finding an AI generated code suggestion is presented to implement. The customer code is not being shared by others using Fix. Specifiy CVEs and languages get reference patches that can be applied. The model is trained at Veracode and not using external models like GPT 3.5. It helps shortening the development cycle as lots of steps can be skipped when iterating over security issues. Currently Java and C# languages are supported with Javascript and Python support coming shortly. The tool can be used az a CLI or implemented into any workflow. Althouth everybody need to be aware what (AI generated) code can they use with the license of the prject.

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/Shared%20Documents/Forms/AllItems.aspx?OR=Teams%2DHL&CT=1689595535113&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIxNDE1LzIzMDYwNDAxMTc3IiwiSGFzRmVkZXJhdGVkVXNlciI6ZmFsc2V9&isAscending=false&sortField=Modified&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2F20230721%5FDevSecOps%20Business%20Hours%2DRecording%2Emp4&viewid=a90239a2%2D4eb1%2D446e%2D9246%2Daedc18ebdc75&parent=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings).
