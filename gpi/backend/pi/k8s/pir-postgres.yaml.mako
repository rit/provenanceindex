<%

assert FLAVOR, "Please set FLAVOR environment variable"


disks = [
  {
    "size": "50Gi",
    "name": "{}-{}".format(PIR_PD_ARCHES_POSTGRES_DATA, FLAVOR),
    "mount": "/var/lib/postgresql/data"
  },
  {
    "size": "5Gi",
    "name": "{}-{}".format(PIR_PD_ARCHES_POSTGRES_LOGS, FLAVOR),
    "mount": "/var/log/postgresql"
  }
]

%>

---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  labels:
    app: pirpg
  name: pirpg
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: pirpg
    spec:
      containers:
      - image: mdillon/postgis:9.6-alpine
        name: pirpg
        envFrom:
        - configMapRef:
            name: pir-arches-postgres
        ports:
        - containerPort: 5432
        volumeMounts:
        % for vol in disks:
        - mountPath: ${vol['mount']}
          name: ${vol['name']}
        % endfor
      restartPolicy: Always
      volumes:
      % for vol in disks:
      - name: ${vol['name']}
        persistentVolumeClaim:
          claimName: ${vol['name']}
      % endfor

% for disk in disks:
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
% endfor


% for claim in disks:
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ${claim['name']}
  labels:
    app: pgdatadir
spec:
  accessModes:
  - ReadWriteOnce
  storageClassName: ""
  selector:
    matchLabels:
      volume: ${claim['name']}
  resources:
    requests:
      storage: ${claim['size']}
% endfor


---
apiVersion: v1
kind: ConfigMap
metadata:
  name: pir-arches-postgres
  namespace: pir-arches-${FLAVOR}
data:
  POSTGRES_PASSWORD: postgres
  POSTGRES_USER: postgres
  POSTGRES_DB: pir_arches_db
  PGDATA: /var/lib/postgresql/data/pgdata
  PGTZ: UTC
  PGPASSWORD: postgres


---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: pirpg
  name: pirpg
spec:
  ports:
  - name: "5432"
    port: 5432
    targetPort: 5432
  selector:
    app: pirpg
