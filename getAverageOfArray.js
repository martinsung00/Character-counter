/*
  (EASY)
  
  Write a program to calculate the average value of array elements.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 20.5
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]

// Function get average will find the average of an array.
function getAverage(inputArray) {
// Start the sum off at 0, as we will need to add all the numbers within the array.
    let sum = 0
// For loop initialization; it will add all the numbers inside the array until it reaches the array length.
    for (i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
// Divide the sum of all numbers by the array length to get the average.
    return sum / inputArray.length;
}

console.log(getAverage(myArray))