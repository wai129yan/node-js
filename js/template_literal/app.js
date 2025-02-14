
let person = {
    name: 'John',
    brother: 'Doey',
    sister: 'Jane',
    parents: ['Dad', 'Mom'],
    age: 30,
}

// let mgmgData = '<h5>' + person.name + 'Resume</h5><ul><li>Father : ' + person.parents[0] + '</li><li>Mother : ' + person.parents[1] + '</li><li>Brother : ' + person.brother + '</li></ul>';
// mgmgData += '<p>' + person.brother + '</p>';

let mgmgData = `<h5>${person.name} Resume</h5>
<ul>
    <li>Father : ${person.parents[0]}</li>
    <li>Mother : ${person.parents[1]}</li>
    <li>Brother : ${person.brother}</li>
    <li>Sister : ${person.sister}</li>
    <li>Age : ${person.age}</li>
</ul> `
;

document.querySelector('.para').innerHTML = mgmgData;
// document.querySelector('.para').style.color = 'red';