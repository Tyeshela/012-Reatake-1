// Function to find the maximum value using spread operator
function findMax(...nums) {
    return Math.max(...nums);
  }
  
  // Modify the function to accept multiple arrays and find the maximum value
  function findMaxMultiple(...arrays) {
    const flattenedArray = arrays.flat();
    return Math.max(...flattenedArray);
  }
  