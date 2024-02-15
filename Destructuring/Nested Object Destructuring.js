// Given an object with nested objects
const user = {
    name: { first: 'John', last: 'Doe' },
    address: { city: 'London', country: 'UK' }
  };
  
  // Nested object destructuring to extract properties
  const { name: { first: firstName, last: lastName }, address: { city, country } } = user;
  