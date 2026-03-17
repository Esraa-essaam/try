//require express
const express =require("express");

// call router from express
const router =express.Router();

//require controllers
const {getRecipes,getRecipe,addRecipe,
        editRecipe,deleteRecipe} =require("../controllers/recipe")


// method + path = functin 
router.get("/",getRecipes)//get all recipes
router.get("/:id",getRecipe)//get specific recipe
router.post("/",addRecipe)//add  recipe
router.put("/:id",editRecipe)//edit specific recipes
router.delete("/:id",deleteRecipe)//delete specific recipes


//export route
module.exports = router;