let age = 20;

if (age >=18) {
    console.log("You are eligible to vote");
}


let ag = 16;
if(age >=18 ){
    console.log("You are eligible to vote");
}else {
    console.log("You are not eliglible to vote");
}

let score = 75;

if(score >= 90){
    console.log("Grade A");
}else if (score >= 75){
    console.log("Grade:B");
}else{
    console.log("Grade C");
}

/* Ternary Operator*/ 

let num = 30 ;
let message = num >=18 ? "Eligible to vote" : "Not eligible to vote";
console.log(message);


let ageA = 25;
let hasID = true ;

if(ageA >= 18 && hasID) {
    console.log("You can enter the club");
}else{
    console.log("You cannot enter");
}

let number = 7;
if(number > 0 ) {
    console.log("The number is positive");
}else if(number < 0){
    console.log("The number is negative");
}else {
    console.log("The number is zero");
}


let trafficLight = "white";

if(trafficLight === "green") {
    console.log("You can go");
}else if (trafficLight === "yellow") {
    console.log("Get ready to stop");
}else if (trafficLight === "red"){
    console.log("stop");
}else{
    console.log("Invalid traffic light color")
}


let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345") {
    console.log("Login successful");
}else if (username !== "admin") {
    console.log("invalid Username");
}else {
    console.log("Incorrect password");
}


let numm = 18 ;
let hasParentalConsent = false;

if(numm >= 58 || hasParentalConsent) {
    console.log("You can watch the movie");
}else{
    console.log("You cannot watch the movie");
}


