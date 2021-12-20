var express = require("express")
var router = express.Router();


let {addData} = require('./imageController')



router.get('/', (req,res)=>{   
    // addData(req,res)
    console.log("workinf add Data")
    res.send("workinf add Data")
})

router.post('/addData', (req,res)=>{   
    addData(req,res) 
})







module.exports = router;