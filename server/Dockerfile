FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "./dist/index.js"]
