/*
  (EASY)
  
  Write a program to insert an element into a specific position into an array.
  Try it once with Array.splice() in a separate function, and once without.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5, 3
  Output: [1, 3, 3, 5, 7, 2, 8, 12, 0, 8, -3]
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]

// Initialize function. This function will take 3 inputs: the selected array, the element to insert, and where to insert it.
function insertIntoArray(inputArray, elementToAdd, indexLocation) {
// This function will use the splice method. The number in the middle will be set at 0 as we are not replacing any items.
    inputArray.splice(indexLocation, 0, elementToAdd);
    return inputArray;
}

// Version 2 will not use the splice method to add in the element.
function insertIntoArrayVer2(inputArray, elementToAdd, indexLocation) {
// Set up three empty arrays. The first half will store the first half of the array and will have the element pushed into it.
// Second half will store the second half of the array.
// Third array will be the concatArray where all arrays are stored into one.
    let firstHalf = [];
    let secondHalf = [];
    let concatArray = [];
// The loop will look into the array until it reaches the desired index location.
    for (i = 0; i < inputArray.length; i++) {
// When the loop finds the index location, it will push the first half of the array into firstHalf.
        if (i < indexLocation) {
            firstHalf.push(inputArray[i]);
// Afterwards, everything else after the the index location will be placed into the second half array.
        } else {
            secondHalf.push(inputArray[i]);
        }
    }
// Now that we split the array into two parts, and the index is stored into the second half, we can safely add the element into the first half of the array.
    firstHalf.push(elementToAdd);
// After adding in the element to the first array, we put the entire array together.
    concatArray = firstHalf.concat(secondHalf);
    return concatArray;
};

console.log(insertIntoArrayVer2(myArray, 5, 3))
