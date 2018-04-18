<%

baseimage_name = "pixel-assets"
basename = "pixel-assets.dockerfile"
docker_context = "."

%>


./bin/kapply.py ${basename}.mako > tmp/${basename}
docker build -f tmp/${basename} --rm -t ${baseimage_name}:${PIXEL_RUNTIME_VERSION} ${docker_context}
