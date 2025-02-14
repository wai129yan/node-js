
//function
//funtion with return value
//function with argument


function doIt(){
    console.log('I am doing it');
}
doIt();

function testNum(){
    let x = 20;
    let y = 10;
    let res = x > y ? 'x is greater than y' : 'x is less than y';
    console.log(res);
}
testNum();

//call the function

function testUsername(){
    return 'John';
}
console.log(testUsername());

console.log("*************");

let total  = testUsername() +  30;
console.log(total);


function addName(name){
    return "Mr." + name;
}

console.log(addName('John'));

function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(10, 20));

