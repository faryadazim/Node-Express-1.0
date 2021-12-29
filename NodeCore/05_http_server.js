// const { response } = require("express");
const http = require("http");

const server = http
  .createServer(function (request, response) {
    if (request.url === "/api") {
      response.write(
        JSON.stringify([
          {
            id: "1",
            name: "ali",
          },
          {
            id: "2",
            name: "Zina",
          },
        ])
      );
      response.end();
    } else if (request.url === "/azim") {
      console.log("mastian na kr ", request.url);
      response.write("mastian na kr ");
      response.end();
    } else {
      console.log("req is listening");
      response.writeHead(200, {
        "Content-type": "html",
      });
      response.write("<h3> Html will also work here </h3></h3>");
      response.end();
    }
  })
  .listen(3001);
