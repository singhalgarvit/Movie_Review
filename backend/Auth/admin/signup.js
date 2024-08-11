/*

 /auth/admin/signup

 */


 const express=require("express")
 const router=express.Router()
 const mongoose=require('mongoose')
 const jwt=require('jsonwebtoken')
 const Admin=require('../../database/schemas/admin.schema')
 
 const jwt_secret=process.env.JSON_Secret;
 
 router.post("/",async(req,res)=>{
     const adminData=req.body;
     try{
         const adminCheck=await Admin.findOne({email:adminData.email});   //check if user exist for this email
         if(adminCheck){
            res.status(409).send("Admin with this Email is Already exist please Login to continue")
         }
         else{
                 const admin = await Admin.create({                    //save the userData to the User collection in database
                 _id: new mongoose.Types.ObjectId(),
                 name:adminData.name,
                 email:adminData.email,
                 password:adminData.password
             })   
             const token=jwt.sign(adminData,jwt_secret)
             res.status(200).send(token) 
         }
     }
     catch(err){
        res.status(500).send("Something went Wrong")
     }
 })
 
 module.exports=router;