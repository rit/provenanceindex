#!/bin/bash

USER=www-data

# Arches needs write permission to log
chown -R $USER /app/piserver/piserver

mkdir /app/log
mkdir /app/shared
chown -R $USER /app/log
chown -R $USER /app/shared

cd /app/piserver
uwsgi --uid www-data --ini pir_uwsgi.ini
nginx -g 'daemon off;' -c /app/ops/nginx/pir_uwsgi.conf
