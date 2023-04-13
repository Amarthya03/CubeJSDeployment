# Cube JS Deployment Files

Cube is a BI layer that provides you with various options like preAggregations, SQL APIs, which facilitates you in reducing the number of requests made directly to the database.

## Steps for bringing up the cluster

### Cube JS

1. Create a new namespace

```zsh
kubectl create ns cubejs
```

2. Apply the cube deployment files

```zsh
kubectl apply -f ./cube-deployment-files
```

### TimescaleDB

Timescale is a time-series database which is built on top of postgres. We are using pgBouncer to handle connections to the database

1. Create a new namespace

```zsh
kubectl create ns dbspace
```

2. Apply the cube deployment files

```zsh
kubectl apply -f ./postgres_and_pgbouncer
```

### Superset

Superset is a visualization tool which aids you in bringing up dashboards and charts at ease.

1. Create a new namespace

```zsh
kubectl create ns superset
```

2. Add the superset helm chart

```zsh
helm repo add superset https://apache.github.io/superset
```

3. Install the superset helm chart with the given <code>values.yaml</code> file

```zsh
helm upgrade -f ./superset/values.yaml superset superset/superset -n superset
```

## Accessing CubeJS Playground and Superset

1. If your kubernetes cluster is on minikube, to use user-defined Cube schemas, you should mount the <code>cube-api-schema directory</code>

```zsh
minikube mount <path-to-your-directory>/cube-api-schema:/cube/conf/schema
```

2. Expose Cube API Port

```zsh
kubectl port-forward --namespace=cubejs pods/<name-of-the-cube-api-pod> 4000
```

3. Expose Superset port, and login with the superset admin credentials

```zsh
kubectl port-forward --namespace=superset pods/<name-of-the-superset-pod> 8088
```

## Contributors

1. [Mayur Taware](https://github.com/mayurdtom)
2. [Amarthya Ravi](https://github.com/Amarthya03)
