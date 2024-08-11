/*

/admin

*/

const express=require("express")
const router=express.Router();

const adminAuth=require('../middlewares/adminAuth')
router.use(adminAuth)

const create=require('./create')
router.use('/create',create)

const movies=require('./movies')
router.use('/movies',movies)

const deleteMovie=require('./delete')
router.use('/delete',deleteMovie)

const movie=require('./movie')
router.use('/movie',movie)

const update=require('./update')
router.use('/update',update)

router.get('/',(req,res)=>{
    res.send(req.adminID)
})



module.exports=router;