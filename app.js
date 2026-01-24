const http = require('http');

http.createServer((req, res) => {
  res.end("Sanoj updated with github action!");
}).listen(3000);

