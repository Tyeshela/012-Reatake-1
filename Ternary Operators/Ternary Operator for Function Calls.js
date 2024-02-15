// Write two functions, greetMorning and greetEvening
function greetMorning() {
    return 'Good morning!';
  }
  
  function greetEvening() {
    return 'Good evening!';
  }
  
  // Use a ternary operator to call the appropriate function based on the current hour
  const greeting = new Date().getHours() < 12 ? greetMorning() : greetEvening();
  
  // Print the result of the ternary operation (the greeting) to the console
  console.log(greeting); // Output will depend on the current time of day
  