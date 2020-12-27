FROM node:14-alpine as react_build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .