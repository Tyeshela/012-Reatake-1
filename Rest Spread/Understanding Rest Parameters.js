// Write a function called sumAll using rest parameters
function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }
  
  // Test the function with different numbers of arguments
  console.log(sumAll(1, 2, 3)); // Output: 6
  console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
  