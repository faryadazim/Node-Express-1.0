var express = require("express");
var app = express();
var routerUser = require("./Routes/User/routes");
var routerAdmin = require("./Routes/Admin/routes");

var bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

app.get("/", function (req, res) {
  //   res.send("Server is working");
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/user/:params", function (req, res) {
  console.log(req.params);
  res.send(JSON.stringify(req.params));
});

app.use("/user", routerUser);
app.use("/admin", routerAdmin);

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
