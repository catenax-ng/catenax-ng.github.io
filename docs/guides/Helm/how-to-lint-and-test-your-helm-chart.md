---
title: How to lint and test your helm chart
---

This how-to will show you some options, how you can improve the quality of your helm chart by linting and testing
it in a GitHub workflow.

## GitHub workflow

The GitHub workflow in this section is a good option to run checks on pull requests when there are modifications in the __charts__ directory.
It will lint your Helm chart and execute helm test to validate your installation on a kind cluster, that will be
created on demand on the GitHub runner.

You can use the following workflow definition as a starting point:

```yaml
name: Lint and Test Charts

# Run chart linting and tests on each pull request
on: 
  pull_request:
    paths:
      - 'charts/**'

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
        uses: helm/chart-testing-action@v2.3.1

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
        uses: helm/kind-action@v1.4.0
        if: steps.list-changed.outputs.changed == 'true'

      # install the chart to the kind cluster and run helm test
      # define charts to test with the --charts parameter
      - name: Run chart-testing (install)
        run: ct install --charts charts/cxcore --config charts/chart-testing-config.yaml
        if: steps.list-changed.outputs.changed == 'true'

```

:::caution
Step ___Run chart-testing (lint)___ and ___Run chart-testing (install)___ uses a config file that needs to be modified for every dependency repository url that is specified in the _Chart.yaml_ file! A  ___chart-repos___ section has to be added to the config. Example:

- In Chart.yaml there are bitnami and runix dependecies specified:

```yaml
dependencies:
  - condition: postgresql.enabled
    name: postgresql
    repository: https://charts.bitnami.com/bitnami
    version: 11.x.x
  - condition: pgadmin4.enabled
    name: pgadmin4
    repository: https://helm.runix.net
    version: 1.11.x
```

- Then the __chart-testing-config.yaml__ file needs a section for bitnami and runix repo urls:

```yaml
chart-repos:
  - bitnami=https://charts.bitnami.com/bitnami
  - runix=https://helm.runix.net
```

:::

You also need to adapt is the list of charts to test in the final `ct install` step.

As you might have noticed, the `ct lint` and `ct install` steps are also using a configuration file specified by a
`--config` parameter. Currently, we recommend using the chart-testing defaults. The only settings you might want to
disable is the maintainer check while linting the chart.
This can be achieved with the following setting in the configuration file:

```yaml
# charts/chart-testing-config.yaml
validate-maintainers: false
```

## What is helm test

The above described workflow described, how you can lint your helm chart and how to run `helm test` in a GitHub workflow.
This section will focus on `helm test` itself and how you can use it to validate your Helm chart installation process.
You can also consult the [official documentation](https://helm.sh/docs/topics/chart_tests/) on this topic.

The following listing shows an example helm test from our
[k8s-helm-example](https://github.com/catenax-ng/k8s-helm-example/blob/main/charts/k8s-helm-example) chart.

```yaml
# https://github.com/catenax-ng/k8s-helm-example/blob/main/charts/k8s-helm-example/templates/tests/test-service-connection.yaml
apiVersion: v1
kind: Pod
metadata:
  name: "{{ include "k8s-helm-example.fullname" . }}-test-connection"
  labels:
    {{- include "k8s-helm-example.labels" . | nindent 4 }}
  annotations:
    "helm.sh/hook": test
spec:
  containers:
    - name: wget
      image: busybox
      command: ['wget']
      args: ['{{ include "k8s-helm-example.fullname" . }}:{{ .Values.service.port }}']
  restartPolicy: Never
```

As you can see, a helm tests is a regular kubernetes resource definition. The important part in this definition
is the annotation `"helm.sh/hook": test`. This specifies, that the pod will be executed, when using the helm test
command.

The example above will run a basic wget call to the kubernetes service and will succeed, if the service is reachable
and fail, if it isn't.
