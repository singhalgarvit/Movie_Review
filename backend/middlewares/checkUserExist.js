const User=require('../database/schemas/user.schema')

async function checkUserExist(req,res,next){
    const existence=await User.exists({email:req.body.email})  //Logic to check if user already exist 
    if(existence){
        res.status(409).send("User Already Exist Please Login")
    }
    else{
        next();
    }
}

module.exports=checkUserExist