let arg = process.argv.slice(2);
const crypto = require("crypto");
//console.log(process.argv)
switch(arg[0]){
    case "add":{
        const sum = Number(process.argv[3])+Number(process.argv[4])
        // for(let i=1;i<arg.length;i++){
        //     sum += +arg[i]
        // }
         console.log(sum)
        return sum
    }
    case "sub":{
        const sub = Number(process.argv[3])-Number(process.argv[4])
         console.log(sub)
        return sub
    }
    case "random":{
        const random = crypto.randomInt(1,10)
         console.log(random)
        
    }
    default:{
        return "whatever"
    }
}