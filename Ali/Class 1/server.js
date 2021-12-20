require("dotenv").config();  //env setup to store secrets
var express = require("express");
var cors = require("cors");   //??
var bodyParser = require("body-parser")   //?? 
const port = process.env.PORT || 5000;
var app = express();



// MiddleWare 
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

// Bring Static Data 
app.use(express.static('public')) 



// Routers 
imageRoute = require('./src/imageProject/imageRoutes')
adminRoute = require('./src/adminRouter/admin')

app.get("/", function (req, res) {
  res.send("Server is worrking");
});

app.use("/imageProject",imageRoute)
app.use("/admin",adminRoute)


// server port listener
app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
