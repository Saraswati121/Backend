const mongoose = require('mongoose')

const connectdb= async ()=>{
    const connect=await mongoose.connect("mongodb://localhost:27017/web16")
    console.log("connected")
    connect.disconnect()
}
connectdb()

const studentChm