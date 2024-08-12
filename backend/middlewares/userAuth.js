const jwt=require('jsonwebtoken')
const User=require('../database/schemas/user.schema')

const jwt_secret=process.env.JSON_Secret;

async function userAuth(req,res,next){
    const token=req.headers.token;

    if(!token){
      return  res.status(401).send("Token is not found")
    }
    
    try{
        const verify=jwt.verify(token,jwt_secret)
        const user=await User.findOne({email:verify.email})
        if(user !== null ){
            req.userID=user._id;
            next()
        }
        else{
           return res.status(403).send("The User is not Authorised")
        }
    }
    catch(err){
        res.status(401).send("Token is not verified")
    }
}


module.exports=userAuth