var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
   console.log("Sending Hello World");
}).listen(process.env.VCAP_APP_PORT || process.env.PORT);