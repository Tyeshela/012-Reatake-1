// Start with the original array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array containing only odd numbers
const oddNumbers = numbers.filter(function(num) {
    // The callback function takes each element of the array as an argument
    // It returns true if the element meets the specified criteria, and false otherwise
    return num % 2 !== 0; // Check if the number is odd
});

// Output the new array containing only odd numbers
console.log(oddNumbers);
