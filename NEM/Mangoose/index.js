const express= require("express")
const {connection,studentModel}= require("./db")

const app= express()
app.use(express.json())

app.get("/student",async (req,res)=>{
    const {pageNo,perPage}= req.query;
    const result= await studentModel.find(req.query).skip((pageNo-1)*perPage).limit(perPage)
    res.send(result)
})

app.post("/student",async (req,res)=>{
    const result= await studentModel(req.body)
    await result.save()
     res.send(result)
})
app.listen(8080,async ()=>{
    try{
        await connection
    }
    catch{
        console.log("failed to connect")
    }
    console.log("server started")
})