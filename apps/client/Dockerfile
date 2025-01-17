ARG DOCKERHUB_USERNAME
FROM ${DOCKERHUB_USERNAME}/base-image AS frontend-build

WORKDIR /app/apps/client
COPY ./apps/client .
RUN pnpm install --offline --frozen-lockfile &&\
  pnpm run build

FROM nginx:alpine AS frontend

COPY /apps/client/production/nginx.conf /etc/nginx/conf.d/default.conf
COPY /apps/client/ssl /etc/nginx/ssl
RUN chmod 644 /etc/nginx/ssl/fullchain.pem &&\ 
  chmod 600 /etc/nginx/ssl/privkey.pem &&\ 
  chown -R nginx:nginx /usr/share/nginx/html /etc/nginx/ssl

COPY --from=frontend-build /app/apps/client/dist /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html 

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]