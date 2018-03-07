---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: pir-arches-ingress
  annotations:
    kubernetes.io/ingress.class: "gce"
spec:
  tls:
  - secretName: pir-arches-tls
  backend:
    serviceName: pira
    servicePort: 80
