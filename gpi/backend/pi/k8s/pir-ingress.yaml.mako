<%

assert FLAVOR, "Please set FLAVOR environment variable"

%>

---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: pir-arches-ingress
  annotations:
    kubernetes.io/ingress.class: "gce"
    kubernetes.io/ingress.global-static-ip-name: pir-${FLAVOR}
spec:
  tls:
  - secretName: pir-arches-tls
  backend:
    serviceName: pira
    servicePort: 80
