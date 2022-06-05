const {Router} =require("express")

const grocryRouter= Router()

grocryRouter.get("/",(req,res)=>{
    res.send("grocery list:1,2,3")
})

module.exports = grocryRouter;