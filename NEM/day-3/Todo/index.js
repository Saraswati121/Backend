const express=require("express")
const fs=require("fs")
const { request } = require("http")

const app=express()

app.use(express.urlencoded({encoding:true}))
app.use(express.json())

app.post("/",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data)
        parsed.list=[...parsed.list,req.body];

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.send("Todo list created")
        })
    })
})

app.get("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.send(data)
    })
})

app.delete("/:id",(req,res)=>{
    const {id}= req.params
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed=JSON.parse(data)
        parsed.list=parsed.list.filter(el => el.id != id)

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("list deleted")
        })
    })
})

app.put("/:id",(req,res)=>{
    const {id}= req.params
    fs.readFile("./db.json","utf-8",(err,data)=>{
        const parsed= JSON.parse(data)
        parsed.list.map((el)=>{
            if(el.id==id){
                el.list= req.body.list
            }
        })
        parsed.list = [...parsed.list];
        
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("list deleted")
        })
    })
})
app.listen(8080,()=>{
    console.log("server started")
})