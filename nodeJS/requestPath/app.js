let http = require('http');

let routes = {
    // "GET" : () => {
    //     console.log("GET Method");
    // },
    // "POST": () => {
    //     console.log("POST Method");
    // } 

    "GET" : {
        "/" : () => console.log("Method GET and path /"),
        "/home" : () => console.log("Method Get and path /home"),
        "/home/about" : () => console.log("Method Get and Path /home/about")
    },

    "POST":{
        "/new" : () => console.log("Method Post and Path /new"),
        "/new/data" : () => console.log("Method Post and Path /new/data")
    }







}
let start = (req,res)=>{
    // routes[req.method]();
    let reqMethod = req.method;
    console.log(req.url);
}

let server = http.createServer(start);

server.listen(3000,()=>{
    console.log('server is running');
})