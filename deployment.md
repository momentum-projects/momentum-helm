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
1. Setting up Docker Credentials for pushing `aws ecr get-login-password  | docker login --username AWS --password-stdin 850921955541.dkr.ecr.us-east-1.amazonaws.com`
1. Tag and push `docker tag linkme-david:latest 850921955541.dkr.ecr.us-east-1.amazonaws.com/momentumhelm` `docker push 850921955541.dkr.ecr.us-east-1.amazonaws.com/momentumhelm`
1. run docker container `docker run --rm -p 4005:4000 --env JWT_SECRET=p+yzt0EGZEZkctASnAE6oISdmETtH3tUGSgodwGFAto= --env DATABASE_URL=postgresql://postgres:devapp@172.22.0.1:5439/app --env CORS_ALLOW=http://localhost:4005 linkme-david`
1. force a deployment of a new container `aws ecs update-service --cluster momentum-helm --service momentumhelm2 --force-new-deployment`

```text
Role ARN: arn:aws:iam::850921955541:role/ecsTaskExecutionRole

Image 850921955541.dkr.ecr.us-east-1.amazonaws.com/momentumhelm

security group: sg-081e2497350451a3b

subnets:
subnet-0d96cbb50ede4b0c7, subnet-03e43262979212117, subnet-09420698b8a96bca5, subnet-0050e8d785cabf84e, subnet-0839ad6701113c785, subnet-0c64dea0256d6fe8e


aws ecs create-service --cluster momentum-helm --service-name momentumhelm \
 --task-definition nodejs-fargate-task:3 --desired-count 1 \
 --network-configuration "awsvpcConfiguration={subnets=[
subnet-0d96cbb50ede4b0c7, subnet-03e43262979212117, subnet-09420698b8a96bca5, subnet-0050e8d785cabf84e, subnet-0839ad6701113c785, subnet-0c64dea0256d6fe8e
 ],securityGroups=[sg-081e2497350451a3b],assignPublicIp=ENABLED}" --launch-type "FARGATE"


aws ec2 describe-subnets | gron | grep  `SubnetArn`

```
