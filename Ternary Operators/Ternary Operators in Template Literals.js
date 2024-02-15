// Create variables to represent a person's name and age
const name = 'Alice';
const age = 20;

// Use a ternary operator within a template literal to create a descriptive string
const description = `${name} is ${age >= 18 ? 'old enough' : 'not old enough'} to vote.`;

// Print the descriptive string to the console
console.log(description); // Output will depend on the value of age
