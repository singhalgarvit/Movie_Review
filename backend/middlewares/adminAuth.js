const jwt=require('jsonwebtoken')
const Admin=require('../database/schemas/admin.schema')

const jwt_secret=process.env.JSON_Secret;

async function adminAuth(req,res,next){
    const token=req.headers.token;

    if(!token){
      return  res.status(401).send("Token is not found")
    }
    
    try{
        const verify=jwt.verify(token,jwt_secret)
        const admin=await Admin.findOne({email:verify.email})
        if(admin !== null ){
            req.adminID=admin._id;
            next()
        }
        else{
           return res.status(403).send("The Admin is not Authorised")
        }
    }
    catch(err){
        res.status(401).send("Token is not verified")
    }
}


module.exports=adminAuth