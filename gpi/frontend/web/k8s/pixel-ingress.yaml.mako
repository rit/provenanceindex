<%

assert FLAVOR, "Please set FLAVOR environment variable"

%>

---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: pixel-ingress
  annotations:
    kubernetes.io/ingress.class: "gce"
    kubernetes.io/ingress.global-static-ip-name: pixel-${FLAVOR}
spec:
  backend:
    serviceName: pixel-assets
    servicePort: 80
