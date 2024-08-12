/*

/user/movie/:movieID  --GET API

*/

const express=require("express")
const router=express.Router();
const Movie=require('../database/schemas/movie.schema')

router.get('/:movie_id',async(req,res)=>{
    try{
        const movie_id=req.params.movie_id
        const moviesList=await Movie.findOne({_id:movie_id})
        res.status(200).send(moviesList)
    }
    catch(err){
        res.status(500).send("Something went Wrong")
    }
})

module.exports=router