---
title: How to integrate Veracode to your JIRA project
---

## About the Veracode JIRA plugin

Veracode provides a [plugin](https://docs.veracode.com/r/4ULk2mjyYUeYb8xd_2nDVw/yoWnZ5~NZchnoLXNqtavrQ) for JIRA, which
automatically creates a JIRA ticket for security flaws which Veracode identifies in your application.

## How can I start using this plugin?

The JIRA plugin is managed by
the [Catena-X Security Team](https://confluence.catena-x.net/display/cxsecurity/Who-is-who+Security). In order to use
the plugin you must meet the following requirements:

### Prerequisites

1. You've set up your application in Veracode.
2. You've set up a project in JIRA, where the tickets for the security flaw will be created.

### Remarks

1. Don't change the Veracode plugin settings, since this will affect other projects.
2. Only findings that are breaking our Code Scanning Policy (severity high and very high) will be imported.

### Steps

1. Contact **dl_CoP_IT_Security@catena-x.net** to request the activation of the automatic
   imports of the Veracode findings into your Jira project.
2. Please provide the **Project Name** in Jira and **optionally a Team member** for the issues assignment. This
   team member will be automatically assigned to all imported findings.
3. The Security Team will then setup the findings import.

### Import Schedule

The findings are automatically imported from Veracode to Jira **every hour**.

## Finding types

Different finding types will be imported as different Backlogs:

1. **Jira Type _Bug_**: A ticket of type _Bug_ is created for each flaw found in a Scan. Contains CWE ID as label.

2. **Jira Type _Story_**: A ticket of type _story_ is created for each Software component with vulnerabilities (High or
   Critical) from the SCA.

3. **Jira Type _Subtask_**: A _subtask_ is created for each CVE of a Software component. It is created under the story
   of the respective component which contains this CVE. The CVE and/or CWE number is set as a label.
