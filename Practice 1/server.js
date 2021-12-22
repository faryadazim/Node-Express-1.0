const express =require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 3000;

app.use('/' , (req,res)=>{ 
res.send("Abe chal jaa bsdk");
});

var routes = require("./src/User/routes")
app.use ('/routes',routes)

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
