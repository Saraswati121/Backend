const express =require("express")
const fs=require("fs")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    
})

app.post("/",(req,res)=>{
    fs.readFile("./db.json","utf-8", (err,data)=>{
        const parsed=JSON.parsed(data)
        parsed.todos=[...parsed.todos,req.body];

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("todos updated");
        })
    })
})


app.put("/",(req,res)=>{

})

app.delete("/",(req,res)=>{

})

app.listen(8080,()=>{
    console.log("started")
})