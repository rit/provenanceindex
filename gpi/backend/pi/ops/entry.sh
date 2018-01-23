#!/bin/bash

cd /app/piserver
uwsgi --ini pir_uwsgi.ini
nginx -g 'daemon off;' -c /app/ops/nginx/pir_uwsgi.conf
