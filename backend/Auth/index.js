const express=require("express")
const router=express.Router();


const admin=require('./admin')
const user=require('./user')

router.use('/admin',admin)
router.use('/user',user)


module.exports=router;