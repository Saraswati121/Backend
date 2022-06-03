
const express =require("express")
const fs=require("fs")

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("hello world!")
})


//read product
app.get("/products",(req,res)=>{
    //res.end(JSON.stringify([1,2,3,4]))
    // res.end(JSON.stringify({a:"a",b:"b"}))
    // res.send([1,2,3,4]) 
    fs.readFile("./db.json","utf-8",(err,data)=>{
        res.end(data)
    })
})


//create product
app.post("/products",(req,res)=>{
   fs.readFile("./db.json", {encoding:"utf-8"},(err,data)=>{
       const parsed=JSON.parse(data);
       parsed.products=[...parsed.products, req.body];

       fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
           res.end("products here")
       })
   })
})

//delete product
app.delete("/products/1",(req,res)=>{
    fs.readFile("./db.json", {encoding:"utf-8"},(err,data)=>{
        const parsed=JSON.parse(data);
        parsed.products=parsed.products.filter(el => el.id !== 1);

        fs.writeFile("./db.json",JSON.stringify(parsed),{encoding:"utf-8"},()=>{
            res.end("products deleted")
        })
    })
})

//updated product 
app.put("/products/1",(req,res)=>{
    fs.readFile("./db.json", {encoding:"utf-8"},(err,data)=>{
        
    })
})

app.listen(8080,()=>{
    console.log("started on http://localhost:8080")
})