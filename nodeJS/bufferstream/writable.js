let fs = require('fs');

let myReadStr = fs.createReadStream('text.txt','utf-8');
let myWriteStr = fs.createWriteStream('new.txt');

myReadStr.on('data',function(chunk){
    myWriteStr.write(chunk);
});