const http = require('http')

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola mundo');
});

server.listen(port, () => {
  console.log('Server running on port: $(port)');
});
© 2022 GitHub, Inc.
Terms
Privacy
