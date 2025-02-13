let fs = require('fs');



let data = fs.readFileSync('note.txt','utf-8');

fs.writeFileSync('test.txt',data);
