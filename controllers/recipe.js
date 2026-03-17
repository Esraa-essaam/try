const Recipes = require("../models/recipe")

const getRecipes= async (req,res)=>{
    res.json({msg:"hello"})

}
const getRecipe= async (req,res)=>{
    res.json({msg:"hello"})

}
const addRecipe= async (req,res)=>{
    try{
        const {title,ingredients,istructions,time}=req.body
        if (!title||!ingredients||!istructions ||!time){
            res.json({msg:"required field can't be empty"})
        } 
        const newRecipe =await Recipes.create({
           title,ingredients,istructions,time 
        })
        return res.json(newRecipe)
    }
    catch(error){

    }
}
const editRecipe= async (req,res)=>{
    res.json({msg:"hello"})

}
const deleteRecipe= async (req,res)=>{
    res.json({msg:"hello"})

}

module.exports=
{getRecipes,
getRecipe,
addRecipe,
editRecipe,
deleteRecipe
};