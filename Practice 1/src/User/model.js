var mongoose = require("mongoose");
var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "post Title Required"],
  },
  desc: {
    type: String,
  },
  name: {
    type: String,
  },
});

var post = mongoose.model("posts", postSchema); //isit CPost ollection tell me whole structure of mongoDB
module.exports = post;
