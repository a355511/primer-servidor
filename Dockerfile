
FROM node:24-alpine

WORKDIR /app

RUN git clone https://github.com/a355511/primer-servidor.git .

CMD ["node", "servidor-asincrono.js"]
