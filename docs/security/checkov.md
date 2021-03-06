---
sidebar_position: 3
---

# Checkov

We scan **infrastructure-as-code** with Checkov.

Add the following GitHub action _checkov.yml_ to your repository workflows.

Depending on where the infrastructure-as-code is located, the path to your infrastructure-as-code can be specified under `directory` - this is optional.

:::info

Low severity checks can be skipped with `skip_check`.

![checkov-id.png](assets/checkov-id.png)

:::

```yaml
name: "Checkov"

on:
  push:
    branches: [main, master]
  # pull_request:
  # The branches below must be a subset of the branches above
  # branches: [ main, master ]
  # paths-ignore:
  #   - "**/*.md"
  #   - "**/*.txt"
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    name: checkov-action
    steps:
      - name: Checkout repo
        uses: actions/checkout@master

      - name: Run Checkov action
        id: checkov
        uses: bridgecrewio/checkov-action@master
        with:
          directory: . # optional: specify path to your infrastructure-as-code
          quiet: true # optional: display only failed checks
          soft_fail: false # optional: do not return an error code if there are failed checks
          framework: all # optional: run only on a specific infrastructure {cloudformation,terraform,kubernetes,all}
          output_format: sarif # optional: the output format, one of: cli, json, junitxml, github_failed_only, or sarif. Default: sarif
          download_external_modules: true # optional: download external terraform modules from public git repositories and terraform registry
          log_level: WARNING # optional: set log level. Default WARNING
          skip_check: CKV_DOCKER_2,CKV_K8S_8,CKV_SECRET_6,CKV_K8S_21,CKV_K8S_37,CKV_K8S_28,CKV_K8S_9,CKV_K8S_43,CKV_K8S_15,CKV_K8S_35,CKV_K8S_38,CKV_K8S_22,CKV_K8S_40,CKV_K8S_31 # optional: add low severity checkov rule IDs

      - name: Upload Checkov scan results to GitHub Security tab
        uses: github/codeql-action/upload-sarif@v1
        if: always()
        with:
          sarif_file: "results.sarif"
```
