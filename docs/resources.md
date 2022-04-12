---
sidebar_position: 4
---

# Things to request

We provide a standard set of resources you can request. 
Please create a ticket within our Jira with this template and fill it out based on the information from the specific resource you want.


## User invitation to the catenax-ng GitHub organization

If you need access to repositories inside the catenax-ng organization or you want to use ArgoCD for deploying an application
on one of the demonstrator environments, you need to request an invitation to the catenax-ng GitHub organization.

You can issue this request via [this Jira template](https://jira.catena-x.net/secure/CreateIssueDetails!init.jspa?pid=10212&issuetype=10401&components=10401&priority=3&summary=GitHub%3A%20Invite%20member&description=%0AGitHub%20user%3A%20_your_user_%0AVouching%20person%3A%20_your_PO_).

Once you are part of the organization, you can be invited to teams by maintainers of the different product teams.
If there is no team inside the organization for your product yet, you can request that too.


## GitHub team in catenax-ng

GitHub teams are used to grand multiple user access to the same resources. Teams are also used to grand access
to projects in ArgoCD and secrets in Vault. Usually each Catena-X product team will have one team in the catenax-ng GitHub organization.

You can issue this request via [this Jira template](https://jira.catena-x.net/secure/CreateIssueDetails!init.jspa?pid=10212&issuetype=10401&components=10401&priority=3&summary=GitHub%3A%20New%20Team&description=%0AProduct%20team%20name%3A%20_your_product_team_name_%0AGitHub%20users%20to%20invite%3A%20%0A%20%20-%20_github_user_account_).

The initially invited people will be granted maintainer access to the team. Every additional team member can then be invited by 
one of the maintainers.


## GitHub repository in catenax-ng

If you need to collaborate on source-code, you can request a repository in the catenax-ng GitHub organization.
You can request as many repositories as you need for your team.
We offer these repositories during the transition phase from the catenax oganization to proper open-source repositories
in the eclipse foundation. After moving your repositories to eclipse foundation, you can still use catenax-ng for deployment 
specific configuration of the demonstrator environments.

To request a new repository, please use [this Jira template](https://jira.catena-x.net/secure/CreateIssueDetails!init.jspa?pid=10212&issuetype=10401&components=10401&priority=3&summary=GitHub%3A%20New%20repository&description=%0Arepository%20name%3A%20product-_your_product_name_%0AGitHub%20team%20to%20grant%20access%3A%20%0A-%20_github_team_name_).
  
If you need additional help or advice on how to structure your repository after the transition from catenax, just reach out to us on the [CoP Channel](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380).


## General consulting requests

We are happy to help you out on several topics regarding DevSecOps. The following sections describe some of the most common
cases. In any case, you need help, feel free to get in contact with us through the [CoP Channel](https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380).


### Onboarding to Catena-X demonstrator environments (ArgoCD, Vault, etc.)

If you are not yet familiar with the setup of our demonstrator environments or the tools running on it, we will guide you
through the onboarding in a hands-on session. Just get in contact with us, and we will schedule this meeting.


### Setting up helm charts for your application

We highly encourage you to create a helm chart for your application. This will make it easy for you to deploy your application
to the demonstrator environments and will also help other teams, that depend on your application to integrate against your app.

We can help you to create the helm chart, but before you get in contact with us, also check out the existing guide [here](kubernetes-basics/helm.md).