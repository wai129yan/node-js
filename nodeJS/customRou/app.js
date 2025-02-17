let http = require("http");
let url = require("url");

let routes = {
  "GET": {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello World</h1>");
    },
    "/about": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is about</h1>");
    },
    "/about/details": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is about details slug</h1>");
    },
  },

  "POST": {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is post</h1>");
    },
    "/post": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is post slug</h1>");
    },
    "/post/detail": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is details</h1>");
    },
    "/post/detail/ring/bbn": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is post ring bbn details</h1>");
    },
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let url_par = url.parse(req.url, true);

  // Ensure route exists and handle the request
  if (routes[reqMethod] && routes[reqMethod][url_par.pathname]) {
    routes[reqMethod][url_par.pathname](req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};

let server = http.createServer(start);

server.listen(3000, () => {
  console.log("This server is running on port 3000");
});
