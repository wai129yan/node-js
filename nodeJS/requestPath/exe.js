
let http = require ('http');

let routes = {
    // "Get" : () => {
    //     console.log("This is Get");
    // },

    // "Post" : () => {
    //     console.log("This is Post");
    // }

    "GET" : {
        "/" :() => console.log("Method Get and path"),
        "/login": () => console.log("This url is login "),
        "/member/details" : () => console.log("This is details of member")
    },
    "Post" : {
        "/ ": () => console.log("This is post url "),
        "/post/update" : () => console.log("This is post update"),
        "/post/update/detail" : () => console.log("This is post update details")

    }
}
let start = (req,res) => {
    let reqMethod = req.method;
    // let resMethod = res.method;
    console.log(req.url);
    // console.log(res.url);
}

let server = http.createServer(start);

server.listen (4000,() => {
    console.log("The server is running")
})