
const http = require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    //console.log(req.headers)
    
    // res.setHeader("content-type", "text/html")
    // res.end("<h1>saraswati</h1>")

    if(req.url === "/"){
        fs.readFile("./index.html",{encoding: "utf-8"},(err,data)=>{
            if(err){
                console.log("Error occurred")
            }
            res.setHeader("content-type", "text/html")
            res.end(data)
        })
    }

    if(req.url === "/products"){
       return  res.end(JSON.stringify([1,2,3,4,5]))
    }

    if(req.url ==="/file"){
        // const data= fs.readFileSync("./data.txt",{encoding: "utf-8"})
        // return res.end(data)

        fs.readFile("./data.txt",{encoding: "utf-8"},(err,data)=>{
            if(err){
                console.log("Error occurred")
            }
            res.end(data)
        })
    }
    
})

server.listen(8080,()=>{
    console.log("Server started on port http://localhost:8080/")
})

