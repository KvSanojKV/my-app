const http = require('http');

http.createServer((req, res) => {
  res.end("jenkins build pipeline testing V4!\n");
}).listen(3000);

