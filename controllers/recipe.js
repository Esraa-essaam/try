const Recipes = require("../models/recipe")

const getRecipes= async (req,res)=>{
    const recipes =await Recipes.find(req.body)
    return res.json(recipes)
}
const getRecipe= async (req,res)=>{
    res.json({msg:"hello"})

}
const addRecipe= async (req,res)=>{
    
        const {title,ingredients,instructions,time}=req.body
        if (!title||!ingredients||!instructions ||!time){
           return res.json({msg:"required field can't be empty"})
        } 
        const newRecipe =await Recipes.create({
           title,ingredients,instructions,time 
        })
        return res.json(newRecipe)
    
   
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