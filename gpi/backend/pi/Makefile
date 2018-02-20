CONTEXT=.

pir-arches-runtime:
	./bin/kapply.py pir-arches-runtime.sh.mako | sh -s

pir-arches-assets: pir-arches-runtime
	./bin/kapply.py pir-arches-assets.sh.mako | sh -s

pir-push-images: pir-arches-assets
	./bin/kapply.py pir-push-images.sh.mako | sh -s

remove_dangling_docker_images:
	docker images -qa -f "dangling=true" | xargs docker rmi -f
