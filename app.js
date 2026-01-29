const http = require('http');

http.createServer((req, res) => {
  res.end("jenkins build pipeline testing!\n");
}).listen(3000);

