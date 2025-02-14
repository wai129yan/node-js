let http = require('http');

let server = http.createServer(function(req,res){
    let obj= {
        name : "Brighter Myanmar ",
        group : "72Coder",
        age : 33,
        major : "zoology"
    } 

    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(obj));

});

server.listen(3000,function(){
    console.log("server is running");
})



// Set-ExecutionPolicy Restricted
// Set-ExecutionPolicy Unrestricted
// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
// PowerShell - Administrator Mode