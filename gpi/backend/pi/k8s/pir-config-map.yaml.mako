%for flavor in FLAVORS.split():
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: pir-arches-runtime-configmap
  namespace: pir-arches-${flavor}
data:
  DJANGO_DEBUG: "True"

  # IPs of the Node in the cluster
  GKE_HEALTH_CHECK_HOSTS: "10.138.0.2 10.138.0.3 10.138.0.4"

  DOMAIN_NAMES: "localhost .gritech.team .getty.edu"
  ELASTICSEARCH_PREFIX: pir
  ESHOST: pires
  ESPORT: "9200"
  PGDBNAME: pir_arches_db
  PGHOST: pirpg
  PGPASSWORD: postgres
  PGPORT: "5432"
  PGUSERNAME: postgres
  TZ: UTC
% endfor
