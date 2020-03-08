# Stage 0
# Build the app from a node image
FROM node:12.13-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

# Stage 1
# Serve the app on an nginx image
FROM nginx:1.17-alpine
COPY --from=build-stage /usr/src/app/dist/atelier-ryza-web /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
