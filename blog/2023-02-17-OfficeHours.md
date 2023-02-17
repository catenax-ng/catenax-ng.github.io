---
slug: Office Hours 2023-02-17
title: Office Hours 2023-02-17
authors: DevSecOps
tags: [news, officehour]
---

## General updates / information

### DevSecOps

- We are working on a new process to introduce new and updating existing release guidelines
  - We'll have a dedicated 'draft' section
  - Should encourage discussions in the tractus-x community (if topic is discussable and not defined by law, etx.)
  - New drafts will be announced via usual channels (Office Hours, dev mailing list, ...)
- __Clarification__: For Release 3, there are no plans to create an overall umbrella chart. So no action required from
  your side, as long as you fulfilled the regular release guidelines

### Security

- Penetration testing ongoing. IRS done, EDC up next
- __Reminder__: Please run the software composition analysis (SCA) provided by Veracode for your products.
  If you need support, contact the security team

### FOSS

- __Reminder__: Eclipse Tractus-X Committer meetings upcoming. Committers should join at least one of the meetings.
  Ideally we have a meeting with every one of the committers joining, so we can talk about some common rules that we want
  to follow. We can also align on a strategy for recurring tasks like Dash IP checks.
- Initial proposal for a two-step approach on [reviewing PRs](https://eclipse-tractusx.github.io/docs/oss/code-reviews/)
  to tractus-x available. Especially interesting for products, that do not have a committer in their team.

## Open discussions

- Bitnami Charts have a retention policy of 6 months. After that, the Chart might become unavailable. Could also be an
  issue for other chart collections
  - Can become an issue, when we have to do fixes to old versions, and a used dependency is then unavailable
  - Released charts are not affected, since they include the dependencies in the artifact
  - For Bitnami, there is an [archive](https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami/index.yaml)
    available
- General discussion about daily workflows for contributions and forks
  - Observation: A lot of PRs do contain multiple features, since PRs have been merged and reviewed on forks in catenax-ng
    - Transparency in eclipse-tractusx missing, when PR/issue comments are exclusivly in catenax-ng
    - Does make it harder for committers not part of the team to review contributions
  - Security scanning and Sonar analysis not possible on PR basis
    - Veracode and manual sonar runs need access to secrets defined in the eclipse-tractusx org/repos
    - PRs originating from other orgs (like catenax-ng) do not have access to these secrets (security feature)
    - Suggestions: release candidate branches or dev branch, that PRs should be integrated to. Scans can then work on that branch
  - Process for third-party IP issue scans on dependencies, that get updated via contribution needs clarification/alignment

## Session recording

You can find the
recording [here](https://bcgcatenax.sharepoint.com/sites/CommunitiesofPractises/Shared%20Documents/Forms/AllItems.aspx?isAscending=false&sortField=Modified&id=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings%2FCXDevSecOps%20Office%20Hours%2D20230217%5F130423%2DMeeting%20Recording%2Emp4&viewid=a90239a2%2D4eb1%2D446e%2D9246%2Daedc18ebdc75&parent=%2Fsites%2FCommunitiesofPractises%2FShared%20Documents%2FCX%2DCoP%20DevSecOps%2FOffice%5FHours%5FRegular%5FRecordings).
