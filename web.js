var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
var fname = fs.readFileSync('./index.html','utf8');
//response.send(fname);
var buffer = new Buffer(fname,'utf-8');
response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
