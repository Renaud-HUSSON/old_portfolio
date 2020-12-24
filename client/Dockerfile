FROM node:14-alpine as react_build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=react_build /frontend/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]