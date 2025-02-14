// let express = require('express');
// let app = express();

// app.get('/',function(req,res){

//     res.send('Home Page')
// });

// app.listen(3000);



let express = require('express');
let app = express();

app.get ('/',function(req,res){
    res.send("Hello");
})
app.get('/about',function(req,res){
    res.send("my test");
})

app.get ('/about/mypage',function(req,res){
    res.send("my data page");
})

app.listen(4000);