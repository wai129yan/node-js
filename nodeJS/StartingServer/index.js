let http = require('http');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type": "text/html"}); //prepare the header
    res.write("<h1>Hello World</h1>"); //run the code
})

server.listen(3000,()=>{
    console.log("server running in 3000");
});