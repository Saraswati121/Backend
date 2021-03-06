const fs= require("fs")
const http= require("http")

const server= http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("./",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.setHeader("content-type", "application/json")
            res.end(data.join("\n"))
        })
    }

    if(req.url==="/node_modules"){
        fs.readdir("./node_modules",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.setHeader("content-type","application/json");
            res.end(data.join("\n"));
        })
    }

    if(req.url==="/src"){
        fs.readdir("./src",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.setHeader("content-type","application/json");
            res.end(data.join("\n"));
        })
    }

    if(req.url==="/public"){
        fs.readdir("./public",(err,data)=>{
            if(err){
                res.end(err)
            }
            res.setHeader("content-type","application/json");
           
            res.end(data);
        })
    }

server.listen(8080,()=>{
    console.log("server started on localhost:8080")
})

})