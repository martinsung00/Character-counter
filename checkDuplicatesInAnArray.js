/*
  (MEDIUM)
  
  Write a program to find the duplicate value of an array of integer values. You may assume that there is only duplicate. If there are no duplicates, return null.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 3
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3];

// Initialize function so that it will take in an array.
function findDuplicate (inputArray){
// Initialize two variables: duplicates will store the duplicate numbers in an array while number to compare will compare the number to the item in the array.    
    let duplicates = {}
    let numToCompare;
// Set up for loop to run through everything in the array.
    for (i = 0; i < inputArray.length; i++){
// The number to compare will represent the number in the array.
        numToCompare = inputArray[i];
// If the number has a duplicate inside the array assign it into the object, and give it a value of 1.
        if (!duplicates[numToCompare]) {
            duplicates[numToCompare] = 1;
        } else {
// If the value of the key (number in the array) is more than 2, that means we saw it multiple times.
            return numToCompare;
        }
    }
    return null;
}

console.log(findDuplicate(myArray))