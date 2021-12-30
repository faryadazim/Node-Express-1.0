var express = require("express");
var app = express();

var bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// MiddleWare
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.json()); // use to parse req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //   res.send("Server is working");
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/admin", function (req, res) {
  res.send("its admin");
});

// Type of Request .... there are diffreent btw req.query and body in post req data send in body (packed to prevent data leakage ) while in get its send through url

app.get("/user", function (req, res) {
  res.end(JSON.stringify(req.query));
});
app.post("/user", function (req, res) {
  console.log(req.body);
  res.end(JSON.stringify(req.body));
});

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
