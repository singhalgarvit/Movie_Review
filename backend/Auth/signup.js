/*

 /auth/signup

 */


const express=require("express")
const router=express.Router()
const sendOTP=require('./otp')
const OTP=require('./generateOTP')


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
    const {name,email,password}=req.body;
    const otp=OTP();
    await sendOTP(name,email,otp)
    res.json({"Status":"Sign up Success"})
})

router.post("/verify-otp",(req,res)=>{

    //logic to Verify the OTP

})

module.exports=router;