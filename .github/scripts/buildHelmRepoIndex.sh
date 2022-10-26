#!/usr/bin/env sh

###############################################################################
# Copyright (c) 2021,2022 Carsten Lenz, Mercedes-Benz Tech Innovation GmbH
# Copyright (c) 2021,2022 Contributors to the Eclipse Foundation
#
# See the NOTICE file(s) distributed with this work for additional
# information regarding copyright ownership.
#
# This program and the accompanying materials are made available under the
# terms of the Apache License, Version 2.0 which is available at
# https://www.apache.org/licenses/LICENSE-2.0.
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
#
# SPDX-License-Identifier: Apache-2.0
###############################################################################

if [ $2 == "dev" ]; then
HELM_REPO_BASEDIR="static/charts/dev"
else
HELM_REPO_BASEDIR="static/charts/stable"
fi

echo $HELM_REPO_BASEDIR

# extract location, release and chart name from input $1
release_location=$(curl -s https://api.github.com/repos/"$1"/releases/latest | grep "browser_download_url" | awk '{print $2}' | sed 's/"//g')
release_name=$(basename "$release_location")
chart_name=$(echo "$release_name" | sed 's/[0-9.]//g' | sed 's/-tgz$//')

# Create chart directory if non existent
if [ ! -d "$HELM_REPO_BASEDIR/$chart_name" ]; then
mkdir -p "$HELM_REPO_BASEDIR/$chart_name"
fi

if [ ! -f "$HELM_REPO_BASEDIR/$chart_name/$release_name" ]; then
# download released helm chart
curl -L -o "$HELM_REPO_BASEDIR/$chart_name/$release_name" "$release_location"

# create/update helm repo index
helm repo index --merge "$HELM_REPO_BASEDIR/dev/index.yaml" "$HELM_REPO_BASEDIR"
fi
