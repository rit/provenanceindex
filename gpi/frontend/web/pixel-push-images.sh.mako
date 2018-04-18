<%
images = [
  PIXEL_RUNTIME_IMAGE,
]
%>

% for image in images:
docker tag ${image}:${PIXEL_RUNTIME_VERSION} us.gcr.io/${GCP_PROJECT_ID_PIR}/${image}:${PIXEL_RUNTIME_VERSION}
gcloud docker -- push us.gcr.io/${GCP_PROJECT_ID_PIR}/${image}:${PIXEL_RUNTIME_VERSION}
% endfor
