FROM node:14-alpine
ENV debug=1
COPY . /app

RUN cd /app && npm install



///

docker run -p 4200:4200 -v "$(pwd):/app" -it --entrypoint sh node:14-alpine -c "cd /app;npm install;npm start"
