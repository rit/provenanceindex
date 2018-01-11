pir_local_docker_image:
	docker build -f local.dockerfile --rm -t pir_local:dev .

pir_docker_image:
	docker build -f remote.dockerfile --rm -t pir:$(PISERVER_VERSION) .

remove_dangling_docker_images:
	docker images -qa -f "dangling=true" | xargs docker rmi -f
