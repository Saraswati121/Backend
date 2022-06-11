// const mongoose= require("mongoose")
// const {Schema,model}= require("mongoose")

// const connection= mongoose.connect("mongodb://localhost:27017/IMDB")

// const MovieSchema= new Schema({
//     title: {type: String, required: true},
//     rating: Number,
//     releaseDate: Date,
//     earning: {type: Number, default:1000, min:0, max:10000},
//     cast: {type: [String]},
//     language: {type: String, enum: ["English", "Hindi"]}
// })

// const Movie= model("movie", MovieSchema)

// const main= async () =>{
//     const conn= await connection;
//     console.log("connect successfully")

//     // const movies= await Movie.find()
//      const movies= await Movie.find({language: "Hindi"}).limit(1).skip(1)
//     // const movies= await Movie.find({language: "Hindi"}).sort({title:1})
//     console.log("All movies", movies)

    
//     conn.disconnect()
// }

// main();

/*
   // const movie = new Movie({
    // title: "Bhaijann",
    // rating: 5.0,
    // releaseDate: new Date(),
    // earning: 3000,
    // cast: ["salman","karina", "ruhi"],
    // language: "Hindi"
    // })

    // await movie.save()
*/




const express = require ("express")
const {Movie,connection}= require("./db")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/movies", async (req,res)=>{
    const params= req.query
    const movies = await Movie.find(params)
    return res.json(movies)

})

app.post("./movies", (req,res)=>{

})

app.listen(8081, async ()=>{
    try{
        await connection;
        console.log("connected to db")
    }catch{
        console.log("failed to connect")
    }

    console.log("server started")
})