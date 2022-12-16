docker build -t sanjeev/express .
kubectl delete deployment myapp
kubectl apply -f kube.yml
kubectl get pods