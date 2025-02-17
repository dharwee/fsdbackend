const fs=require('fs')
const read=()=>{
    fs.readFileSync("./data.txt","utf-8",(err,data)=>{
        if(err)
            console.log(err)
        else
        console.log(data)
    })

}
console.log("Before reading")
read();
console.log("After Reading")