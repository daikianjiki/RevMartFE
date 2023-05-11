FROM node:latest As build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:latest AS RUN

COPY --from=build /app/dist/* /usr/share/nginx/html