

const nestedArray = [1, 2, [3, 4], 5];

const flatArray = nestedArray.flat();

console.log(flatArray);
// Output: [1, 2, 3, 4, 5]


const nested = [1, [2, [3, 4]]];

const flat= nestedArray.flat(2);

console.log(flat);
// Output: [1, 2, 3, 4]
