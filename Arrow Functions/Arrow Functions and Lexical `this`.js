// Arrow Functions and Lexical this
const myObject = {
    myMethod(items) {
      setTimeout(function() {
        console.log(this); // traditional function
      }, 1000);
      setTimeout(() => {
        console.log(this); // arrow function
      }, 1000);
    }
  };
  
  myObject.myMethod();
  