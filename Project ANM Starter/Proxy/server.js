
var express = require('express'); 
var request = require('request'); 
var app = express();
app.use(express.static(__dirname + '/'));

  app.listen(7000); 
console.log('Server running on port %d', 7000);

