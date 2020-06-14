FROM node:12-slim

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --no-optional && npm cache clean --force
COPY . .
EXPOSE 8000
CMD ["npm", "start"]

