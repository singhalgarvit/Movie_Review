const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.json({"Status":"Sign up Success"})
})

module.exports=router;