const http = require('http');

http.createServer((req, res) => {
  res.end("Sanoj reverted to previous!");
}).listen(3000);

