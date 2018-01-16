"""
Django settings for piserver project.
"""

import os
import arches
import inspect

try:
    from arches.settings import *
except ImportError:
    pass
    # TODO raise error and exit early

APP_ROOT = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
STATICFILES_DIRS = (os.path.join(APP_ROOT, 'media'),) + STATICFILES_DIRS

DATATYPE_LOCATIONS.append('piserver.datatypes')
FUNCTION_LOCATIONS.append('piserver.functions')
TEMPLATES[0]['DIRS'].append(os.path.join(APP_ROOT, 'functions', 'templates'))
TEMPLATES[0]['DIRS'].append(os.path.join(APP_ROOT, 'widgets', 'templates'))
TEMPLATES[0]['DIRS'].insert(0, os.path.join(APP_ROOT, 'templates'))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1*bjropa@6%d5qb($o$&4!-u&savi2azi_dx^+i4si$2yt+m@b'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ROOT_URLCONF = 'piserver.urls'

SYSTEM_SETTINGS_LOCAL_PATH = os.path.join(APP_ROOT, 'system_settings', 'System_Settings.json')
WSGI_APPLICATION = 'piserver.wsgi.application'
STATIC_ROOT = '/var/www/media'

RESOURCE_IMPORT_LOG = os.path.join(APP_ROOT, 'logs', 'resource_import.log')

LOGGING = {   'disable_existing_loggers': False,
    'handlers': {   'file': {   'class': 'logging.FileHandler',
                                'filename': os.path.join(APP_ROOT, 'arches.log'),
                                'level': 'DEBUG'}},
    'loggers': {   'arches': {   'handlers': [   'file'],
                                 'level': 'DEBUG',
                                 'propagate': True}},
    'version': 1}

# Absolute filesystem path to the directory that will hold user-uploaded files.

MEDIA_ROOT =  os.path.join(APP_ROOT)

TILE_CACHE_CONFIG = {
    "name": "Disk",
    "path": os.path.join(APP_ROOT, 'tileserver', 'cache')

    # to reconfigure to use S3 (recommended for production), use the following
    # template:

    # "name": "S3",
    # "bucket": "<bucket name>",
    # "access": "<access key>",
    # "secret": "<secret key>"
}

# NOTE: Extracted from Rob's settings.py
# TODO: Should theses be set in the arches settings.py upstream?
# ONTOLOGIES LISTED HERE WILL NOT BE PREFIXED WITH ANY XMLNS IDENTIFIER IN THE UI
CRM_ONTOLOGIES = [
    'http://www.cidoc-crm.org/cidoc-crm/'
]
VECTOR_TILE_SIMPLIFICATION = 0.3

try:
    from settings_local import *
except ImportError:
    pass
