// Given an array of numbers
const numbers = [1, 2, 3];

// Use optional chaining to attempt to access an element at a specific index
const element = numbers?.[2];

// Traditional method of checking the length of the array before accessing an element
const elementTraditional = numbers.length > 2 ? numbers[2] : undefined;
