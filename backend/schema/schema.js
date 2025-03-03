const mongoose=require('mongoose')
const Schema=mongoose.Schema
const movieSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseYear:{
        type:Number,
    },
    availableCopies:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model('movies',movieSchema)