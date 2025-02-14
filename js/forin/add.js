
// let dd = ["one","two","three","four","five"];

// console.table(dd);

// console.log("**************");

// //execute the index number
// for(x in dd){
//     console.log(x);

//     console.log("**************");

//     console.log(dd[x]);
// }


// let obj = {
//     name : "mgmg",
//     age :20,
//     family : 5,
//     car: "Toyota"
// }

// for(i in obj){
//     console.log(obj[i]);
//     console.log("**************");
//     console.log("**************");
//     console.log(obj);
//     console.log("**************");
//     console.log("**************");
//     console.log(i);
// }


const product = {
    name: "Wireless Headphones",
    price: 99.99,
    brand: "SoundPro",
    stock: 120,
    category: "Electronics",
};

function displayProductDetails(product) {
    console.log("Product Details:");
    console.log("*************");
    for (const k in product) {
        console.log(`${k.charAt(0).toUpperCase() + k.slice(1)} : ${product[k]}`);
    }
}
displayProductDetails(product);



const userForm = {
    username: "john_doe",
    email: "john@example.com",
    age: "",
};

function validateForm(data) {
    for (const key in data) {
        if (!data[key]) {
            console.log(`The field "${key}" is missing or empty.`);
        }
    }
}
// Validate the form
validateForm(userForm);



const userProfile = {
    name: "Alice",
    age: 25,
    location: "New York",
};

function countProperties(obj) {
    let count = 0;
    for (const key in obj) {
        count++;
    }
    console.log(`The object has ${count} properties`);
}
countProperties(userProfile);



const employee = {
    name: "Mark",
    department: "Sales",
  };
  
  const defaultValues = {
    age: 30,
    department: "General",
    position: "Junior Staff",
  };
  
  function addDefaultValues(obj, defaults) {
    for (const key in defaults) {
      if (!obj[key]) {
        obj[key] = defaults[key];
      }
    }
    return obj;
  }
  console.log(addDefaultValues(employee, defaultValues));