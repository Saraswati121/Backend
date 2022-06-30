const https= require("http")
 const fs= require("fs")

 const sever= https.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("./simple.html",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
    }
    if(req.url==="/public"){
        fs.readFile("./public.txt",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
    }
    if(req.url==="/src"){
        fs.readFile("./src.txt",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
    }
    if(req.url==="/data"){
        fs.readFile("./data.txt",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
    }
 })

 sever.listen(8080,()=>{
    console.log("server started")
 })