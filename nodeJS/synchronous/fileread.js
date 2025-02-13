// let fs = require('fs');

// let data = fs.readFileSync('note.txt','utf-8');

// console.log(data)


let fs = require('fs');

try {
    let data = fs.readFileSync('note.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.error('Error reading the file:', err);
}
