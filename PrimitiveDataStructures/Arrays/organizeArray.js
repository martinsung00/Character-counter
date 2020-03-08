/*
  (EXTREME)
  
  Write a program to sort the array without using Array.sort(), or any other imported sorting function.
  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: [-3, 0, 1, 2, 3, 3, 7, 8, 8, 10, 10, 12, 20, 40]
*/

myArray = [3, 2, 5, 4, 1];
const organizeAnArray = (inputArray) => {
// Variables to use.
    let tempArray = inputArray;
    let max = 0;
    let oragnizedArray = [];
// For loop to find the max number and splice.
    for (i = 0; i < inputArray.length; i++){
        if (inputArray[i] > max){
             max = inputArray[i];
        }
    }
    tempArray.splice(max[i], 1);    
    oragnizedArray.push(max);
    return [maxArray, tempArray];
}

console.log(myArray)
console.log(organizeAnArray(myArray))