const mongoose=require('mongoose')
const {Schema}=mongoose

const ReviewSchema=new Schema({
    _id:{
        type:Schema.Types.ObjectId,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    movie_id: {
        type: Schema.Types.ObjectId,
        ref:'Movie',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
})

const Reviews=mongoose.model("Reviews",ReviewSchema)

module.exports=Reviews