const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    console.log(req.url);
    console.log(req.method);
    var q = url.parse(req.url, true).query;
    console.log(q);
    res.end();
  })
  .listen(8080);
