#!/bin/bash

python manage.py collectstatic
chown -R www-data:www-data /static_root
nginx -g 'daemon off;' -c /app/ops/nginx/pir_static.conf
