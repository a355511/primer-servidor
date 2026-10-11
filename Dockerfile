FROM node:24-alpine

WORKDIR /app
COPY . .

CMD ["node", "servidor-asincrono.js"]
