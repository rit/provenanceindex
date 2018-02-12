#!/bin/bash

# Default to qa
FLAVOR=${FLAVOR:-qa}

gcloud -q compute disks create --size=256GB arches-esdata-$FLAVOR
gcloud -q compute disks create --size=256GB arches-pgdata-$FLAVOR
gcloud -q compute disks create --size=256GB arches-pglog-$FLAVOR
