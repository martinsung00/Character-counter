/*
  (MEDIUM)
  
  Write a program to find the common elements between two arrays. Assume the arrays are the same size. The duplicates themselves may be returned in any order.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], [2, 5, 7, 2, 5, 8, -1, 12, 3, 15]
  Output: [3, 7, 2, 8, 12]
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3];
let myArray2 = [2, 5, 7, 2, 5, 8, -1, 12, 3, 15];

// Set up function so it will take in two arrays.
function findDuplicate (inputArray1, inputArray2){
// Initialize two variables: duplicates will store the duplicates found in both arrays. Number to compare will be the number that is being compared in the two arrays.    
    let duplicates = [];
    let numToCompare;
// The for loop will run through everything in the first array. 
    for (i = 0; i < inputArray1.length; i++){
// As the loop runs through the values in the array, it will begin to compare everything in both array 1 and 2.        
        numToCompare = inputArray1[i];
// If the number is present in both the first and second array, it will push the number into the duplicates array.        
        if (inputArray1.includes(numToCompare) && inputArray2.includes(numToCompare)) 
        duplicates.push(numToCompare);
// Return the duplicates array.    
    return duplicates;
    }
};

console.log(findDuplicate(myArray, myArray2))