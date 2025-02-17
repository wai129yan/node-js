let http = require("http");
let url = require("url");

let routes = {
    "GET": { // Changed to uppercase
        "/": (req,res) =>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.end("<h1>Post</h1>");
        } ,
        "/get/info": () => console.log("This is GetInfo"),
    },

    "POST": { // Changed to uppercase
        "/post": (req,res) =>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.end("<h1>Post</h1>");
        } ,
        
    },
};

let start = (req, res) => {
    let reqMethod = req.method.toUpperCase();  // Ensure the method is uppercase
    let urlT = url.parse(req.url, true);
    let routesR = routes[reqMethod] && routes[reqMethod][urlT.pathname];

    if (routesR) {
        // Call the route's callback
        routesR();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Request processed");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route not found");
    }
};

let server = http.createServer(start);

server.listen(3000, () => {
    console.log("This server is running on port 3000");
});
