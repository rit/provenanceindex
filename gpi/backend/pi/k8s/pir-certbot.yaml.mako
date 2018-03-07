---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: certbot
  name: certbot
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: certbot
    spec:
      containers:
      - image: certbot/certbot
        name: certbot
        command: ['sleep', '8008000']
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: certbot
  name: certbot
spec:
  ports:
  - name: "http"
    port: 80
    targetPort: 80
  selector:
    app: certbot
