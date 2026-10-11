const http = require('node:http'); 
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('index2.html', (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Servidor asíncrono en http://${hostname}:${port}/`);
});
