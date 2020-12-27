FROM node:14-alpine
WORKDIR /images
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install dotenv
EXPOSE 8083