
require("dotenv").config()
const express = require("express");
const app = express();
// const connectDb = require("connectDb")
// app.use(express.json())

const PORT = process.env.PORT || 3000;


// i don't know exactly what this func do ?
// i took it to the router but i don't know why i did it 
// app.get("/",(req,res)=>{
//     res.json({msg:"hello"})
// })

// app.use("/api",recipe);
// what is the diff between this and this i don't know
app.use("/recipe",require("./routes/recipe"));


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
// app.listen(PORT,(err)=>{
//     console.log(`server running on port ${PORT}`)
// })