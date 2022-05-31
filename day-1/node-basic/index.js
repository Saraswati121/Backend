// const isEven=require("is-even")
// console.log(isEven(2))  //2 is even op is(true).

//CJS
// const x= require("./another")    //[x] = [1] [x,y]=[1,2]
// console.log(x)                   // {a}=hello  {b}=swati


//ESM

// import {obj} from './another.js'

// console.log(obj)


const fs=require("fs")
 const os=require("os")
 const data=fs.readFileSync("./test.txt", {encoding:"utf-8"})
  console.log(data)
// console.log(os.cpus())