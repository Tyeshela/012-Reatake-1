// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using arrow functions with array methods
const squaredNumbers = numbers.map(num => num ** 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, num) => acc + num, 0);
