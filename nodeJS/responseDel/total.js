// let express = require('express');

// let app = express();


// let staff = [
//     { name: "MgMg", age: 20, salary: 2000, isSingle: true },
//     { name: "Ag Ag", age: 30, salary: 2200, isSingle: false },
//     { name: "Mg Ag", age: 24, salary: 1200, isSingle: true },
//     { name: "Su Su", age: 29, salary: 2300, isSingle: false },
//     { name: "NuNu", age: 27, salary: 4500, isSingle: true },
// ]


// app.get('/users', (req, res) => {
//     res.json({ con: true, msg: "All Staff", result: staff })
// });


// app.post('/user', (req, res) => {
//     let newUser = req.body;
//     staff.push(newUser);
//     res.json({ con: true, msg: "New User Added!", result: staff })
// });

// app.patch('/user', (req, res, next) => {    /* Edit value*/
//     let name = req.body.name;
//     let age = req.body.age;
//     let salary = Number(req.body.salary);

//     let findUser = staff.find(s => s.name === name);
//     if (findUser) {
//         findUser.salary = salary;
//         findUser.age = age;
//         res.json({ con: true, msg: "Salary And Age Updated", result: findUser })
//     } else {
//         next(new Error("No User with that name "));
//     }
// })

// app.delete('/user/:name', (req, res, next) => {
//     let name = req.params.name;
//     let foundUser = staff.find(s => s.name === name);
//     if (foundUser) {
//         staff = staff.filter(s => s.name != foundUser.name);
//         res.json({ con: true, msg: "User Deleted", result: staff })
//     } else {
//         next(new Error("No User with that name "))
//     }
// });


// app.get('/users/ages', (req, res) => {  // Recap All list
//     // let names = staff.map (s=> s.name);
//     let ages = staff.map(s => s.age); //need to change age
//     res.json({ con: true, msg: "All Staff Names", result: { ages } }); //need to change result
// })


// app.get('/users/names', (req, res) => {
//     let names = staff.map(s => s.name);
//     let totalSalary = staff.reduce((total, s) => total + s.salary, 0);  //total salary 
//     res.json({ con: true, msg: "All Staff Names and Salary", result: { total: totalSalary } });
// })


// app.listen(3001, () => {
//     console.clear();
//     console.log("Server is Running at port 3000");
// });