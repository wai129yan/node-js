

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);



const values = [10, null, 20, undefined, 30, NaN, 40];
const validValues = values.filter(value => value != null);
const validVal = values.filter(value => value != 40);

console.log(validValues);  
console.log(validVal);




const users = [
    {name: 'John', age: 34},
    {name: 'John', age: 20},
    {name: 'camy', age: 24},
    {name: 'cane', age: 24},
];

// const activeUsers = users.filter(user => user.name === 'John');
// console.log(activeUsers);

const activeUsers = [];

// for loop
// for (let i = 0 ; i < users.length; i ++){
//     if (users[i].name === 'John') {
//         activeUsers.push(users[i]);
//     }
// }

// console.log(activeUsers);


//foreach()

users.forEach(user => {
    if (user.age = 20){
        activeUsers.unshift(user)
    }
})

console.log(activeUsers);