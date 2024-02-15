// Create an object representing a student
const student = {
    name: 'Alice',
    courses: ['Math', 'Science'],
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  };
  
  // Attempt to access a deeply nested property using optional chaining
  const city = student.address?.city;
  
  // Traditional approach using logical AND (&&) checks
  const cityTraditional = student.address && student.address.city;
  