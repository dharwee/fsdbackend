const fs=require('fs');
fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err)
        console.log(err)
    else
    console.log(data)
})
//readFileSync does not take callbacks. whereas readFile takes a function or a callback