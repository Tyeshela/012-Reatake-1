// Create an array of objects representing products
const products = [
    { name: 'Product 1', price: 20, available: true },
    { name: 'Product 2', price: 30, available: false },
    { name: 'Product 3', price: 25, available: true }
  ];
  
  // Iterate over the array and print a message for each product
  products.forEach(product => {
    const message = product.available ? `Price of ${product.name} is $${product.price}` : `${product.name} is out of stock`;
    console.log(message);
  });
  