FROM base-image AS backend-build

WORKDIR /app/apps/server
COPY ./apps/server .

RUN pnpm install --offline --frozen-lockfile && \ 
  pnpm swagger-auto && \
  pnpm run build

FROM node:20-alpine AS backend

WORKDIR /app/apps/server
COPY --from=backend-build /app/apps/server/dist ./dist
COPY --from=backend-build /app/apps/server/package.json ./package.json
COPY --from=backend-build /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./apps/server/.env ./

RUN npm install -g pnpm && pnpm install --offline --production --frozen-lockfile

CMD ["pnpm", "start"]
