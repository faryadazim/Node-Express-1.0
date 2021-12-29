var express = require("express");
const port = process.env.PORT || 3000;

var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send("Server is working");
});

app.get("/user", function (req, res) {
  res.send("its user");
});

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
