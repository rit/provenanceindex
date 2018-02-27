#!/bin/bash

USER=www-data
NGINX_CONF=/app/ops/nginx/pir_uwsgi.conf

# Arches needs write permission to log
chown -R $USER /app/piserver/piserver

mkdir /app/log
mkdir /app/shared
chown -R $USER /app/log
chown -R $USER /app/shared

cd /app/piserver
uwsgi --uid www-data --ini pir_uwsgi.ini
/app/bin/kapply.py < $NGINX_CONF.template > $NGINX_CONF
nginx -g 'daemon off;' -c $NGINX_CONF
