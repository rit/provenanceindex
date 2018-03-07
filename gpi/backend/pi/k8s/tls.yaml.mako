<%

from base64 import b64encode

assert CERT_DIR, 'Please provide the directory containing the cert and key'

with open("{}/cert.pem".format(CERT_DIR)) as r:
    cert = r.read()

with open("{}/privkey.pem".format(CERT_DIR)) as r:
    key = r.read()
%>

---
apiVersion: v1
kind: Secret
metadata:
  name: pir-arches-tls
type: Opaque
data:
  tls.crt: ${b64encode(cert)}
  tls.key: ${b64encode(key)}
