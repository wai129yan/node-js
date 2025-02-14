// let http = require('http');

// let server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'application/json'});

//     let obj = {
//         name : "Mg Mg",
//         age : 30,
//         family : {
//             father : "U Mya",
//             mother : "Daw Nu"
//         }
//     };
//     res.end(JSON.stringify(obj));
// });


// server.listen(3000,function(){
//     console.log("Server is running");
// })

let http = require('http');

let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'application/json'});

    let obj = {
        name : "Mg Mg",
        age : 12,
        major : "math",
        car: "bmw"
    }

    res.end (JSON.stringify(obj));
})

server.listen(3000,function(){
    console.log("Server is running");
})