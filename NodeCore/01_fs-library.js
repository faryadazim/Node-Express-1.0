//  >>>>>>>>>>>>>   Files System <<<<<<<<<<<<

// `  >>>>>   Async Node by default

const fs = require("fs");
console.log(" first statement ");
fs.readdir("./", function (err, files) {
  if (err) {
    console.log("Error :", err);
  } else {
    console.log("Files : ", files);
    console.log(" 2nd statement ");
  }
});

console.log(" 3rd statement ...........");

// `  >>>>>   Sync Node Js

console.log(" first statement ");

var files = fs.readdirSync("./");
console.log(files);
console.log(" 3rd statement ");

//  >>>>>>>>>>>>>   Read Write Append<<<<<<<<<<<<
const fs = require("fs");

// function readFiles(srcpath) {
//   fs.readFile(srcpath, "utf-8", function (err, data) {
//     err ? console.log(err) : console.log("Read ", data);
//   });
// }
// readFiles("./package.json");

// function writeFiles(srcpath, data) {
//   fs.writeFile(srcpath, data, function (err) {
//     err ? console.log("err :", err) : console.log("Write Succesfully");
//   });
// }
// writeFiles("./abc.txt", "Bhola record");

function appendFiles(srcpath, data) {
  fs.appendFile(srcpath, data, function (err) {
    err ? console.log("err :", err) : console.log("Rewrite Succesfully");
  });
}
appendFiles(" ./abc.txt", "to mastian kr rya hn");
