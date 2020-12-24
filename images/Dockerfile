FROM node:14-alpine
WORKDIR /images
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8083