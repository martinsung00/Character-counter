/*
  (HARD)
  
  Write a Java program to check if the sum of all the 10's in the array is exactly 30. Return false if the condition does not satisfy, otherwise true.
  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: false
*/
myArray = [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]

function checkSumOfTens (inputArray) {
    let divisibleByTen = [];
    let sum = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] % 10 === 0) {
            divisibleByTen.push(i);
        }
    }
    for (let x = 0; x < divisibleByTen.length; x++) {
        sum += divisibleByTen[x];
    }
    if (sum === 30) {
        return true;
    }
    else return false;
}
console.log(checkSumOfTens(myArray));
    
