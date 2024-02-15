// Create an object representing a library
const library = {
    name: 'City Library',
    printTitles() {
      console.log('Book Titles');
    }
  };
  
  // Use optional chaining to call the method if it exists
  library.printTitles?.();
  