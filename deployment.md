# Deployment to AWS Fargate

## What is AWS Fargate?

[Fargate - Serverless compute engine](https://aws.amazon.com/fargate/)

## Deployment

[Amazon's Getting Started Guide](https://aws.amazon.com/blogs/compute/building-deploying-and-operating-containerized-applications-with-aws-fargate/)
[Tutorial](https://levelup.gitconnected.com/aws-fargate-running-a-serverless-node-js-app-on-aws-ecs-c5d8dea0a85a)
[Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/userguide/task_definition_parameters.html#container_definition_environment)

## Steps

1. Create Amazon RDS Database
1. Push container to AWS
1. Create ECS Cluster


## Commands

1. build docker container `docker build -f Dockerfile.deploy -t linkme-david:latest .`
1. run docker container `docker run --rm -p 4005:4000 --env JWT_SECRET=p+yzt0EGZEZkctASnAE6oISdmETtH3tUGSgodwGFAto= --env DATABASE_URL=postgresql://postgres:devapp@172.22.0.1:5439/app --env CORS_ALLOW=http://localhost:4005 linkme-david`
