let express = require('express');
let app = express();

app.use(express.json()); //declar using express

let staff = [
    { name: "MgMg", age: 20, salary: 2000, isSingle: true },
    { name: "Ag Ag", age: 30, salary: 2200, isSingle: false },
    { name: "Mg Ag", age: 24, salary: 1200, isSingle: true },
    { name: "Su Su", age: 29, salary: 2300, isSingle: false },
    { name: "NuNu", age: 27, salary: 4500, isSingle: true },
]

app.get('/users', (req, res) => {
    res.json({ con: true, msg: "All Staff", result: staff })
});

app.post('/user', (req, res) => {
    let newUser = req.body;
    staff.push(newUser);
    res.json({ con: true, msg: "New User Added!", result: staff })
});

app.get('/user/:name/:age', (req, res, next) => {
    let name = req.params.name; //param
    let age = req.params.age; //param
    // let user = staff.find(s=> s.name === queryName);
    res.json({ con: true, msg: "Found User", result: { name, age } });
    // if(user){
    //     res.json({con:true,msg:"Found User",result:user});
    // }else{
    //     next(new Error("No User with that name!"));
    // }
})

// app.patch('/user/:name/:salary', (req, res) => {    
//     let name = req.params.name;
//     let salary = Number(req.params.salary);

//     let findUser = staff.find(s => s.name === name);
//     if (findUser) {
//         findUser.salary = salary;
//         res.json({con:true,msg:"Salary Updated",result:findUser})
//     } else {
//         next(new Error("No User with that name "));
//     }
// })

app.patch('/user', (req, res) => {    /* Edit value*/ 
        let name = req.body.name;
        let age = req.body.age;
        let salary = Number(req.body.salary);
    
        let findUser = staff.find(s => s.name === name);
        if (findUser) {
            findUser.salary = salary;
            findUser.age = age;
            res.json({con:true,msg:"Salary And Age Updated",result:findUser})
        } else {
            next(new Error("No User with that name "));
        }
    })


app.listen(3000, () => {
    console.clear();
    console.log("Server is Running at port 3000");
});