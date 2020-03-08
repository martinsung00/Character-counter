/*
  (EASY)
  
  Write a program to remove an element into a specific position into an array.
  Try it once with Array.splice() in a separate function, and once without.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 12, 6
  Output: [1, 3, 3, 7, 2, 8, 0, 8, -3]

*/
let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]

// First Version of the remove from array function will feature the splice method. Since we don't need the element to remove (as it's only necessary when replacing an element), we only take in two items.
function removeFromArray(inputArray, indexLocation) {
// We only need the index location, 1. As 1 will tell the computer how many elements it should remove.
        inputArray.splice(indexLocation, 1);
        return inputArray;
}

// Second Version removes element will not feature the splice method.
function removeFromArrayVer2(inputArray, indexLocation) {
// Set up three empty arrays. 1st half will store first half of the input array. 2nd half will store the second half of the input array. Concat array will combine the two forementioned arrays.
    let firstHalf = [];
    let secondHalf = [];
    let concatArray = [];
// The loop will read through the input array until it reaches the number before the index location.
    for (i = 0; i < inputArray.length; i++) {
// All the numbers before the index location will be stored within the first half of the array.
        if (i < indexLocation) {
        firstHalf.push(inputArray[i]);
// All the numbers after the index location will be stored within the second half of the array.
        } else {
        secondHalf.push(inputArray[i]);
        }
    }
// Since the element to remove is stored in the second half of the array, we need to shift the array to the right by one position to remove the desired element.
    secondHalf.shift();
// Combine the 1st half and the 2nd half.
    concatArray = firstHalf.concat(secondHalf);
    return concatArray
}

console.log(myArray)
console.log(removeFromArray(myArray, 6))