// Function to generate a descriptive string using template literals
function generateDescription(person) {
    return `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
  }
  
  // Example usage
  const person = { name: "Alice", age: 30, occupation: "Engineer" };
  console.log(generateDescription(person));
  