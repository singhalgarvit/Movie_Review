/*

 /auth/user/signup

 */


const express=require("express")
const router=express.Router()
const sendOTP=require('../../functions/sendOTP')
const OTP=require('../../functions/generateOTP')
const mongoose=require('mongoose')
const User=require('../../database/schemas/user.schema')
const jwt=require('jsonwebtoken')
const checkUserExist=require('../../middlewares/userExist')

const jwt_secret=process.env.JSON_Secret;





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
    res.status(200).json(token)                                   //send the token in response
})

router.post("/verify-otp",(req,res)=>{

    //logic to Verify the OTP

})

module.exports=router;