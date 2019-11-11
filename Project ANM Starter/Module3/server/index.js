const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/../client/src/dist'));

var Comment = require('../.././Database/index.js').Comment; //require the schema in database

<<<<<<< HEAD
app.post('/comments', function (req, res) {
  //////////
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  const newComment = Comment({ id_Content: req.body.id_Content, text: req.body.text, likes: req.body.likes})//?
  newComment.save().then(comment => res.json(comment));
});
=======
>>>>>>> d26baaf5b9321b7e614032316b8042731df3ef38

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

