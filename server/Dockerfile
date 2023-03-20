FROM node:18-alpine

WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY package*.json ./

COPY . .

RUN pnpm install

RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "start"]
