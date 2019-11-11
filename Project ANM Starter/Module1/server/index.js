const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const db = require('../../Database/index.js')
let app = express();

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/../client/src/dist'));

// const Content = require('../.././Database/index.js').Content;


// app.get('/content', function (req, res) {
//   // console.log("contentcour")
//   Content.find({}).exec((err,content) => { 
//       if(err){
//         console.log(err);
//         req.send()
//       }
//       res.json(content)});
// });

// app.get("/save",(req,res)=>{
//   db.save()
//   res.send("saveed")
// })

app.get("*",(req,res)=>{
  app.use(express.static(__dirname + '/../client/src/dist'));
})

const port = process.env.PORT || 3000; //this is for heruko ()

// app.listen(process.env.PORT || 3000)
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


