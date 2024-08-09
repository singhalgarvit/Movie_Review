/*

 /auth/signup

 */


const express=require("express")
const router=express.Router()
const sendOTP=require('./otp')
const OTP=require('./generateOTP')
const mongoose=require('mongoose')
const User=require('../database/schemas/user.schema')
const jwt=require('jsonwebtoken')

const jwt_secret=process.env.JSON_Secret;

function checkUserExist(req,res,next){
    const existence=false   //Logic to check if user already exist 
    if(existence){
        res.send("User Already Exist Please Login")
    }
    else{
        next();
    }
}



router.get("/",(req,res)=>{
    res.send("Sign Up Success")
})

router.post("/",checkUserExist,async(req,res)=>{
    const userData=req.body;                           //store the body in userData const
    const otp=OTP();                                  //generate the otp
    await sendOTP(userData.name,userData.email,otp)   //send the otp to corresponding Email id


    const user = await User.create({                    //save the userData to the User collection in database
        _id: new mongoose.Types.ObjectId(),
        name:userData.name,
        email:userData.email,
        password:userData.password
    })     


    const token=jwt.sign(userData,jwt_secret)         //generate the jwt token
    res.json(token)                                   //send the token in response
})

router.post("/verify-otp",(req,res)=>{

    //logic to Verify the OTP

})

module.exports=router;