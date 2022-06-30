// const x= require("is-even")
// console.log(x(5))
// const {sum,mul}= require("./test")
// console.log(sum(5,2),mul(5,2))
// const os=require("os")
// console.log(os.cpus()[0].times)

// const fs=require("fs")
// fs.readFile("./test.js",{encoding:"utf-8"},(err,data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
const fs=require("fs")
console.log(fs.readFileSync("./test.js",{encoding:"utf-8"}))