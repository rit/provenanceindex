import ast
import os
import sys

from django.core.exceptions import ImproperlyConfigured
from settings import *

def get_env_variable(var_name):
    msg = "Set the %s environment variable"
    try:
        return os.environ[var_name]
    except KeyError:
        error_msg = msg % var_name
        raise ImproperlyConfigured(error_msg)

def get_optional_env_variable(var_name):
    try:
        return os.environ[var_name]
    except KeyError:
        return None

DEBUG = ast.literal_eval(get_env_variable('DJANGO_DEBUG'))

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': get_env_variable('PGDBNAME'),
        'USER': get_env_variable('PGUSERNAME'),
        'PASSWORD': get_env_variable('PGPASSWORD'),
        'HOST': get_env_variable('PGHOST'),
        'PORT': get_env_variable('PGPORT'),
        'POSTGIS_TEMPLATE': 'template_postgis_20',
    }
}

ELASTICSEARCH_HTTP_PORT = get_env_variable('ESPORT')
ELASTICSEARCH_HOSTS = [
    { 'host': get_env_variable('ESHOST'), 'port': ELASTICSEARCH_HTTP_PORT }
]

USER_ELASTICSEARCH_PREFIX = get_optional_env_variable('ELASTICSEARCH_PREFIX')
if USER_ELASTICSEARCH_PREFIX:
    ELASTICSEARCH_PREFIX = USER_ELASTICSEARCH_PREFIX

K8S_POD_IP = get_optional_env_variable('K8S_POD_IP')
GKE_HEALTH_CHECK_HOSTS = get_optional_env_variable('GKE_HEALTH_CHECK_HOSTS')
if not GKE_HEALTH_CHECK_HOSTS:
    GKE_HEALTH_CHECK_HOSTS = ""

ALLOWED_HOSTS = get_env_variable('DOMAIN_NAMES').split() + [K8S_POD_IP] + GKE_HEALTH_CHECK_HOSTS.split()

USE_X_FORWARDED_HOST = True

USER_SECRET_KEY = get_optional_env_variable('DJANGO_SECRET_KEY')
if USER_SECRET_KEY:
    # Make this unique, and don't share it with anybody.
    SECRET_KEY = USER_SECRET_KEY

STATIC_ROOT = '/static_root/media'
