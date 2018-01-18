CONTEXT=.
FLAVORS ?= local remote

pir_local_docker_image: dockerfile
	docker build -f build/local.dockerfile --rm -t pir_local:dev $(CONTEXT)

pir_remote_docker_image: dockerfile
	docker build -f build/remote.dockerfile --rm -t pir_remote:$(PISERVER_VERSION) $(CONTEXT)

dockerfile: Dockerfile.j2
	@@$(foreach FLAVOR, $(FLAVORS), \
	 jinja2 \
	   -D flavor='$(FLAVOR)' \
	   Dockerfile.j2 > build/$(FLAVOR).dockerfile; \
	) \

remove_dangling_docker_images:
	docker images -qa -f "dangling=true" | xargs docker rmi -f
