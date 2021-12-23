var mongoose = require("mongoose")

function dbConnection() {
  mongoose.connect(
   ' mongodb+srv://faryadmaalic:faryadmaalic92@cluster0.kgmvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useFindAndModify: false , useUnifiedTopology: true},
    function (err) {
      if (err) {
        console.log("err", err)
      } else {
        console.log("successfully connected")
      }
    }
  )
}

module.exports = dbConnection
