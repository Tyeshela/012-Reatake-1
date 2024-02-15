// Create two objects with some overlapping properties
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Merge the two objects into a new object
const mergedObject = { ...obj1, ...obj2 };
