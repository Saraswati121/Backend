const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/IMDB");

const MovieSchema = new mongoose.Schema({
    title:{type:String,required:true},
    rating:Number,
    releasedate:Date,
    earning:{type:Number,default:1000,min:0,max:10000},
    cast:{type:[String]},
    language:{type:String,enum:["Hindi","English"]}
})

const Movie = mongoose.model("movie",MovieSchema);
module.exports = {Movie, connection};