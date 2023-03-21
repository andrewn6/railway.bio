FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

COPY . .

RUN pnpm install

RUN pnpm run build

COPY ./server/routes/home/home.html ./server/dist/routes/home/home.html

EXPOSE 8080

CMD ["pnpm", "run", "start"]
