/*

/user/review  --POST API

*/

const express=require("express")
const router=express.Router();
const mongoose=require('mongoose')
const Reviews=require('../database/schemas/review.schema')

router.post('/',async(req,res)=>{
    try{
        const reviewData=req.body;
        const review=await Reviews.create({
            _id: new mongoose.Types.ObjectId(),
            user_id:req.userID,
            movie_id:reviewData.movie_id,
            description:reviewData.description,
            rating:reviewData.rating
        })
        res.status(200).send("Successfully Submitted Review")
    }
    catch(err){
        res.status(500).send("Something went Wrong")
    }
})

module.exports=router