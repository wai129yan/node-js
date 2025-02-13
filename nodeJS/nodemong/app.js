let http = require('http');

let server = http.createServer(function(req,res){
    let obj = {
        name : "brighter",
        group : "72coder",
        establish :7,
        color : "white"
    };
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(obj));
});

server.listen(3000,function(){
    console.log("Server is Running");
})