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
    "/post/:id": (req, res, id) => {  // This will match /post/:id where :id is a dynamic segment
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>This is post with ID: ${id}</h1>`);
    },
  },

  "POST": {
    "/post": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is post slug</h1>");
    },
    "/post/:id/detail": (req, res, id) => { // Matching /post/:id/detail
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>This is detail for post ID: ${id}</h1>`);
    },
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let url_par = url.parse(req.url, true);

  // Check if the route exists and handle the request
  if (routes[reqMethod]) {
    let matchedRoute = null;
    
    // Iterate through the routes for the current method and check for a match
    for (let route in routes[reqMethod]) {
      let regex = new RegExp(`^${route.replace(/:([a-zA-Z0-9_]+)/g, '([^/]+)')}$`);
      let match = url_par.pathname.match(regex);
      
      if (match) {
        matchedRoute = route;
        // Extract the dynamic path parameter(s)
        let params = match.slice(1); // Get the matched parts (e.g., [id])
        routes[reqMethod][route](req, res, ...params); // Pass params to route handler
        break;
      }
    }

    if (!matchedRoute) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Route not found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};

let server = http.createServer(start);

server.listen(3000, () => {
  console.log("This server is running on port 3000");
});
