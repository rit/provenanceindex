CONTEXT=.

pir-arches-runtime:
	./bin/kapply.py pir-arches-runtime.sh.mako | sh -s

image_static: image_remote
	docker build -f Dockerfile.static --build-arg baseimage=pir_remote:$(PISERVER_VERSION) --rm -t pir_static:$(PISERVER_VERSION) $(CONTEXT)

pir-push-images:
	./bin/kapply.py pir-push-images.sh.mako | sh -s

remove_dangling_docker_images:
	docker images -qa -f "dangling=true" | xargs docker rmi -f
