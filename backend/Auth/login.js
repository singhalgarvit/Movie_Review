/*

 /auth/login

 */


const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{
    res.json({"Status":"Login Success"})
})

module.exports=router;