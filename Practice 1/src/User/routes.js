const express =require('express') 
const router = express.Router()


router.get('/', (req,res)=>{
    console.log("Amb");
res.send("Le Amb")})
module.exports = router;