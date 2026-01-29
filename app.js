const http = require('http');

http.createServer((req, res) => {
  res.end("jenkins build pipeline testing V1!\n");
}).listen(3000);

