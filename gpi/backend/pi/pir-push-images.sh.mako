<%
images = [
  PIR_ARCHES_RUNTIME_IMAGE,
  PIR_ARCHES_ASSETS_IMAGE
]
%>

% for image in images:
docker tag ${image}:${PIR_ARCHES_RUNTIME_VERSION} us.gcr.io/${GCP_PROJECT_ID_PIR}/${image}:${PIR_ARCHES_RUNTIME_VERSION}
gcloud docker -- push us.gcr.io/${GCP_PROJECT_ID_PIR}/${image}:${PIR_ARCHES_RUNTIME_VERSION}
% endfor
