const mongoose=require("mongoose")

const recipeSchema = mongoose.Schema({
    titel:{
        type:String,
        required:true,
        unique:true
    },
    ingredients:{
        type:String,
        required:true,
    },
    istructions:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    coverimage:{
        type:String,
        required:true,
    },

},{timestamps:true})

module.exports=mongoose.model("Recipes",recipeSchema)