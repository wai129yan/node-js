
//Mutator Methods (Modify the Array)

let ary  = [1,2,3,4,5,6,7,8,9,10];

// console.log(ary.toString());
// console.log(ary.join(" "));
// console.log(ary.join(" - "));
console.log(ary);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");
// (pop) Removes the last element of the array.

let  res = ary.pop();
console.log(res);
console.log(ary);
console.log(ary.pop());
console.log(ary);


console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

// push(element) - Adds one or more elements to the end of the array.

let res1 = ary.push(10);
console.log(res1);
console.log(ary);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

console.log(ary.push(11,15,20));
console.log(ary);
//console.log(res1);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

// shift() - Removes the first element of the array.

let res2 = ary.shift();
console.log(res2);
console.log(ary);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");
// unshift(element) - Adds one or more elements to the beginning of the array.

let res3 = ary.unshift(0,1,1,0);
console.log(res3);
console.log(ary);

let res4 = ary.unshift(7,7,7);
console.log(res4);
console.log(ary);


console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

//splice(start, deleteCount, item1, item2, ...) - Adds or removes elements from an array.


let fru = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let removed = fru.splice(2,2);
console.log(removed);
console.log(fru);

let res5 = ary.splice(3,5);
console.log(res5);
console.log(ary);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

// sort(compareFunction) - Sorts the elements of an array - d\a^\\\\^^^^^--------

let fruits1 = ["Banana", "orange", "Apple", "Mango", "Kiwi", "apple"];

console.log(fruits1.sort());
fruits1.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits1);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");


// reverse() - Reverses the order of the elements in an array.

let sss = ["apple", "banana", "cherry", "date"];

console.log(sss.reverse());
console.log(ary.reverse());


console.log("**********");
console.log("xxxxxxxx");
console.log("**********");


//copyWithin(target, start, end) - Copies part of an array within the same array.

let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3, 5);
console.log(numbers); // Output: [4, 5, 3, 4, 5]

console.log("******-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*****");
console.log("******-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*****");
console.log("******-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*****");


//Accessor Methods (Do Not Modify the Array)



//concat(array1, array2, ...) - Merges two or more arrays.

let fruit = ["apple", "banana"];
let moreFruits = ["cherry", "date"];

let combined = fruit.concat(moreFruits);

console.log(combined);

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let result = arr1.concat(arr2, arr3);

console.log(result);

// Concatenating Arrays and Values

let numberVal = [1, 2];
let combine = numberVal.concat(3, [4, 5]);

console.log(combine); // Output: [1, 2, 3, 4, 5]

// Nested Arrays

let arrN = [1, 2];
let arrN1 = [3, [4, 5]];

let combin= arrN.concat(arrN1);

console.log(combin); // Output: [1, 2, 3, [4, 5]]

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");


//join(separator) - Joins all elements of the array into a string

const test = ['Apple', 'Banana', 'Cherry'];
const reset = test.join();
const reset1 = test.join('-');
const reset2 = test.join(' /');
console.log(reset); // Output: "Apple,Banana,Cherry"
console.log(reset1); // Output: "Apple-Banana-Cherry"
console.log(reset2); // Output: "Apple /Banana /Cherry"

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

//slice(start, end) - Returns a shallow copy of a portion of the array. do not count last index

const frue = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const resu = frue.slice(1, 3);
console.log(resu); // Output: ["Banana", "Cherry"]


const frs = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const rt = frs.slice(-3);
console.log(rt); // Output: ["Cherry", "Date", "Elderberry"]


const xx = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const rlt = xx.slice(1, -3);
console.log(rlt); 

console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

//indexOf(element, fromIndex) - Returns the first index of the specified element.

const ind = ['Apple', 'Banana', 'Cherry', 'Date', 'Banana'];
const index = ind.indexOf('Banana');
console.log(index); // Output: 1



//lastIndexOf(element, fromIndex) - Returns the last index of the specified element.

const ff = ['Apple', 'Banana', 'Cherry', 'Date']; //,'Elderberry'

const gg = ff.lastIndexOf('Elderberry');
console.log(gg); // Output: -1


console.log("**********");
console.log("xxxxxxxx");
console.log("**********");


//includes(element, fromIndex) - Checks if the array includes a specific value.  
// does not count in the last index

let tt = ['apple', 'banana', 'orange','mango', 'grape'];

console.log(tt.includes('banana',2)); // true

console.log(tt.includes('grape',3));  // false

console.log(tt.includes('apple',1));  // true


console.log("**********");
console.log("xxxxxxxx");
console.log("**********");

//toString() - Converts the array into a string

const obj = { name: "Alice", age: 25 };
console.log(obj.toString()); // Outputs: "[object Object]"


let num = 123;
console.log(num.toString());  // Output: "123"

let arr = [1, 2, 3];
console.log(arr.toString());



class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    toString() {
      return `${this.name}, ${this.age} years old`;
    }
  }
  
  let person = new Person("Bob", 30);
  console.log(person.toString()); 


// toLocaleString() - Converts the array into a localized string.


let number = 1234567.89;

console.log(number.toLocaleString());  
console.log(number.toLocaleString('de-DE')); 


let date = new Date();
console.log(date.toLocaleString());

console.log(date.toLocaleString('en-GB'));
console.log(date.toLocaleString('ja-JP')); 


let arr22 = [1, 2, 3, 4, 5];

console.log(arr22.toLocaleString());  
console.log(arr22.toLocaleString('de-DE'));

let ner = 1234567.89;

// Currency formatting
console.log(ner.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));  // "$1,234,567.89"
console.log(ner.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));  // "1.234.567,89 €"


let dat = new Date();

console.log(dat.toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }));

console.log(dat.toLocaleString('ja-JP', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }));

// Example output: "Monday, January 28, 2025"


console.log("**********");
console.log("xxxxxxxx");
console.log("**********");



//  Iteration Methods (Callback-Based)

//forEach(callback) - Executes a callback for each element.

const nb = [1, 2, 3, 4, 5];

nb.forEach(function(nb) {
    console.log(nb);
});

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index, array) {
    console.log(`Fruit: ${fruit}, Index: ${index}, Array: ${array}`);
});