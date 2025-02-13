// let event =  require('events');

// let myEmitter = new event.EventEmitter();

// myEmitter.on("startW",function(){
//     console.log("I am start working");
// })

// // myEmitter.emit('startW');

// let i = 0;

// setInterval(function(){
//     i++;
//     if((i%3) == 0)
//         myEmitter.emit("startW")
//     else
//         console.log("Waiting to emit ....")
// },2000);


// let event = require('events');
// let myEmi = new event.EventEmitter();

// myEmi.on("start",function(){
//     console.log("I am working");
// })



// let event = require('events');

// let myEmitter = new event.EventEmitter(); //static 

// myEmitter.on("startW",function(){

//     console.log("I am start working");
// })

// let i = 0;
// setInterval(function(){
//     i ++;
//     if((i%3) == 0)
//         myEmitter.emit('startW')
//     else 
//         console.log('Waiting to emit .....');
// },2000)


//  myEmitter.emit('startW');




// temperature display

// let event = require('events');

// let myEmitter = new event.EventEmitter();

// myEmitter.on("logTemperature", function(temperature){
//     console.log(`Logging temperature: ${temperature}°C`);
// });

// let i = 0;
// let temperature = 20; // starting temperature
// setInterval(function(){
//     i++;
//     temperature += Math.random() * 2 - 1; // Simulating temperature change

//     if((i % 5) == 0)
//         myEmitter.emit('logTemperature', temperature);
//     else 
//         console.log('Waiting to log data...');
// }, 1000); // 1 second interval


// myEmitter.emit('logTemperature');




// file download Process

// let event = require('events');
// let myEmitter = new event.EventEmitter();

// myEmitter.on("downloadProgress",function(progress){
//     console.log(`Download progress: ${progress}%`);
// });

// let progress  = 0;
// let downloadInterval = setInterval(function(){
//     progress += Math.random( ) * 10;

//     if(progress >= 100 ){
//         clearInterval(downloadInterval);
//         console.log("Download Complete");
//     } else {
//         myEmitter.emit("downloadProgress" , progress.toFixed(1)); //refers to decimal place
//     }
// },1000);


// myEmitter.emit('downloadProgress');



// timer countdown

// let event = require('events');
// let myEmitter = new event.EventEmitter();

// myEmitter.on("timeOver",function(){
//     console.log("Time's up! Countdown reached 0.");
// });

// let countdown = 10;
// let countdownInterval = setInterval(function(){
//     if (countdown > 0) {
//         console.log(`Time remaining: ${countdown} second`);
//         countdown --;
//     } else {
//         clearInterval(countdownInterval);
//         myEmitter.emit("timeOver");
//     }
// },1000);

// myEmitter.emit('timeOver');


//eventEmit Parameter

let event = require('events');
let myEmitter = new event.EventEmitter();

// myEmitter.emit('donow');

myEmitter.on('donow', function (val) {
    console.log(`I am start working. ${val}`);
});

// myEmitter.emit('donow');

myEmitter.emit('donow', 'Brighter Myanmar');
