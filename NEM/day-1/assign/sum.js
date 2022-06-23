let arg = process.argv.slice(2);
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
    default:{
        return "whatever"
    }
}