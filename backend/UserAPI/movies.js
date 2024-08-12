/*

/user/movies  --GET API

*/

const express=require("express")
const router=express.Router();
const Movie=require('../database/schemas/movie.schema')

router.get('/',async(req,res)=>{
    try{
        const moviesList=await Movie.find({})
        res.status(200).send(moviesList)
    }
    catch(err){
        res.status(500).send("Something went Wrong")
    }
})

module.exports=router