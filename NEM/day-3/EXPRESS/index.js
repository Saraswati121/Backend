const express= require("express")
const app= express()
const fs=require("fs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/home",(req,res)=>{
    res.send("welcome to homepage")
})

app.post("/datas",(req,res)=>{
    const dataClient= req.body
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed= JSON.parse(data)
        parsed.message=[...parsed.message,dataClient]

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.send("data added")
        })
    })
})

app.get("/messages",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed= JSON.parse(data)
        const msg= parsed.message
        res.send(JSON.stringify(msg))
        
    })
})


app.delete("/messages/:id",(req,res)=>{
    const {id}= req.params
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed= JSON.parse(data)
        const msg= parsed.message

        const remain= msg.filter((msg)=>msg.id != id)
        parsed.message= remain
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.send("message delete")
        })
})
})

app.post("/product",(req,res)=>{
    const data= JSON.stringify(req.body)
        fs.writeFile("./data.txt",data,{encoding:"utf-8"},(err,data)=>{
            res.send("products here")
        })
    })

app.listen(8080,()=>{
    console.log("server started")
})