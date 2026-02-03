const http = require('http');

http.createServer((req, res) => {
  res.end("jenkins build pipeline testing from main branch v1!\n");
}).listen(3000);

