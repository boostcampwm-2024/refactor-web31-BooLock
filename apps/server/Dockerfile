ARG DOCKERHUB_USERNAME
FROM ${DOCKERHUB_USERNAME}/base-image AS backend-build

WORKDIR /app/apps/server
COPY ./apps/server .

RUN pnpm install --offline --frozen-lockfile && \ 
  pnpm run build

FROM node:20-alpine AS backend

WORKDIR /app/apps/server
COPY --from=backend-build /app/packages ./packages
COPY --from=backend-build /app/apps/server/package.json /app/pnpm-workspace.yaml /app/apps/server/.env ./
COPY --from=backend-build /app/apps/server/node_modules ./node_modules
COPY --from=backend-build /app/apps/server/dist ./dist

RUN npm install -g pnpm && pnpm prune --prod

CMD ["pnpm", "start"]
