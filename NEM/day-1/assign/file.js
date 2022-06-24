let arg = process.argv.slice(2);
//console.log(process.argv)
const fs= require("fs")

switch(arg[0]){
    case "create": {
        (async function createFile(){
            fs.promises.writeFile(arg[1],"")
        })()
    }
    break;
    case "append": {
        (async function append(){
            fs.promises.appendFile(arg[2],arg[1])
        })()
    }
   // break;
    default:{
        return "whatever"
    }
}
