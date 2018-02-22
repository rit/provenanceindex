<%

assert FLAVOR, "Please set FLAVOR environment variable"


name = "{}-{}".format(PIR_PD_ARCHES_ES_DATA, FLAVOR)
disk = {
  "size": "256Gi",
  "name": name,
  "mount": "/usr/share/elasticsearch/data"
}

%>
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: pires
    ver: ${PIR_ARCHES_RUNTIME_VERSION}
  name: pires
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: pires
    spec:
      containers:
      - env:
        - name: ES_JAVA_OPTS
          value: -Xms512m -Xmx512m
        - name: TZ
          value: UTC
        - name: xpack.security.enabled
          value: "false"
        image: docker.elastic.co/elasticsearch/elasticsearch:5.2.1
        name: pires
        ports:
        - containerPort: 9200
        - containerPort: 9300
        volumeMounts:
        - mountPath: ${disk['mount']}
          name: ${disk['name']}
      restartPolicy: Always
      securityContext:
        fsGroup: 1000
      volumes:
      - name: ${disk['name']}
        persistentVolumeClaim:
          claimName: ${disk['name']}

---
# Taken from https://github.com/pires/kubernetes-elasticsearch-cluster/issues/85

apiVersion: extensions/v1beta1
kind: DaemonSet
metadata:
  labels:
    name: pires-ds
  name: pires-ds
spec:
  selector:
    matchLabels:
      app: pires-ds
  template:
    metadata:
      labels:
        app: pires-ds
    spec:
      containers:
      - name: pires-ds
        image: gcr.io/google-containers/startup-script:v1
        imagePullPolicy: IfNotPresent
        securityContext:
          privileged: true
        env:
        - name: STARTUP_SCRIPT
          value: |
            #! /bin/bash
            sysctl -w vm.max_map_count=262144
            echo "done"

---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: ${disk['name']}-volume
  labels:
    volume: ${disk['name']}
spec:
  storageClassName: ""
  capacity:
    storage: ${disk['size']}
  accessModes:
    - ReadWriteOnce
  gcePersistentDisk:
    pdName: ${disk['name']}
    fsType: ext4

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ${disk['name']}
  labels:
    app: pir-es
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: ""
  selector:
    matchLabels:
      volume: ${disk['name']}
  resources:
    requests:
      storage: ${disk['size']}

---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: pires
  name: pires
spec:
  ports:
  - name: "9200"
    port: 9200
    targetPort: 9200
  - name: "9300"
    port: 9300
    targetPort: 9300
  selector:
    app: pires
