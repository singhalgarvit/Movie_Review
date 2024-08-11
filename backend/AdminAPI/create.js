/*

/admin/create  --POST API

*/

const express=require("express")
const router=express.Router();
const mongoose=require('mongoose')
const Movie=require('../database/schemas/movie.schema')

router.post('/',async(req,res)=>{
    try{
        const movieData=req.body;
        const movie=await Movie.create({
            _id: new mongoose.Types.ObjectId(),
            name:movieData.name,
            description:movieData.description,
            image:movieData.image,
            date:movieData.date,
            duration:movieData.duration
        })
        res.status(200).send("Successfully Submitted Movie Details")
    }
    catch(err){
        res.status(500).send("Something went Wrong")
    }
})

module.exports=router