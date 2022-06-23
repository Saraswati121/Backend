let arg = process.argv.slice(2);
const crypto = require("crypto");
//console.log(process.argv)
if(arg[0]==="add"){
    const sum = Number(process.argv[3])+Number(process.argv[4])
    console.log(sum);
    return sum

}
else if(arg[0] === "sub"){
    const diff = Number(process.argv[3])-Number(process.argv[4]);
    console.log(diff);
    return 
}
else if(arg[0] === "mult"){
    const pro = Number(process.argv[3])*Number(process.argv[4]);
    console.log(pro);
    return 

}
else if(arg [0]=== "divide"){
    const ans = Number(process.argv[3])/Number(process.argv[4]);
    console.log(ans);
    return 
}
else if(arg [0]=== "sin"){
    const ans = Math.sin(Number(process.argv[3]));
    console.log(ans);
    return 
}
else if(arg[0] === "cos"){
    const ans = Math.cos(Number(process.argv[3]));
    console.log(ans);
    return
}
else if(arg[0] === "tan"){
    const ans = Math.tan(Number(process.argv[3]));
    console.log(ans);
    return
}
else if(arg[0] === "random"){
    console.log(crypto.randomInt(0,10));
    return
}