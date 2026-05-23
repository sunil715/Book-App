
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

COPY --from=build /app/dist/Book-App/browser /usr/share/nginx/html

EXPOSE 80