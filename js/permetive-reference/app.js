
// what is statically typed language?
// statically typed language is a language in which the type of a variable is known at compile time.

// what is dynamically typed language?
// dynamically typed language is a language in which the type of a variable is known at run time.


// Primitive data types
let name = 'John'; // String Literal
let age = 30; // Number Literal
let con = true; // Boolean Literal
let color = null; // Null Literal
let list; // Undefined Literal
let sym = Symbol(); // Symbol Literal


// Reference data types

let person = ["one", "two", "three"]; // Array Literal

let obj = [
    {name: "John", age: 30}
]

console.log(typeof person);
console.log(typeof obj);

let audio = new Audio(); // Object Literal
let today = new Date(); // Date Literal

console.log(typeof audio);
console.log(typeof today);

// Primitive data types are stored in stack memory
// Reference data types are stored in heap memory