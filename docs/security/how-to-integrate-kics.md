---
sidebar_position: 6
---

# KICS

We scan **infrastructure-as-code** with KICS.

If your repo does not yet include `kics.yml` or this GitHub action, add this action to your repository workflows.

KICS is used as the successor to Checkov.

:::info

Findings with severity `Error` are high findings and must be fixed.

:::

```yaml
name: "KICS"

on:
  push:
    branches: [main, master]
  # pull_request:
  # The branches below must be a subset of the branches above
  # branches: [main, master]
  # paths-ignore:
  #   - "**/*.md"
  #   - "**/*.txt"
  schedule:
    - cron: "28 15 * * 3"

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
      - uses: actions/checkout@v2

      - name: KICS scan
        uses: checkmarx/kics-github-action@master
        with:
          # Scanning directory .
          path: "."
          # Fail on HIGH severity results
          fail_on: high
          # when provided with a directory on output_path
          # it will generate the specified reports file named 'results.{extension}'
          # in this example it will generate:
          # - results-dir/results.json
          # - results-dir/results.sarif
          output_path: kicsResults/
          output_formats: "json,sarif"
          # If you want KICS to ignore the results and return exit status code 0 unless a KICS engine error happens
          # ignore_on_exit: results
          # GITHUB_TOKEN enables this github action to access github API and post comments in a pull request
          # token: ${{ secrets.GITHUB_TOKEN }}
          # enable_comments: true

      # Upload findings to GitHub Advanced Security Dashboard
      - name: Upload SARIF file for GitHub Advanced Security Dashboard
        if: always()
        uses: github/codeql-action/upload-sarif@v1
        with:
          sarif_file: kicsResults/results.sarif
```
