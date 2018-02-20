<%

assert FLAVOR, "Please set FLAVOR environment variable"

PIR_PD_ARCHES_POSTGRES_DATA = "pir-pd-arches-postgres-data"
PIR_PD_ARCHES_POSTGRES_LOGS = "pir-pd-arches-postgres-logs"
PIR_PD_ARCHES_ES_DATA = "pir-pd-arches-es-data"

%>

gcloud -q compute disks create --size=256GB ${PIR_PD_ARCHES_POSTGRES_DATA}-${FLAVOR}
gcloud -q compute disks create --size=256GB ${PIR_PD_ARCHES_POSTGRES_LOGS}-${FLAVOR}
gcloud -q compute disks create --size=256GB ${PIR_PD_ARCHES_ES_DATA}-${FLAVOR}
