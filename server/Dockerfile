FROM oven/bun

WORKDIR /app

COPY package*.json ./

COPY . .

RUN bun i

EXPOSE 8080

CMD ["bun", "run", "dev"]
