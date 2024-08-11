const Admin=require('../database/schemas/admin.schema')

async function adminExist(req,res,next){
    const adminData=req.body;
    try{
        const admin=await Admin.findOne({email:adminData.email});
            if(!admin) {
             return   res.status(404).send("Admin not found with this Email");
            }
            else{
                req.savedPass=admin.password; //this is the password that is stored in database for the admin
                next()
            }
    }
    catch(err){
        res.send(err)
    }
}

module.exports=adminExist