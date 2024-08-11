/*

/admin/update  --PUT API

*/

const express=require("express")
const router=express.Router();
const Movie=require('../database/schemas/movie.schema')

router.put('/',async(req,res)=>{
    try{
        const movieID=req.headers.movie_id;
        const movieData=req.body;
        const updatedMovie = await Movie.findOneAndUpdate(
        { _id:movieID  },
        { $set: movieData },
        { returnDocument: 'after' } 
    );
        res.status(200).send(updatedMovie)
    }
    catch(err){
        res.status(500).send("Something went Wrong")
    }
})

module.exports=router