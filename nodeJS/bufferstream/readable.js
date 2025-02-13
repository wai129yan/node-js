let fs = require('fs');

let myReadable = fs.createReadStream('text.txt','utf-8');

myReadable.on('data',function(chunk){
    console.log('We got buffer chunk');
    console.log(chunk);
});