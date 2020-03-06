/*
  (EASY)
  
  Write a program to sum values of an array.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 41
*/

// Array from the prompt
let testArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]

// Initialize the function
function getArraySum(inputArray) {
// Start sum out as 0
    let sum = 0
    for (i = 0; i < inputArray.length; i++) {
// As the loop keeps going, it will add everything inside. New sum will be replaced by old sum (0) + first num etc.
        sum += inputArray[i];
    }
    return sum;
};

// List all the numbers we will be adding in the array
  console.log(testArray)
// Does the output match the output stated in the prompt?
  console.log('The expected output should be 41')
  console.log(getArraySum(testArray))
