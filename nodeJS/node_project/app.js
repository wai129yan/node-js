let express = require('express');
let app = express();
let path = require('path');

// app.get('/',(req,res) => res.send ("Hello World"));
// app.get('/about',(req,res) => res.send("Hello This is about"));
// app.get('/names',(req,res) => {
//     res.sendFile(path.join(__dirname,"./index.html")); // how to response file


app.get('/',(req,res) => {

    res.json({con:true,msg:"Success",result:{data:"DATA"}})

    //res.sendFile();
    // res.send("Name List Responses");
    // res.json ({names : ["MgMg","AungAung","TunTun"], age : [20,30,40], address:["Yangon","mandalay","Naypyitaw"]}); // how to response json
});

app.use(express.json()); // declare to use for json
app.post('/',(req,res) => {
    let bodyData = req.body;
    console.log("Post Request Received ");
    res.json({con:true,msg:"success",result:{bodyData}});
})


app.listen(3000,() =>  {
    // console.clear();   delete old data
    console.log("Dir Name is " , __dirname);
    console.log("server is running");
});