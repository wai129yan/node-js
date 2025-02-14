let color = "red";

switch (color) {
    case "green": console.log("It's green"); break;
    case "blue": console.log("It's blue"); break;
    // case "red": console.log("It's red");break;
    case "yellow": console.log("It's yellow"); break;
    default: console.log("I can't guess");
}

console.log("hey now");


let score = 45;

switch (true) {
    case (score >= 100 || score <= 30):
        console.log("A");
        break;
    case (score >= 260 || score <= 40):
        console.log("B");
        break;
    case (score >= 40 || score <= 60):
        console.log("C");
        break;
    case (score >= 60 || score <= 80):
        console.log("D");
        break;
    default:
        console.log("Too Lower than others");
}


let num1 = 10;
let num2 = 5;

let operator = "+"; //replace with any operator

switch (operator) {
    case "-":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Undivided Number");
} 


let month = 8 ;

switch(month) {
    case 1:
    case 2:
    case 3:
        console.log("winter");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Spring");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Summer");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Fall");
        break;
    default:
        console.log("Invaild Month");
}