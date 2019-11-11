const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../../Database/index.js')
let app = express();
const path =require("path")

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/../client/src/dist'));

const Content = require('../.././Database/index.js').Content;


// app.post('/', function (req, res) {
// });

app.get('/content', function (req, res) {
  // console.log("contentcour")
  Content.find({}).exec((err,content) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(content)});
});

<<<<<<< HEAD
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

let port = 3000;
=======
app.get("/save",(req,res)=>{
  db.save()
  res.send("saveed")
})

const port = process.env.PORT || 3000;
>>>>>>> d26baaf5b9321b7e614032316b8042731df3ef38

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


