

// setInterval(function(){
//     console.log("I am Timer run");
// },2000);

// setTimeout(function(){
//     console.log("I am setTieOut");
// },3000);

// let i = 0;

// setInterval(function(){
//     i++;
//     console.log("I am start Interval" + i);
// },1000);


// let u = 0;

// var myInter = setInterval(function(){
//     u ++ ;
//     if(u == 5)
//         clearInterval(myInter)
//     else
//         console.log(`I am setIimer ${u}`);
// },5000)




//setTimeout need para1(callback) and para2 (Time)
//This is two work

// setTimeout(function(){
//     console.log("I have already waited for 3 second");
// },3000);


// setTimeout(function(){
//     console.log("I just waited  5 seconds");
// },5000)


// console.log("*/*/*/*/*/*/*/");

//setInterval

// It's make output every regarded duration time.....
// let i = 0; 
// setInterval(function(){
//     i++;
//     // console.log("I am start working " + i);
//     console.log(`I am start working ${i}`);
// },1000);

// let i = 0;

// let myInter = setInterval(function () {
//     i++;
//     if (i == 5)
//         clearInterval(myInter)
//     else {
//         console.log(`I am start working , ${i}`)
//     }
// })

function func(val) {
    // console.log("Hello")
    val();
};

// func();


//function Expression

let myFun = function () {
    console.log("I'm function Expresion")
}

// myFun();

func(myFun);
