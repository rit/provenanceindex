pixel_image:
	./bin/kapply.py pixel-assets.sh.mako | sh -s

pixel_push_images_to_gcr:
	./bin/kapply.py pixel-push-images.sh.mako | sh -s

webpack_build:
	npm run build

deploy: webpack_build pixel_image pixel_push_images_to_gcr
	./apply.sh k8s/pixel-assets.yaml.mako

include localize.mk
