var first = require('./first');
var second = require('./second');
var third = require('./third');
var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(third.accountBalance() + third.randomNum());
  response.end();
});

server.listen(3000);
