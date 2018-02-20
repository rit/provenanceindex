<%

baseimage_name = "pir-arches-assets"
basename = "pir-arches-assets.dockerfile"
docker_context = "."

%>


./bin/kapply.py ${basename}.mako > build/${basename}
docker build -f build/${basename} --rm -t ${baseimage_name}:${PIR_ARCHES_RUNTIME_VERSION} ${docker_context}
