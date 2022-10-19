---
title: How To Monitor CPU And Memory Usage
---

To get information about e.g. CPU and memory usage, a Grafana dashboard is provided.
You can get to the dashboard via the landingpage(s)

DEV: [https://home.dev.demo.catena-x.net/](https://home.dev.demo.catena-x.net/)

INT: [https://home.int.demo.catena-x.net/](https://home.int.demo.catena-x.net/)

![grafana_welcome](../assets/grafana-1.jpg)

or directly to these urls:

DEV: [https://grafana.dev.demo.catena-x.net/](https://grafana.dev.demo.catena-x.net/)

INT: [https://grafana.int.demo.catena-x.net/](https://grafana.int.demo.catena-x.net/)

## Login to Grafana

![grafana_welcome](../assets/grafana-welcome-image.jpg)

Login via GitHub

if you do this the first time the authorization must be given

![grafana_authorize_github](../assets/grafana-authorize-github.jpg)

the Grafana start page opens without any dashboard

![grafana_dashboard_empty](../assets/grafana-dashboard-empty.jpg)

## Setting up a predefined dashboard

Go to Dashboards > Browse

![grafana_dashboard_browse](../assets/grafana-dashboard-browse.jpg)

all available dashboards are listed, but this might be the most interesting for you:  
_Kubernetes/Compute Resources/Namespace (Pods)_  
to check CPU usage, memory usage and a few things more

![grafana_create_dashboard](../assets/grafana-create-dashboards.jpg)
