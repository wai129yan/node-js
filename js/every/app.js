const users = [
    { name: 'John', status: 'active' },
    { name: 'Jane', status: 'inactive' },
    { name: 'Doe', status: 'active' }
];


const allActive = users.every(user => user.status === 'active');

console.log(allActive);



const products = [
    { name: 'Shirt', inStock: true },
    { name: 'Shoes', inStock: true },
    { name: 'Hat', inStock: true }
];


const allInStock = products.every(product => product.name === 'Shirt');

console.log(allInStock);


const produc = [
    { name: 'Shirt', price: 30 },
    { name: 'Shoes', price: 50 },
    { name: 'Hat', price: 25 }
];


const allAbove20 = produc.every(product => product.price >= 25);

console.log(allAbove20);
// Output: true


