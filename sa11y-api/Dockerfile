FROM node:20.12.2-alpine3.18 AS base
RUN npm install -g pnpm

# Build stage
FROM base AS build
WORKDIR /app
ADD package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
ADD . .
RUN node ace build

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/build /app
COPY --from=build /app/node_modules /app/node_modules
EXPOSE 8080

# Combined migrations and server start
CMD node ace migration:run --force && node ./bin/server.js
