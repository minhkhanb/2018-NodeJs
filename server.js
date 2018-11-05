var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.end('abc');
});

var server = app.listen(9000, function() {
  console.log('Started at http://localhost:9000');
});