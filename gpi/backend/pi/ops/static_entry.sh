#!/bin/bash

nginx -g 'daemon off;' -c /app/ops/nginx/pir_static.conf
