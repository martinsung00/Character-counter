/*
  (EXTREME)
  
  Write a program to find the second largest element in an array.
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 8
*/

let myArray = [1, 3, 3, 7, 2, 8, 12, 0, 20, -3];

// Initialize function, it will take in a desired array.
function findSecondLargestNum(inputArray){
// Set up three variables: clone of the original array (this one will have the maximum # removed), first largest # and second largest # as we need to find the two biggest numbers in the array.
    let cloneOfArray = inputArray;
    let firstLargest = 0;
    let secondLargest = 0;
// First for loop will locate the largest number, the maximum. This # is not the # we are looking for. But we need it so we can remove it so that the second largest # becomes the largest #.
    for (i = 0; i < inputArray.length; i++){
        if (inputArray[i] > firstLargest){
            firstLargest = inputArray[i];
        }
    }
// The clone array will have the first largest # we found removed. That way the second largest # becomes the first.
    for (x = 0; x < cloneOfArray.length; x++){
        if (cloneOfArray[x] === firstLargest){
            cloneOfArray.splice(x, 1);
        }
    }
// Repeat the loop to find the largest # in the clone array with the first largest number removed.
    for (y = 0; y < cloneOfArray.length; y++){
        if (cloneOfArray[y] > secondLargest){
            secondLargest = cloneOfArray[y];
        }
    }
// Now we hae the second largest #.
    return secondLargest;
};

console.log(findSecondLargestNum(myArray))