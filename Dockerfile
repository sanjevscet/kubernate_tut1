FROM node:18-alpine3.16
WORKDIR /sanj
COPY package.json .
RUN npm i
COPY . .
EXPOSE 4201
CMD ["node", "index.js"]