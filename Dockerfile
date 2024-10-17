FROM nginx

WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /app
COPY assets/ /app/assets
COPY certs/ /app/certs


