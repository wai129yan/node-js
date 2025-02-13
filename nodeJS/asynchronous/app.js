//readFile
//writeFile
//appendFile

let fs = require('fs');

// fs.writeFile('text.txt','Welcome asynchronous' , function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log('File Successfully write');
// })


fs.readFile('text.txt','utf-8',function(err,result){
    if(err)
        console.log(err);
    else
        console.log(result);
})
