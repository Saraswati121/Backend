const {Router}= require("express")
const dns= require("dns")
const dnsRoute= Router()

dnsRoute.post("/getmeip",(req,res)=>{
    const hostname= req.body.website_name;
    dns.lookup(hostname,(err,address,family)=>{
        if(err){
            res.send(err)
        }
            res.send(address)
    })
})

dnsRoute.get("/",(req,res)=>{
    res.send("dns routes")
})
module.exports=dnsRoute