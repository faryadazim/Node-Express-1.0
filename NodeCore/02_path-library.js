const path = require("path");

console.log("directry path from root to current", __dirname);
console.log("directry path with file name", __filename);
console.log("path parse", path.parse(__filename));
