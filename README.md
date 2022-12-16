# Task-Manager-API
## Demo link: https://task-manager-2913.onrender.com

A simple CRUD application with ExpressJS and ReactJS

To run this project through docker

```
// for the frontend directory
docker pull duck1010/task-manager-frontend 
docker run --name  frontend -p 3000:3000 -d duck1010/task-manager-frontend
```


```
// for the backend directory
docker pull duck1010/task-manager-backend 
docker run --name  backend -p 4000:4000 -d duck1010/task-manager-backend
```

