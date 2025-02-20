const fs=require('fs');
const write=(data)=>{
    //const data="written through async"
    fs.writeFile("./mydir/data.txt",data,(e)=>{
        if(e)
            console.log(e)
        else
        console.log("file written sucessfully")
    });
}
console.log("hi")
write("hello from async");
console.log("bye")






































