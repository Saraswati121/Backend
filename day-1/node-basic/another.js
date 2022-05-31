//functions
function addFive(a){
    return a+5;
}

function addTen(b){
    return b+10
}

//array
const arr=[1,2,3]

//module.exports=arr


//obj
const obj={a: "hello", b:"swati"}

//module.exports=obj

//CJS
// module.exports={
//     arr,
//     obj,
//     addFive,
//     addTen
// }

//ESM

export{arr,obj}