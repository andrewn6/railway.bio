FROM jarredsumner/bun:edge AS base

WORKDIR /app

FROM base AS builder

COPY package*.json ./
COPY . .

RUN bun install

FROM base AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

EXPOSE 8080

CMD ["bun", "run", "dev"]
