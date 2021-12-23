// const express =require('express') 
// const router = express.Router()


// router.get('/', (req,res)=>{
//     console.log("Amb");
// res.send("Le Amb")})
// module.exports = router;


var express = require("express")
var router = express.Router();


 

router.get('/', (req,res)=>{   
    console.log("workinf add Data")
    res.send("workinf add Data")
}) 
module.exports = router;