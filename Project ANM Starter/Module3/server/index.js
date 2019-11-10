const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let app = express();

//Config DB
const URI = require('../.././config/keys.js').mongoURI; //path?
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We're Connected!");
});



app.use(bodyParser.json()); //there is another link i need to add
app.use(express.static(__dirname + '/../client/src/dist'));

app.post('/', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/app3/', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('Helo World from server 3');
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

