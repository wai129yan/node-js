
let num = 20;
console.log(num);
console.log (typeof num);

let str = String(num);
console.log (typeof str);

console.log ("***********");

let str1 =[ "one", "two", "three"];
console.log (str1);
console.log (typeof str1);

console.log ("***********");

let str2 = new Date();
// let st = (str2).toString();
console.log (str2);
// console.log (typeof st);
console.log (typeof str2);


//change string to number
let stt = "20";
let num1 = Number(stt);
console.log (typeof num1);

console.log ("***********");

let str5 = "30Heelo";
if(Number(str5) == NaN){
    console.log("Not a number");
}else{
    console.log("Number");
}

let out = "33out";
let numb = Number(out);

console.log(numb);
console.log (typeof numb);

console.log ("***********");

let meino = "30.5";

let ham = parseInt(meino);    //it will remove the decimal value
let hama = parseFloat(meino); //it will show the decimal value
console.log(hama);
console.log(ham);


console.log ("***********");

let newH = "10.57483494";
let newH1 = Number(newH).toFixed(3);  //it will show the decimal value upto 3 (if upon on tofixed())

console.log(newH1);
