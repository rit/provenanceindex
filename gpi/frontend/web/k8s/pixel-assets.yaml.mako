---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: pixel-assets
  name: pixel-assets
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: pixel-assets
    spec:
      containers:
      - image: us.gcr.io/${GCP_PROJECT_ID_PIR}/${PIXEL_RUNTIME_IMAGE}:${PIXEL_RUNTIME_VERSION}
        name: pixel-assets
        ports:
        - containerPort: 9000
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: pixel-assets
  name: pixel-assets
spec:
  type: NodePort
  ports:
  - name: "pixel-http"
    port: 80
    targetPort: 9000
  selector:
    app: pixel-assets
