// Arrow Functions as Method Definitions
const calculator = {
    add: (a, b) => a + b,
    subtract(a, b) {
      return a - b;
    }
  };
  
  console.log(calculator.add(5, 3)); // Output: 8
  console.log(calculator.subtract(5, 3)); // Output: 2
  