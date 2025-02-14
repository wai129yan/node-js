
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num){
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]


let nums = [1, 2, 3, 4, 5];
let dou = nums.map(num => num * 2);
console.log(dou); // [2, 4, 6, 8, 10]


const users =[
    {name: 'Asif', age: 25},
    {name: 'Rahim', age: 30},
    {name: 'Karim', age: 35}
];

const userNames = users.map(user => user.name);
const userAges = users.map(user => user.age);
console.log(userNames); // ['Asif', 'Rahim', 'Karim']
console.log(userAges); // [25, 30, 35]


const numbs = [10, 20, 30, 40, 50];
const result = numbs.map((num, index) => {
    return {
        index: index,
        value: num
    };
});
console.log(result); // [{index: 0, value: 10}, {index: 1, value: 20}, {index: 2, value: 30}, {index: 3, value: 40}, {index: 4, value: 50}]



const cartItems = [
    { name : 'Laptop', price: 1000, quantity: 1},
    { name : 'Mouse', price: 10, quantity: 2},
    { name : 'Keyboard', price: 25, quantity: 1}
];

const cartTotal  =  cartItems.map(item=> item.price * item.quantity);
console.log(cartTotal); // [1000, 20, 25]



const people = [
    {name:'Asif', age: 25 , address: 'Dhaka'},
    {name:'Rahim', age: 30 , address: 'Chittagong'},
    {name:'Karim', age: 35 , address: 'Rajshahi'},
    {name:'Jabbar', age: 40 , address: 'Khulna'}
];

const peopleInfo = people.map(person => {
    return `${person.name}is ${person.age} years old and lives in ${person.address}`
});

console.log(peopleInfo); // ['Asif is 25 years old and lives in Dhaka', 'Rahim is 30 years old and lives in Chittagong', 'Karim is 35 years old and lives in Rajshahi', 'Jabbar is 40 years old and lives in Khulna']


const celsiusTemp = [0, 10, 20, 30, 40, 50];

const fahrenheitTemp = celsiusTemp.map(temp => (temp *9/5) + 32);

console.log(fahrenheitTemp); // [32, 50, 68, 86, 104, 122]


const pages = [
    {title: 'Home', url: '/'},
    {title: 'About', url: '/about'},
    {title: 'Services', url: '/services'},
    {title: 'Contact', url: '/contact'}
];

const links = pages.map(page => page.url);

console.log(links); // ['<a href="/">Home</a>', '<a href="/about">About</a>', '<a href="/services">Services</a>', '<a href="/contact">Contact</a>']