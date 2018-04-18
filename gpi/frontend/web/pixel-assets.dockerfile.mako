FROM nginx:1.13.12

WORKDIR /app/pixel
COPY ./ops /app/ops
COPY ./dist /app/pixel/www

CMD /app/ops/entry.sh

# vim: ft=Dockerfile
