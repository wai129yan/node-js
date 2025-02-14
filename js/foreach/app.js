

// let name = "Mg Mg"; //sequence of character
// console.log(name.length);

let data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est";

let ary = data.split(" ");

ary.forEach((val, i) => {
    // console.table(val);
    console.log(val + " " +  i);
});

for (let i = 0; i < data.length; i+=3) {
   console.log(data[i]);
}

// let i = 0;
// while (i < data.length) {
//     console.log(data[i]);
//     i++;
// }