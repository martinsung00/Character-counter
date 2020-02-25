/*
  (EASY)
  
  Write a program to find the index of an array element. You may assume that the array does not have duplicates.
  Try it once with Array.indexOf() in a separate function, and once without.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 2
  Output: 4
*/

// Initialize function. Function takes in the array, and element of interest
function indexLocator(inputArray, inputElement) {
// For loop will search through the entire array
        for (i = 0; i < inputArray.length; i++) {
// If the element of interest is located inside of the array, it will return the index number i
            if (inputArray[i] === inputElement) {
                return i;
            }
// Else return message  
        }
        return 'The element you selected cannot be found in the chosen array.'
}

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
console.log(indexLocator(myArray, 9))