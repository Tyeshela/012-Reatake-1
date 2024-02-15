// Define an array of objects with properties for id, firstName, and lastName
const people = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'Michael', lastName: 'Johnson' }
];

// Use the map method to create a new array of strings that combines firstName and lastName
const fullNames = people.map(function(person) {
    // The callback function takes each element of the array as an argument
    // It returns the value that will be placed in the new array
    return `${person.firstName} ${person.lastName}`;
});

// Output the new array of full names
console.log(fullNames);
