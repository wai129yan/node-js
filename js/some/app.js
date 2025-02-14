

const products = [
    { name: 'Shirt', inStock:false},
    { name: 'Shoes', inStock: true },
    { name: 'Hat', inStock: false }
  ];
  
  const isOutOfStock = products.some(product => product.inStock);
  
  console.log(isOutOfStock);  


const numbers = [1, 2, 3, 4, 5, 6, 7, 18, 9];

const hasLargeNumber = numbers.some(num => num > 10);
console.log(hasLargeNumber);


const movies = [
    { title: 'Inception', availableInRegion: false },
    { title: 'The Matrix', availableInRegion: true },
    { title: 'Avatar', availableInRegion: false }
  ];
  
  
  const isAnyMovieAvailable = movies.some(movie => movie.availableInRegion);
  
  console.log(isAnyMovieAvailable);  



  const formFields = [
    { name: 'username', value: '' },
    { name: 'email', value: 'user@example.com' },
    { name: 'password', value: '' }
  ];
  
  const isAnyFieldFilled = formFields.some(field => field.value !== '');
  
  console.log(isAnyFieldFilled);  
  
  