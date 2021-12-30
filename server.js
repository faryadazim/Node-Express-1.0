var express = require("express");
var app = express();

var bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
// Middleware Custom ....

function middleware1(req, res, next) {
  console.log(req.method, req.url, new Date());
  next();
}

//.....................
app.get("/", middleware1, function (req, res) {
  console.log("its root");
  res.send("Log");
});

// cookie
app.get("/cookie", function (req, res) {
  res.cookie("first", "look goog");
  res.send("cookie");
});

app.get("/remove", function (req, res) {
  res.clearCookie("first");
  res.send("cookie removed");
});

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
