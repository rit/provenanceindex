---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: pira
  name: pira
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: pira
    spec:
      containers:
      - image: us.gcr.io/${GCP_PROJECT_ID_PIR}/${PIR_ARCHES_RUNTIME_IMAGE}:${PIR_ARCHES_RUNTIME_VERSION}
        name: pir-arches-runtime
        envFrom:
        - configMapRef:
            name: pir-arches-runtime-configmap
        env:
        - name: DJANGO_SECRET_KEY
          valueFrom:
            secretKeyRef:
              name: pir-arches-secrets
              key: django-secret-key
              optional: yes
        ports:
        - containerPort: 8000
      - image: us.gcr.io/${GCP_PROJECT_ID_PIR}/${PIR_ARCHES_ASSETS_IMAGE}:${PIR_ARCHES_RUNTIME_VERSION}
        name: pir-arches-assets
        ports:
        - containerPort: 9000
      restartPolicy: Always

---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: pira
  name: pira
spec:
  type: LoadBalancer
  ports:
  - name: "http"
    port: 80
    targetPort: 8000
  selector:
    app: pira
status:
  loadBalancer: {}
