let fs = require('fs');

// fs.appendFile('text.txt',' Finally',function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("File system is successfully");
// })


fs.readFile('text.txt','utf-8',function(err,result){
    if(err)
        console.log(err);
    else
        console.log(result);
})