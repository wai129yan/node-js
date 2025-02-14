const arr = [1, 2, 3];

console.log(Array.isArray(arr));

const str = "Hello, World!";

console.log(Array.isArray(str));

console.log("*********************");


function filterEvenNumbers(input) {
    if (Array.isArray(input)) {
        return input.filter(num => num % 2 === 0);
    } else {
        console.log("Error: Input is not an array.");
        //   return [];
    }
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Output: [2, 4, 6]
console.log("*********************");

console.log(filterEvenNumbers("1, 2, 3, 4"));
// Output: Error: Input is not an array.

console.log("*********************");


function handleApiResponse(response) {
    if (Array.isArray(response)) {
        // If the response is an array, loop through it
        response.forEach(item => console.log("Processing item:", item));
    } else {
        // If it's not an array, handle it differently
        console.log("API response is not an array. Handling differently.");
    }
}

// Example with array response
handleApiResponse([1, 2, 3, 4]);
// Output: Processing item: 1
//         Processing item: 2
//         Processing item: 3
//         Processing item: 4

// Example with object response
handleApiResponse({ key1: "value1", key2: "value2" });
// Output: API response is not an array. Handling differently.



console.log("*********************");
console.log("*********************");
console.log("*********************");



const stri = "JavaScript";

const arri = Array.from(stri);

console.log(arri);


const nodeList = document.querySelectorAll('p'); // Gets all <p> elements in the document

const pArray = Array.from(nodeList);

console.log(pArray);
// Now you can use array methods like map(), filter(), etc.



function sum() {
    const argsArray = Array.from(arguments);
    return argsArray.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10


const numbers = [1, 2, 3, 4, 5];

const doubled = Array.from(numbers, num => num * 2);

console.log(doubled);







