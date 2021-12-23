const express =require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 4000;

app.get('/' , (req,res)=>{ 
res.send("Abe chaljjjj jaa bsdk");
});



// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static('public')) 



var routes = require("./src/User/routes")
app.use ('/routes',routes)

 

app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log(`server is working on port, ${port}`);
  }
});
