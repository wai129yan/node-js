let express = require('express');
let app = express();

app.use(express.json());


let products = [
    {name:"T-Shirt",price:3000,colors:["red","blue","white"]},
    {name:"Blouse",price:4600,colors:["pink","white","black"]},
    {name:"Bike",price:7800,colors:["black","white","red"]},
    {name:"TV",price:3600,colors:["pink","white","black"]},
    {name:"Phone",price:46000,colors:["pink","white","black"]},
]


// Get / Post

// app.get('/users',(req,res) => res.json({con:true,msg:"All Users",result:staff}));
// app.post('/user',(req,res) => {
//     let newStaff = req.body;
//     staff.push(newStaff);
//     res.json({con: true, msg: "New Staff Added!", result: staff})
// })
// app.patch('/user/:name',(req,res,next) => {
//     let name = req.params.name;

//     let salary =req.body.salary; 
//     let address = req.body.address;

//     let foundUser = staff.find(s => s.name === name);
//     if(foundUser){
//         foundUser.salary = salary;
//         foundUser.address = address;
//         res.json({con:true,msg:"Staff Found",result:foundUser})
//     } else next(new Error("This is Error"));
    
// });

// // delete

// app.delete('/user/:name',(req,res,next) => {
//     let name = req.params.name;
//     let foundUser = staff.find(s => s.name  === name);
//     if(foundUser){
//         staff = staff.filter(s => s.name != name);
//         res.json({con:true,msg:"User Deleted",result:staff})
//     }else next(new Error('This is no deleted'))
// });


/* Product */ 


app.get('/products',(req,res) => res.json ({con:true,msg:"All Products",result:products}));
app.post('/product',(req,res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json ({con:true,msg:"All Products",result:products})
})

app.patch('/product/:name',(req,res,next) => {
    let name = req.params.name;

    let price =req.body.price; 
    let colors = req.body.colors;

    let foundPro = products.find(p => p.name === name);
    if(foundPro){
        foundPro.price = price;
        foundPro.colors = colors;
        res.json({con:true,msg:"Staff Found",result:foundPro})
    } else next(new Error("This is Error"));
    
});

app.delete('/product/:name',(req,res,next) => {
    let name = req.params.name;
    let foundPro= products.find(s => s.name  === name);
    if(foundPro){
        products = products.filter(s => s.name != name);
        res.json({con:true,msg:"User Deleted",result:products})
    }else next(new Error('This is no deleted'))
});




app.listen(4000,() => {
    console.log("The port is running at 3000")
});