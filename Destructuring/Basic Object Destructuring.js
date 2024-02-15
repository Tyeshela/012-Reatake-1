// Create an object representing a person
const person = { name: 'Alice', age: 30, location: 'New York' };

// Object destructuring to create variables for each property
const { name, age, location } = person;

// Renaming variables while destructuring
const { name: fullName, age: years, location: city } = person;
