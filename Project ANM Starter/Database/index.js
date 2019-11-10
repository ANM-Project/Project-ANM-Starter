const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  id_Content: {type: Number, unique: true}, //this is a foreign key for the article
  text: {type: String},
  likes: {type: Number},  
})

const Comment = mongoose.model('Comment', CommentSchema);


let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports = {
  Comment: Comment
}