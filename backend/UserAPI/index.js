/*

/user

*/

const express=require("express")
const router=express.Router();

const userAuth=require('../middlewares/userAuth')
router.use(userAuth)

const movies=require('./movies')
router.use('/movies',movies)

const review=require('./review')
router.use('/review',review)

const movie=require('./movie')
router.use('/movie',movie)

router.get('/',(req,res)=>{
    res.send("/user connected")
})

module.exports=router;
