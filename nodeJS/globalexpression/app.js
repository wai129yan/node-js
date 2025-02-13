function func (val){
    val();
}

let myVar = function(){
    console.log("I am function Expression");
};

func(myVar);


function outward(max){
    max();
}

let myMax = function(){
    console.log("This is the function expression Example");
}

outward(myMax);

