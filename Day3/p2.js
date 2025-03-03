const http= require('http');
const server= http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url ==='/setdata' && req.method==='POST')
    {
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        });

        req.on('end',()=>{
            let data=JSON.parse(body);
            console.log(data);
            res.end(JSON.stringify({messagae:'Data received'}));
        });
    }
    




})

server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err)
    else
    console.log("Server started on a port 9000")
})