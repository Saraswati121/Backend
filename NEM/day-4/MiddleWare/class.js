const express= require("express")
const app= express()
const {performance}= require("perf_hooks")

const qurychk=(req,res,next)=>{
    const {q}= req.query
    if(q=="admin"){
        res.send("some routes")
    }
}

const adminchk=(req,res,next)=>{
    if(req.query.admin === "true"){
        next()
    }
    else{
        res.send("not admin")
    }
}
app.use(qurychk,adminchk)

app.use((req,res,next)=>{
    console.log("a")
    next()
    console.log("b")
})

app.use((req,res,next)=>{
   console.log(performance.now())
    next()
    console.log(performance.now())
})

// app.use((req,res,next)=>{
//     console.log("c")
//     next()
//     console.log("d")
// })

app.get("/",(req,res)=>{
    console.log(req.query)
    res.send("homepage")
})

app.listen(8080,()=>{
    console.log("server started")
})