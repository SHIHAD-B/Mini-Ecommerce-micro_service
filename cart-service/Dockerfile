FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g ts-node

COPY . .

EXPOSE 4005

CMD [ "npm" , "start" ]

