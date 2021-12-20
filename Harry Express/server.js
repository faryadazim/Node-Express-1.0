require("dotenv").config();  //env setup to store secrets
var express = require("express");  
var path = require("path");  
var app = express();
const port = process.env.PORT || 5000;

 
app.get("/", function (req, res) {
  // res.send("Server is worrking");
  // res.status(500)
  // res.sendFile(path.join(__dirname,'./Public/index.html')) //render html file
  res.json({ harry:"good"})
});

 
// server port listener
app.listen(port, (err) => { 
    console.log(`Running At  ${port}`);
 
});
