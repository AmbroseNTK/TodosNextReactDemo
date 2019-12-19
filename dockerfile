FROM node:latest

COPY . .

RUN npm i

RUN npm run build

RUN npm run start

EXPOSE 3000:80
