const mongoose = require('mongoose')
const connection = mongoose.connect("mongodb://localhost:27017/web16")
// const connectdb= async ()=>{
//     const connect=await connection
//     console.log("connected")

    // const student1= new studentModel({
    //     name:"diksha",
    //     age:24,
    //     city:"pune",
    //     hobbies:["singing","dancing"]
    // })

    // await student1.save()
    // console.log("updated")
//    const saveStudent1= await studentModel.find({city:"delhi"})
//     console.log(saveStudent1)


//     connect.disconnect()
// }
// connectdb()

const studentSchema= mongoose.Schema({
    name:{type:String, required:false},
    age:{type:Number, required:true},
    city:{type:String, required:true},
    hobbies:{type: Array, required:true}
})

const studentModel= mongoose.model('student', studentSchema)

module.exports={connection, studentModel}