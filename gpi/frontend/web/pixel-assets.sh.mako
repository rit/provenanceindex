<%

baseimage_name = "pixel-assets"
basename = "pixel-assets.dockerfile"
docker_context = "."

%>


./bin/kapply.py ${basename}.mako > k8s/build/${basename}
docker build -f k8s/build/${basename} --rm -t ${baseimage_name}:${PIXEL_RUNTIME_VERSION} ${docker_context}
