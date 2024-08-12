/*

 /auth/user/signup

 */


 const express=require("express")
 const router=express.Router()
 const mongoose=require('mongoose')
 const jwt=require('jsonwebtoken')
 const User=require('../../database/schemas/user.schema')
 
 const jwt_secret=process.env.JSON_Secret;
 
 router.post("/",async(req,res)=>{
     const userData=req.body;
     try{
         const userCheck=await User.findOne({email:userData.email});   //check if user exist for this email
         if(userCheck){
            res.status(409).send("User with this Email is Already exist Please Login to continue")
         }
         else{
                 const user = await User.create({                    //save the userData to the User collection in database
                 _id: new mongoose.Types.ObjectId(),
                 name:userData.name,
                 email:userData.email,
                 password:userData.password
             })   
             const token=jwt.sign(userData,jwt_secret)
             res.status(200).send(token) 
         }
     }
     catch(err){
        res.status(500).send("Something went Wrong")
     }
 })
 
 module.exports=router;