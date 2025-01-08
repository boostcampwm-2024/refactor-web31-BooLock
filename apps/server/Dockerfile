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
COPY --from=backend-build /app/apps/server/node_modules ./node_modules
COPY --from=backend-build /app/pnpm-workspace.yaml ./pnpm-workspace.yaml
# COPY --from=backend-build /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=backend-build /app/packages ./packages
COPY ./apps/server/.env ./

RUN npm install -g pnpm && pnpm prune --prod

CMD ["node", "dist/index.js"]
