const mongoose=require('mongoose')
const {Schema}=mongoose

const MovieSchema=new Schema({
    _id:{
        type:Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    duration:{
        type:Number,
        required:true
    }
})

const Movie=mongoose.model("Movie",MovieSchema)

module.exports=Movie