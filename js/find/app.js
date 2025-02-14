
const users = [
    { name: 'John', status: 'inactive' },
    { name: 'Jane', status: 'inactive' },
    { name: 'Doe', status: 'active' }
  ];
  
  const activeUser = users.find(user => user.status === 'active');
  
  console.log(activeUser);



const products = [
    { id: 101, name: 'Shirt', price: 25 },
    { id: 10, name: 'Shoes', price: 60 },
    { id: 103, name: 'Hat', price: 15 }
];

const product = products.find(p => p.id === 1025);

if (product) {
    console.log(product);
} else {
    console.log('Product not found');
}


const students = [
    { name: 'John', score: 55 },
    { name: 'Jane', score: 70 },
    { name: 'Doe', score: 85 }
  ];
  
  const firstPassedStudent = students.find(student => student.score > 60);
  
  console.log(firstPassedStudent);



const employees = [
    { name: 'Alice', position: 'Manager' },
    { name: 'Bob', position: 'Developer' },
    { name: 'Charlie', position: 'Designer' },
    { name: 'Bob', position: 'Network Developer' },
];
  
const employee = employees.find(emp => emp.name === 'Bob');
  
console.log(employee);



const books = [
    { title: '1944', genre: 'Dystopian' },
    { title: 'The Hobbit', genre: 'Fantasy' },
    { title: '1984', genre: 'Dystopian' },
    { title: 'To Kill a Mockingbird', genre: 'Fiction' }
];
  

const dystopianBook = books.find(book => book.genre === 'Dystopian');
  
console.log(dystopianBook);

  

  
  