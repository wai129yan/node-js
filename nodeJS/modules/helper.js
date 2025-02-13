var fonky = function(){
    console.log("I am fonky method");
}

var goofy = function(val){
    console.log("I am goofy method => " + val);
}



module.exports.fonky = fonky;
module.exports.goofy = goofy;




let johny = function(exe){
    console.log("This is johnny babe => " +  exe )
}

module.exports.johny= johny;
