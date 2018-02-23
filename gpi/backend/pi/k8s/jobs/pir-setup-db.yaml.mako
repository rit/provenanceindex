---
apiVersion: batch/v1
kind: Job
metadata:
  name: pir-setup-db
spec:
  template:
    spec:
      restartPolicy: Never
      containers:
      - image: us.gcr.io/${GCP_PROJECT_ID_PIR}/${PIR_ARCHES_RUNTIME_IMAGE}:${PIR_ARCHES_RUNTIME_VERSION}
        name: pir-setup-db
        command: ["python", "manage.py", "packages", "-o", "setup_db"]
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
  backoffLimit: 4
