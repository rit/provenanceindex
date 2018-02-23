<%

assert FLAVOR, "Please set FLAVOR environment variable"

%>

gcloud -q compute disks create --size=128GB ${PIR_PD_ARCHES_POSTGRES_DATA}-${FLAVOR}
gcloud -q compute disks create --size=128GB ${PIR_PD_ARCHES_POSTGRES_LOGS}-${FLAVOR}
gcloud -q compute disks create --size=128GB ${PIR_PD_ARCHES_ES_DATA}-${FLAVOR}
