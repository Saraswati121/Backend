
function add(a,b){
    return a+b
}

 function sub(a,b){
     return a-b
 }

 function mul(a,b){
     return a*b
 }

 function div(a,b){
     return a/b
 }

 function getRandomInt(a) {
    return Math.floor(Math.random() * a);
  }
  

//  console.log(add(1,2), sub(15,5), mul(5,5), div(15,5),getRandomInt(5))

module.exports= {add,sub,mul,div,getRandomInt}