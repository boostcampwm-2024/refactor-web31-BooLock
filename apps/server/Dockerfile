FROM base-image AS backend-build

WORKDIR /app/apps/server
COPY ./apps/server .

RUN pnpm install --offline --frozen-lockfile && \ 
  pnpm swagger-auto && \
  pnpm run build

FROM node:20-alpine AS backend

WORKDIR /app/apps/server
COPY --from=backend-build /app/apps/server/package.json /app/apps/server/node_modules /app/pnpm-workspace.yaml /app/packages ./
COPY ./apps/server/.env ./
COPY --from=backend-build /app/apps/server/dist ./dist

RUN npm install -g pnpm && pnpm prune --prod

CMD ["pnpm", "start"]
