const http = require('http');

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello RT3 RW1');
  res.end('Hello Kukusan City-Ward');
  res.end('Hello Beji Sub-District');
  res.end('Hello Depok City');
  res.end('Hello Jawa Barat');
  res.end('Hello Indonesia');
  res.end('Hello South East Asia');
  res.end('Hello Asia');
  res.end('Hello World');
  res.end('Hello Earth');
  res.end('Hello Solar System');
  res.end('Hello Milky Way Galaxy');
  res.end('Hello Observable Universe');
  res.end('Hello Multiverse');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});