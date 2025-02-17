let http = require('http');

let start = (req,res) => {
    // res.writeHeader(200, { "Content-type": "text/html" });
    // res.end("<h1>Hello World</h1>");

    res.writeHead(200,{"Content-typ": "text/html"});
    if(req.method === "GET"){
        res.end("<h1>This is Get Method</h1>");
    }else {
        res.end("<h1>This is Post Method</h1>");
    }
}

let server = http.createServer(start);

server.listen(3000,()=>{
    console.log('server is running');
})