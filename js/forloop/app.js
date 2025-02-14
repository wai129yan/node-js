
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }


// Formal Loop
for(let i = 0; i < 31; i++){
    console.log("Hello World");
}

for(let i = 1; i < 31; i++){
    console.log("Hello World");
}

for(let i = 2; i < 31; i++){
    console.log("Hello World");
}

// Array list

let numbers = [1,2,3,4,5,6,7,8,9];
let evenNumbers = [];

for (let i = 0;i < numbers.length;i++){
    if(numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log("Even Numbers: " , evenNumbers);


// Ecommerce Products
let products = [
    {name:"laptop",price:1000},
    {name:"Phone",price:700},
    {name:"HeadPhones",price:150}
];

for (let i = 0; i < products.length; i++) {
    console.log(`Product:${products[i].name},
        Price: $ ${products[i].price}`);
}

// Generate Dynamic List

let  numberOfUsers = 5 ;
let  usernames = [];

for (let i = 1; i <= numberOfUsers; i++) {
  usernames.push(`user${i}`)
}
console.log("Username:" , usernames);


//  Calculating Total Price of Items in a Shopping Cart

let cart = [
    {item:"shirt", price:20},
    {item:"jeans", price:40},
    {item:"shoes",price:60}
];

let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
}
console.log("Total price:" , totalPrice);


// Sending Emails to Multiple Recipients

let emailRecipients = ["alice@example.com", "bob@example.com", "charlie@example.com"];

for (let i = 0; i < emailRecipients.length; i++) {
    console.log(`Sending email to: ${emailRecipients[i]}`);
    
}