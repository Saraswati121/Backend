const express =require("express")
const fs=require("fs")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
            res.end(data)
    })
})

app.post("/",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"}, (err,data)=>{
        const parsed=JSON.parse(data)
        parsed.todos=[...parsed.todos,req.body];

        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("todos updated");
        })
    })
})


app.put("/",(req,res)=>{

})

app.delete("/:id",(req,res)=>{
    const {id} =req.params
    fs.readFile("./db.json", {encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data)
        parsed.todos=parsed.todos.filter(el => el.id !== id);

        fs.writeFile("./db.json", JSON.stringify(parsed),"utf-8",()=>{
            res.end("todo deleted")
        })
    })
})

app.listen(8080,()=>{
    console.log("started")
})