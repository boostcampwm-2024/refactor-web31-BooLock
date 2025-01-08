FROM base-image AS backend-build

WORKDIR /app/apps/server
COPY ./apps/server .

RUN pnpm install --offline --frozen-lockfile &&\ 
  pnpm swagger-auto && \
  pnpm run build

FROM node:20-alpine AS backend

WORKDIR /app/apps/server
COPY --from=backend-build /app/apps/server/dist .

RUN pnpm install --offline --production --frozen-lockfile

CMD ["pnpm", "start"]
