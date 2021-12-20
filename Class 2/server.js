var dotenv = require("dotenv")
dotenv.config();      //connecting env with server??
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser")
//DB Connectivity
var dbConnection = require("./src/config/Db")
dbConnection()
const port = process.env.PORT || 45000;
var app = express();

// MiddleWare 
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

// MiddleWare 



var imageRoute = require('./src/imageProject/imageRoutes')
var adminRoute = require('./src/imageProject/imageRoutes')

app.get("/", function (req, res) {
  res.send("Server is working");
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
