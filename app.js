const http = require('http');

http.createServer((req, res) => {
  res.end("nginx!\n");
}).listen(3000);

