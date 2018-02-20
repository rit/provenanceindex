<%
with open('apt_packages.txt') as lines:
  apt_packages = ' '.join([line.strip() for line in lines])

baseimage_name = "pir-arches-runtime"
basename = "pir-arches-runtime.dockerfile"
docker_context = "."
image_names = {
  "remote": baseimage_name,
  "local": "{}_local".format(baseimage_name)
}
%>

% for flavor in ['remote', 'local']:
DEPLOYMENT_FLAVOR=${flavor} APT_PACKAGES="${apt_packages}" ./bin/kapply.py ${basename}.mako > build/${basename}.${flavor}
docker build -f build/${basename}.${flavor} --rm -t ${image_names[flavor]}:${PIR_ARCHES_RUNTIME_VERSION} ${docker_context}
% endfor
