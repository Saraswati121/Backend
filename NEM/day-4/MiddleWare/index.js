const express= require("express")
const app= express()
const cors= require("cors")
const dnsRoute= require("./routes/dns.routes")

app.use(cors())
app.use(express.json());
app.use("/dns",dnsRoute)

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.listen(8080,()=>{
    console.log("server started")
})