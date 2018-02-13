CONTEXT=.
FLAVORS ?= local remote
PIR_IMAGES = pir_remote pir_static
APT_PACKAGES = $(shell ./bin/join.py < apt_packages.txt)

pir-arches-runtime:
	./bin/kapply.py pir-arches-runtime.sh.mako | sh -s

image_local: dockerfile
	docker build -f build/local.dockerfile --rm -t pir_local:$(PISERVER_VERSION) $(CONTEXT)

image_remote: dockerfile
	docker build -f build/remote.dockerfile --rm -t pir_remote:$(PISERVER_VERSION) $(CONTEXT)


image_static: image_remote
	docker build -f Dockerfile.static --build-arg baseimage=pir_remote:$(PISERVER_VERSION) --rm -t pir_static:$(PISERVER_VERSION) $(CONTEXT)

dockerfile: Dockerfile.j2
	@@$(foreach FLAVOR, $(FLAVORS), \
	jinja2 \
		-D flavor='$(FLAVOR)' \
		-D apt_packages='$(APT_PACKAGES)' \
		Dockerfile.j2 > build/$(FLAVOR).dockerfile; \
	)

remove_dangling_docker_images:
	docker images -qa -f "dangling=true" | xargs docker rmi -f

image_push:
	$(foreach IMAGE, $(PIR_IMAGES), \
	docker tag $(IMAGE):$(PISERVER_VERSION) us.gcr.io/$(GCP_PROJECT_ID_PIR)/$(IMAGE):$(PISERVER_VERSION); \
	gcloud docker -- push us.gcr.io/$(GCP_PROJECT_ID_PIR)/$(IMAGE):$(PISERVER_VERSION); \
	)
