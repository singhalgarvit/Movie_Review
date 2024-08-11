/*

 /auth/user/login

 */


const express=require("express")
const router=express.Router()
const jwt=require('jsonwebtoken')

const jwt_secret=process.env.JSON_Secret;


router.post("/",(req,res)=>{
    const token=req.headers.token;
    try{
        const data=jwt.verify(token,jwt_secret)
        res.send(data)
    }
    catch(err){
        res.status(400).send("invalid token")
    }
})

module.exports=router;