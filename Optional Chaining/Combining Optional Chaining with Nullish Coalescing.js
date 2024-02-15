// Given an array of objects where each object may or may not contain information about a person
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob' }
  ];
  
  // Use optional chaining to access the email and provide a default value if not available
  const email = people[1]?.email ?? "Email not provided";
  