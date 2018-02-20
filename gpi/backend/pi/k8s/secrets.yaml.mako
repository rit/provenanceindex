<%

from base64 import b64encode

assert DJANGO_SECRET_KEY, 'DJANGO_SECRET_KEY envar is required'

%>

---
apiVersion: v1
kind: Secret
metadata:
  name: pir-arches-secrets
type: Opaque
data:
  django-secret-key: ${b64encode(DJANGO_SECRET_KEY)}
