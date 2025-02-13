let http = require('http');
let fs = require ('fs');

let server = http.createServer(function(req,res){
    // res.end(req.url);

    if(req.url === "/" || req.url === "home" || req.url === "index"){
        let myReadStr = fs.createReadStream('index.html');
        res.writeHead(200,{'Content-Type': 'text/html'});
        myReadStr.pipe(res);
    }else if (req.url === "/about"){
        let myReadStr = fs.createReadStream('about.html');
        res.writeHead(200,{'Content-Type': 'text/html'});
        myReadStr.pipe(res);
    }else if (res.url === "/fbresult"){
        let myReadStr = fs.createReadStream('fbresult.html');
        res.writeHead(200,{'Content-Type': 'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === "/api/fb"){
        var obj = {
            name:"Mg Mg",
            age:20
        }
        res.writeHead(200,{'Content-Type':'application/json'});

        res.end(JSON.stringify(obj));
    }else{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("No Result Found");
    }
});


server.listen(3000,function(){
    console.log("Server is Running");
});