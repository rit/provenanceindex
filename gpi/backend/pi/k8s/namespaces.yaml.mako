%for flavor in FLAVORS.split():
---
apiVersion: v1
kind: Namespace
metadata:
  name: pir-arches-${flavor}
  labels:
    flavor: pir-arches-${flavor}
%endfor
