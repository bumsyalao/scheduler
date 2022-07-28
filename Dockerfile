FROM node:16
WORKDIR /Users/bunmialao/Documents/scheduler
COPY package.json .
RUN npm install
COPY . .
CMD npm start