/*
  (EASY)
  
  Write a program to test if an array contains a specific value. If it does, return true. If it doesn't, return false.
  Try it once with Array.includes() in a separate function, and once without.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5
  Output: false
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
let myArray2 = ['John', 'Jenny', 'Jason']

// First version of the function utilizes Array.includes to look for the value within the array.
function doesArrayInclude(inputArray, numberToLookFor) {
// Initialization of the for loop to scan through all values within the array.
    for (i = 0; i <inputArray.length; i++) {
// In the first version, Array.includes is used, and it will see if the array includes the number we are looking for.
        if (inputArray.includes(numberToLookFor)) {
// If the number has been found, it will return a message saying it has been found. It can also be replaced with 'True'.
            return 'The number ' + numberToLookFor + ' has been located in the array.';
        }
    }
// Else it will return false. This can also be replaced with a message.
    return false;
}

// Second Version of the function will utilize the === method. The value (i) within the array will be compared with the number to look for.
function doesArrayIncludeVer2(inputArray, numberToLookFor) {
// Look through everything within the array.
    for (i = 0; i <inputArray.length; i++) {
// If number has been found, return same message.
        if (inputArray[i] === numberToLookFor) {
            return 'The number ' + numberToLookFor + ' has been located in the array.';
        }
    }
// Or else return false.
    return false;
}

// Version 3 is the same as version 1. It simply sees if it can find a string instead of a number inside an array.
function doesArrayIncludeVer3(inputArray, itemToLookFor) {
    for (i = 0; i <inputArray.length; i++) {
        if (inputArray.includes(itemToLookFor)) {
            return 'The item you are looking for ' + itemToLookFor + ' has been located in the array.';
        }
    }
    return false;
}

console.log(doesArrayInclude(myArray, 0))
console.log(doesArrayIncludeVer2(myArray, 8))
console.log(doesArrayInclude(myArray2, 'John'))

