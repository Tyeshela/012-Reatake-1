// Start with an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use reduce method to calculate the sum of all numbers in the array
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("Sum of all numbers:", sum);

// Use reduce method to find the maximum number in the array
const maxNumber = numbers.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}, -Infinity);

console.log("Maximum number:", maxNumber);
