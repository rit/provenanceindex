%for flavor in FLAVORS.split():
---
apiVersion: v1
kind: Namespace
metadata:
  name: arches-${flavor}
  labels:
    flavor: arches-${flavor}
%endfor
