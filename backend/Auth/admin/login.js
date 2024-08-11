/*

 /auth/admin/login

 */


const express=require("express")
const router=express.Router()
const jwt=require('jsonwebtoken')
const adminExist=require('../../middlewares/adminExist')

const jwt_secret=process.env.JSON_Secret;

router.post("/",adminExist,async(req,res)=>{
    const adminData=req.body;
    if(req.savedPass == adminData.password){
        const token=jwt.sign(adminData,jwt_secret);
        res.status(200).send(token)
    }
    else{
        res.status(401).send("Password is incorrect");
    }
})

module.exports=router;