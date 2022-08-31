---
title: How lint and test your helm chart
---

This how-to will show you some options, how you can improve the quality of your helm chart by linting and testing
it in a GitHub workflow.

There is also guidance on how you can run the checks on your local machine, so that you are able to lint and test your
chart, before pushing it the remote repository.

## GitHub workflow

The GitHub workflow in this section is a good option to run checks on pull requests.
It will lint your Helm chart and execute helm test to validate your installation on a kind cluster, that will be
created on demand on the GitHub runner.

You can use the following workflow definition as a starting point:

```yaml
name: Lint and Test Charts

# Run chart linting and tests on each pull request
on: pull_request

jobs:
  lint-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0

      - name: Set up Helm
        uses: azure/setup-helm@v1
        with:
          version: v3.9.3

      # Setup python as a prerequisite for chart linting 
      - uses: actions/setup-python@v2
        with:
          python-version: 3.7

      - name: Set up chart-testing
        uses: helm/chart-testing-action@v2.2.1

      - name: Run chart-testing (list-changed)
        id: list-changed
        run: |
          changed=$(ct list-changed --target-branch ${{ github.event.repository.default_branch }})
          if [[ -n "$changed" ]]; then
            echo "::set-output name=changed::true"
          fi

      # run chart linting 
      - name: Run chart-testing (lint)
        run: ct lint --target-branch ${{ github.event.repository.default_branch }} --config charts/chart-testing-config.yaml

      # Preparing a kind cluster to install and test charts on
      - name: Create kind cluster
        uses: helm/kind-action@v1.2.0
        if: steps.list-changed.outputs.changed == 'true'

      # install the chart to the kind cluster and run helm test
      # define charts to test with the --charts parameter
      - name: Run chart-testing (install)
        run: ct install --charts charts/k8s-helm-example --config charts/chart-testing-config.yaml
```

You can use this workflow 'as-is'. THe only thiing you need to adapt is the list of charts to test in the final
`ct install` step.

As you might have noticed, the `ct lint` and `ct install` steps are also using a configuration file specified by a
`--config` parameter. Currently, we recommend using the chart-testing defaults. The only settings you might want to
disable is the maintainer check while linting the chart.
This can be achieved with the following setting in the configuration file:

```yaml
# charts/chart-testing-config.yaml
validate-maintainers: false
```
