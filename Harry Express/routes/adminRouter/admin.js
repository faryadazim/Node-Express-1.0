var express = require("express")
var router = express.Router();

router.get('/' , (req,res)=>{
    console.log("Admin Router ");
    res.send("aDMIN add Data")
})
module.exports = router