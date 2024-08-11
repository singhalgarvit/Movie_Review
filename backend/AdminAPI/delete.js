/*

/admin/delete  --DELETE API

*/

const express=require("express")
const router=express.Router();
const Movie=require('../database/schemas/movie.schema')

router.delete('/',async(req,res)=>{
    try{
        const movieID=req.headers.movie_id;
        const deleteMovie=await Movie.deleteOne({_id:movieID})
        res.status(200).send(deleteMovie)
    }
    catch(err){
        res.status(500).send("Something went Wrong")
    }
})

module.exports=router