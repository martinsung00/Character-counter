/*
  (MEDIUM)
  
  Write a program to find the maximum and minimum value of an array.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: { minimum: -3, maximum: 12 }
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]  

const findMinMax = (inputArray) => {
// Set up two variables max and min. Let both equal zero as a base number to compare with the numbers inside the array.    
    let max = 0;
    let min = 0;
// First for loop will evaluate the maximum. It will compare the numbers inside the array, and if the number in the array is greater than the variable max, it will replace it with the number in the array until a greater number is found.
    for (i = 0; i < inputArray.length; i++){
// Compare number within array to see if its bigger than the current 'max'.
        if (inputArray[i] > max){
// If it is bigger than the current 'max', then replace it.
            max = inputArray[i];
        }
    }
// Second for loop will evaluate the minimum. It will compare the numbers inside the array.
    for (x = 0; x < inputArray.length; x++){
// If the number inside the array is smaller than the current 'min', replace it.
        if (inputArray[x] < min){
            min = inputArray[x]
        }
    }
// Return the maximum and minimum number.
    return 'minimum: ' + min + ' maximum: ' + max;
}

console.log(findMinMax(myArray))

eval("-3<0")