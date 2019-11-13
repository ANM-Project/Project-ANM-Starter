
var express = require('express'); 
var request = require('request'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express();
const db = require('./db.js')
const Content = require('./db.js').Content;
app.use(express.static(__dirname + '/'));

app.get('/content', function (req, res) {
  // console.log("contentcour")
  console.log("get datat from server");
  Content.find({}).exec((err,content) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(content)});
});

  app.listen(7000); 
console.log('Server running on port %d', 7000);

