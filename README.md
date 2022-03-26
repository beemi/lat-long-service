# lat-long-service

Get Postcode details using https://expressjs.com/

# setup

```shell
npm install --save-dev babel-cli babel-preset-env jest supertest superagent
```

## routes

Get longitude and latitude from postcode

```shell
curl -X GET http://localhost:7000?postcode=SW1A 1AA
```

```shell
cur -X GET http://localhost:3000/postcode/SW1A 1AA
```

# tests

```shell
npm test
```

# Building your image

```shell
docker build -t lat-long-service .
```

## Your image will now be listed by Docker:
```shell
docker images
```

### Run the image
```shell
docker run -p 3000:3000 lat-long-service
```

## Kubernetes

Kubernetes CLI To Manage Your Clusters In Style!

https://k9scli.io/

```shell
brew install k9s
```
```shell
k9s
```


### Minikube
Start minikube with `minikube start`

Check the status of minikube with `minikube status`

Check the logs of minikube with `minikube logs`

Check the dashboard of minikube with `minikube dashboard`

```shell
kubectl apply -f kube
```
watch your Pods coming alive with:
```shell
kubectl get pods --watch
```

Delete kubernetes resources with:
```shell
kubectl delete -f kube
```

## :e-mail: Contacts

Owner: [beemiraja@gmail.com](beemiraja@gmail.com)
