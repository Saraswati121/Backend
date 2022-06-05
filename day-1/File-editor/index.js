let [operation,file,...args] = process.argv;
const fs=require("fs")

fs.readFile("./test.txt", {encoding:"utf-8"},(err,data)=>{
    console.log(data)
})

if(operation==="delete"){
    fs.unlink(file,(err)=>{
        if(err){
            console.log(err);
        } 
        console.log(`${file} was deleted`);
    })
}

else if(operation==="rename"){
    fs.rename(file, args[0], (err) => {
     if (err) console.log(err);
     console.log('Rename complete!');
   });
 }