/*

/admin

*/

const express=require("express")
const router=express.Router();

const adminAuth=require('../middlewares/adminAuth')
router.use(adminAuth)

const create=require('./create')    //To create movies
router.use('/create',create)

const movies=require('./movies')    //To read all the movies
router.use('/movies',movies)

const deleteMovie=require('./delete')   //To delete a specific movie by ID
router.use('/delete',deleteMovie)

const movie=require('./movie')          //To read a specific movie by ID
router.use('/movie',movie)

const update=require('./update')        //To update a movie info
router.use('/update',update)

router.get('/',(req,res)=>{
    res.send(req.adminID)
})



module.exports=router;