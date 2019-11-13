const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = require('.././config/keys.js').mongoURI; //path?
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We're Connected!");
});

const ContentSchema = Schema({
  title: {type: String},
  text: {type: String},
  description: {type: String},
  Auther: {type: String},
  ImgAuther: {type: String}, 
  shares: {type: Number},
  likes: {type: Number}
})

const Content = mongoose.model('Content', ContentSchema);


let save = () => {
  var con =new  Content({
    title:"nour"
  })
con.save()
}

module.exports={save,Content};
