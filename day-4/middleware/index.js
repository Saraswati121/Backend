const express = require("express")
//const grocryRouter=require("./routes/grocories.route")
const app=express()

 //app.use("/groceries",grocryRouter)
app.use((req,res,next)=>{
    console.log("Route", req.url, "Method:", req.method, "At:", new Date())
    next()
})

app.use((req,res,next)=>{
    if(!req.headers["apikey"]){
        return res.status(401).send("user not autoenticated")
    }
    next()
})

app.use((req,res,next)=>{
    const t1= performance.now()
    next()
    const t2= performance.now()
    console.log(t2-t1)
})

app.get("/login",(req,res)=>{
    res.send("hello world!")
})

app.post("/cart",(req,res)=>{
    setTimeout(()=>{
        res.send("hello world!")
    },1000)
})

app.delete("/user",(req,res)=>{
    res.send("hello world!")
})

app.put("/product",(req,res)=>{
    res.send("hello world!")
})
app.listen(8080)