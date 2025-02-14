// let x = 20;
// let y = 50;

// // let z = x > y;
// let z = y != x ;
// console.log(z);

let age  = 20 ;
let canVote = age >=18 ? "Yes" : "No";
console.log(canVote);


let number = 5 ;
let result = number & 2 === 0 ? "Even" : "Odd";
console.log(result);

let username = "";
let displayName = username ? username : "Guest";
console.log(displayName);

let score = 85;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";
console.log(grade)


let isDarkMode = true ;
let theme = {
    background: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black"
};

console.log(theme);


let isLoggedIn = true ;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message)