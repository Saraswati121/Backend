const http= require("http")
const fs= require("fs")

 const server= http.createServer((req,res)=>{
    if(req.url === "/home"){
        res.end("welcome home page")
    }
    if(req.url==="/file"){
        fs.readFile("./text.text",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
    }
    if(req.url==="/html"){
        fs.readFile("./simple.html",{encoding:"utf-8"},(err,data)=>{
            res.end(data)
        })
    }
        // res.end("hello world!")
 })

 server.listen(8080,() =>{
    console.log("server started")
 })