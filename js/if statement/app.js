let age = 20;

if(age == 6) {
    console.log("Age is 6");
} else if (age == 9){
    console.log("Age is 9");
} else if(age == 14){
    console.log ("Age is 13");
} else if (age == 19){
    console.log ("Age is 19");
} else {
    console.log("Age is invalid number");
}


let totalAmount = 120 ;

if(totalAmount >= 120 || totalAmount >= 700){
    console.log("You get a 10% discount");
} else {
    console.log("Spend $100 or more to get a discount");
}



let accountBalance = 1500;
let withdrawAmount = 600;

if (withdrawAmount <= accountBalance) {
  console.log("Withdrawal successful. Remaining balance: $" + (accountBalance - withdrawAmount));
} else {
  console.log("Insufficient funds for this transaction.");
}



let email = "example@gmail.com";

if(email.includes("@") && email.includes(".")) {
    console.log("Valid email address");
}else {
    console.log("Invalid email address");
}


let name = "" ;
let mail = "test@gmail.com" ;

if(name === "" || mail === ""){
    console.log ("Please fill out all fields");
} else {
    console.log("Form submitted successfully");
}


let temperature = 8 ;

if(temperature > 30){
    console.log("It is hot outside.Stay hydrated");
} else if (temperature > 20 ){
    console.log ("The weathe is pleasant . Enjoy Your day");
} else if (temperature > 10){
    console.log ("It's a hit chilly. Wear a light jacket");
} else{
    console.log("It's cold outside.Stay warm");
}