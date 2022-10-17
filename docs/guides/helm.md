---
sidebar_position: 2
---

# Helm chart

General documentation see [helm.sh](https://helm.sh/).

Catena-X uses kubernetes as a platform abstraction which requires kubernetes resources and container images.

In a cloud native environment, to be able to deploy software, you need two main components:

- container image -> what to run
- kubernetes resources -> how to run it

To have more flexibility on how to bundle your kubernetes resources, we decided on helm. It provides basic templating, feature flags and separated values files for easy configuration.

Helm comes with features which make it easy to use your helm chart from others:

- values.yaml file which enables a central way to configure parameters of your setup
- helm dependencies: If you need a database or any other service, you can pull in helm charts which provide that service and make your application runable independend from external dependencies. This also makes e2e testing much easier

## Learning resources

- [https://helm.sh/docs/chart_best_practices/](https://helm.sh/docs/chart_best_practices/)
- [YouTube](https://www.youtube.com/results?search_query=helm)
- Google: "helm best practices"

## Best practices

This section is a catena-x specific collection of easy to follow "best practices", requirements for working together or asked questions regarding helm and how to solve them.

Feel free to contribute.

### Example folder/project structure

```
/project-x/
/project-x/chart/<HERE IS YOUR HELM CHART>
/project-x/chart/README.md This README.md file uses [github markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and describes your helm chart (how to use it, what it is for, what features it has).
```

### Provide external dependencies as optional helm dependencies

If you have external dependencies like a database, you should build your helm chart so that you can configure an internal and external database. Internal would be to create a dependency to a database helm chart. External would be a way to configure something like host, username and password.

### Set memory request and limit to the same value

Memory is a kubernetes resource which can't be compressed or manipulated. If you need to consume memory amount of x but your limit is below this, kubernetes will kill your pod. If you set the request to a small value and limit to a very high value, the amount of memory you will get guaranteed is only what you request. It can easily be the case, that you are not able to request more after.

This also leads to pods which get killed due to memory consumption. Only in case of request = limit you know how much memory you can consume without being killed.

Swap support in kubernetes might come in 1.24, but this is only an option in the future.

### Set cpu request to sane default and set limit to a higher value

CPU is a compressable resource. This means if you request 500m CPU, you get this, but if you need more, your pod is not getting killed, it will just not get more CPU resources if not more is availab.e

Therefore the current suggestion is to set the request value for CPU to a value which the service normally uses under load. The limit of CPU should be set 2 or 3 times of the request. If your compute node, were your pod is running, is not consuming much CPU, it can be beneficial for you to use the idle resources of the node.

### High availability

Try to have at least 2 replicas running of your components. This guarantees that your application is still available when an upgrade of the underlying cluster is ongoing and for general availability.

Be aware that your application needs to be able to support multiply instances. The biggest issue here is often how sessions are handled. If you depend on sessions, you either need to provide an additional service like redis to exchange your sessions across backends or you need to configure your kubernetes resources with proper sticky session handling.

#### Affinity / Anti-affinity

If you run the same pod multiply times, it can be that the pods are running on the same node. This defies high availaibilty. You should set a sane default for [anti-affinity](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/). This tells kubernetes that you don't want to have the same pod on the same node.

### Configuration for multiply environments

The current approach to manifest environment specific values is to provide a values.yaml with sane default values and overriding only relevant portions in a values-ENV.yaml file. Then referencing both values\*.yaml files in argocd.

If you don't want to have catena-x environment specific 'setting files/value-\* files' in your repository, you can do a [release](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) build and remove all files you don't want to officially release.

TODO: Add screenshot from argocd and from argocd application code.

### Init containers and application setup

To preconfigure an application, you have different options:

1. Your application itself is able to configure itself. It checks on start if it should initialize itself (easiest way to control this behaviour is an Environment variable.
1. You create an [init container](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/) and use that to initially talk to the application. If the application supports an API to configure it, you should try that first. Otherwise your init controller also can put config files in the expected location or call a shell script to do things
