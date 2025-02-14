
function doIt(name) {
    if (name == undefined) {
        name = "mg mg";
    }
    console.log(name);
}
doIt("zaw");


function doLo(name = "KOKO") {
    console.log(name);
}
doLo();
doLo("Zaw Zaw");



//function experssion

let dd = function(){
    console.log("Hello");
}
dd();

let ddd = () => {
    console.log("Hello World");
}
ddd();

let cc = function(){

}

let ee = () => {
    
}
console.log("**********");


// function in the object
let obj = {
    name : "Zaw Zaw",
    age : 20,
    dd : function(){
        console.log('I am a funcition inside the object');
    }
}
obj.dd();