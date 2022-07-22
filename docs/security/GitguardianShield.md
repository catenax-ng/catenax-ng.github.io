---
title: How to use GitguardianShield
---

### About GitGuardianShield

GitGuardianShield is a CLI application that runs in your local environment to detect secrets and block them before they
enter the git repository. Using a hook **pre-commit**/**pre-push** the secret scans can be automated.

### Prerequisites

1. Python and Pip
2. GitGuardian account

### Installation

Execute the following CLI:

1. `pip install ggshield`

:::tip
If this doesn't work, try `pip3 install ggshield`.
:::

### Login

To use GitGuardianshield you need to be authentified by the GitGuardian Server. For this, execute `ggshield auth login`.
This automatically generate an access token.

### Local Scanning

- To scan a file use the **CLI**:  
  `ggshield secret scan path "Name of File"`

- To scan a directory use the **CLI**:  
  `ggshield secret scan path -r .`

- To scan every changes that have been staged in a git repo (pre-commit) use the **CLI**:  
  `ggshield secret scan pre-commit`

- To scan all commits in a git repository use the **CLI**:  
  `ggshield secret scan repo .`

- To ignore the last fund secrets use the **CLI**:  
  `ggshield ignore --last-found`

- To ignore a path add to the **gitguardian.yaml File**:

  ```yaml
  paths-ignore:
  '**/folder-path/**'
  ```

- To ignore selected files add to the **gitguardian.yaml File**:

  ``` yaml
  paths-ignore:
  '**/file-path'
  ```

## Integration

### Prerequisites

Install pre-commit with the **CLI** `pip install pre-commit`.

### Pre-commit

The pre-commit hook checks the commit for secrets and blocks the commit if there are any. The pre-commit hook is easier
to work with since it catches the error as you made it. An internet connection will be required for the commits.

#### Steps

- Create a _pre-commit-config.yaml_ file in your root repo:

  ```yaml
  repos:
    - repo: https://github.com/gitguardian/ggshield
      rev: v1.10.7 (latest version)
      hooks:
        - id: ggshield
          language_version: python3
          stage: [ commit ]
  ```

- Install a githook based on the yaml file with the CLI:  
  `pre-commit install`

### Pre-push

The pre-push checks a group of commits for secrets, and block the push if there are any. The pre-push hook reduces the
amount of scanning but if a secret is detected, you have to rewrite your history.

#### Steps

- Create a _pre-commit-config.yaml_ file in your root repo:

  ```yaml
  repos:
    - repo: https://github.com/gitguardian/ggshield
      rev: v1.10.7 (latest version)
      hooks:
        - id: ggshield-push
          language_version: python3
          stage: [ push ]
  ```

- Install a githook based on the yaml file with the **CLI**:  
`pre-commit install --hook-type pre-push`
