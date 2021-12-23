var mongoose = require("mongoose");

function dbConnection() {
  // tell me difference btw mongo nd mongoose
  mongoose.connect(
    " mongodb+srv://faryadmaalic:faryadmaalic92@cluster0.kgmvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    function (err) {
      if (err) {
        console.log("error accur at database connection", err);
      } else {
        console.log("successfully connected");
      }
    }
  );
}

module.exports = dbConnection;
