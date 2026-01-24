const http = require('http');

http.createServer((req, res) => {
  res.end("Sanoj!");
}).listen(3000);

