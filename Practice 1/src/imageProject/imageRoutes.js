var express = require("express")
var router = express.Router();


 

router.get('/', (req,res)=>{   
    // addData(req,res)
    console.log("workinf add Data")
    res.send("workinf add Data")
})

router.get('/addData', (req,res)=>{   
    // addData(req,res)
    console.log("workinf add Data")
    res.send("asdfghjkl;'")
})


router.get('/deleteData', (req,res)=>{   
    // addData(req,res)
    console.log("workinf add Data")
    res.send("faryaad")
})





module.exports = router;