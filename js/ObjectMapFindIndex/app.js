
let users = [
    {
        name:"MgMg",
        age:20,
        school:"Ygn",
    },
    {
        name:"AungAung",
        age:21,
        school:"Mdy",
    },
    {
        name:"Tun Tun",
        age:20,
        school:"Lashio",
    },
    {
        name:"Tun Aung",
        age:22,
        school:"Maymyo",
    }
];

users.forEach(user => {
    console.log(user);
});

console.log("***********");

users.map((user)=>{
    console.log(user);
})


// let ind = users.findIndex(user => user.age == 22 , user => user.school == "Mdy");

let ind = users.findIndex(user => user.age == 22 && user.school == "Maymyo");
console.log(ind);
console.log(users[ind]);



const numbers = [1,2,3,4,5,6];

const squareNumbers = numbers.map(num=>num * 3);

console.log(squareNumbers);

