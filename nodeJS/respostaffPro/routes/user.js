const express = require('express');
const router = express.Router();

let users = [
    {name:"AungAung",age:30,salary:5000,address:"yangon"},
    {name:"AungHla",age:23,salary:4500,address:"mandalay"},
    {name:"MgKyi",age:32,salary:3300,address:"Bago"},
    {name:"KgMan",age:18,salary:8570,address:"Bagan"},
    {name:"MyoThet",age:36,salary:7340,address:"Myike"}
]


app.get('/users', (req, res) => res.json({ con: true, msg: "All Users", result: users }));
app.post('/user', (req, res) => {
    let newStaff = req.body;
    users.push(newStaff);
    res.json({ con: true, msg: "New Staff Added!", result: users })
})
app.patch('/user/:name', (req, res, next) => {
    let name = req.params.name;

    let salary = req.body.salary;
    let address = req.body.address;

    let foundUser = users.find(s => s.name === name);
    if (foundUser) {
        foundUser.salary = salary;
        foundUser.address = address;
        res.json({ con: true, msg: "Staff Found", result: foundUser })
    } else next(new Error("This is Error"));

});

// delete

app.delete('/user/:name', (req, res, next) => {
    let name = req.params.name;
    let foundUser = users.find(s => s.name === name);
    if (foundUser) {
        users = users.filter(s => s.name != name);
        res.json({ con: true, msg: "User Deleted", result: users })
    } else next(new Error('This is no deleted'))
});


module.exports = router;