
// PI,E,round,abs,ceil,floor,sqrt,pow,min,max,random

// round() - returns the value of x rounded to its nearest integer
// abs() - returns the absolute value of x
// ceil() - returns the value of x rounded up to its nearest integer
// floor() - returns the value of x rounded down to its nearest integer
// sqrt() - returns the square root of x
// pow() - returns the value of x to the power of y
// min() - returns the number with the lowest value
// max() - returns the number with the highest value


console.log(Math.PI);
console.log(Math.E);


let num = 5.7;
console.log(Math.round(num));

let num1 = 5.1;
console.log(Math.abs(num1)); //it will remove the negative sign and it show will far from 0

let num2 = 5.1;
console.log(Math.ceil(num2)); //it will goes to upper value

let num3 = 5.9;
console.log(Math.floor(num3)); //it will goes to lower value

let num4 = 64;
console.log(Math.sqrt(num4));

let num5 = 2;
console.log(Math.pow(num5, 3));


let num6 = 2;
let num7 = 3;
console.log(Math.min(num6, num7));
console.log(Math.max(num6, num7));

console.log(Math.random(num6)); //it will give random number between 0 to 1
console.log(Math.random(num6) * 10); //it will give random number between 0 to 10
// console.log(Math.floor(Math.random(num6) * 10) + 1); //it will give random number between 1 to 10

for (let i = 0; i < 10; i++) {
    let num = (Math.random() * 8) + 1;
    console.log(Math.floor(num));
}


let sideLength = 5;

// Calculate area of the square (side^2)
let area = Math.pow(sideLength, 2);
console.log(area);  // Output: 25