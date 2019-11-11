const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/../client/src/dist'));

var Comment = require('../.././Database/index.js').Comment; //require the schema in database


app.get('/comments', function (req, res) {
  // res.send('Helo World from server 3');
  console.log("NOUR")
  Comment.find({}).exec((err,comment) => { 
      if(err){
        console.log(err);
        req.send()
      }
      console.log("comments", comment)
    res.json(comment)});
    // .catch(err => console.log(err));

  // Comment.find({})
  // .then(comments => {res.json(comments)})
  // console.log("comments", comment)
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

