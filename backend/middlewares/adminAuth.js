const jwt=require('jsonwebtoken')
const Admin=require('../database/schemas/admin.schema')

const jwt_secret=process.env.JSON_Secret;

function adminAuth(req,res,next){
    const token=req.headers.token;

    if(!token){
        res.status(401).send("Token is not found")
    }
    
    try{
        const verify=jwt.verify(token,jwt_secret)
        next()
    }
    catch(err){
        res.status(401).send("Token is not verified")
    }
}


module.exports=adminAuth