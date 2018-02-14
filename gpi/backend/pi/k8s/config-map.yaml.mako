%for flavor in FLAVORS.split():
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: pir-arches-runtime-configmap
  namespace: pir-arches-${flavor}
data:
  DJANGO_DEBUG: "False"
  DOMAIN_NAMES: 0.0.0.0 localhost .gritech.team
  ELASTICSEARCH_PREFIX: pir
  ESHOST: pires
  ESPORT: "9200"
  PGDBNAME: pir_arches_db
  PGHOST: pirpg
  PGPASSWORD: postgres
  PGPORT: "5432"
  PGUSERNAME: postgres
  TZ: UTC
  POSTGRES_PASSWORD: postgres
  PGDATA: /var/lib/postgresql/data/pgdata
% endfor
