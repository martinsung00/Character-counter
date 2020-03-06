/*
  (MEDIUM)
  
  Write a program to copy an array by iterating the array. Make sure you don't copy by reference!
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3];

function copyArray(inputArray) {
    let cloneArray = [];
    for (i = 0; i < inputArray.length; i++) {
        cloneArray.push(inputArray[i]);
    }
    return cloneArray;
};

console.log(copyArray(myArray))

