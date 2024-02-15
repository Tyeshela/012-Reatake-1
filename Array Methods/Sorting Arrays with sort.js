// Start with an array of strings representing names in random order
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Sort the names alphabetically in ascending order
const sortedAlphabetically = names.slice().sort();

// Output the sorted names alphabetically
console.log("Sorted alphabetically:", sortedAlphabetically);

// Define a custom compare function to sort names by their length (shortest to longest)
const compareByLength = (a, b) => a.length - b.length;

// Sort the names by their length using the custom compare function
const sortedByLength = names.slice().sort(compareByLength);

// Output the sorted names by their length
console.log("Sorted by length:", sortedByLength);
