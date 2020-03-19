/* Write a function writes all the values between a low number and a high number
ith the following exceptions:
When the number is evenly divisible by three, push 'fizz'
When the number is evenly divisible by five, push 'buzz'
When the number is evenly divisible by three and five, push 'fizzbuzz' */

'Use Strict'

// Initialize function fizzBuzz
const fizzBuzz = (rangeOne, rangeTwo) => {
// Initialize variables
    let fbArray = [];
// Number to put in range will serve as the start of the range as well as number to pe put into the array; but it needs to subtract one so it can prevent bypassing the starting number
    let numberToPutInArr = rangeOne - 1;
    for (i = 0; i < rangeTwo; i++) {
      numberToPutInArr = numberToPutInArr + 1
// If Number to put in array is divisible by 3 AND 5, put fizzbuzz into the array instead
        if (numberToPutInArr % 3 === 0 && numberToPutInArr % 5 === 0) {
          fbArray.push ('fizzbuzz');
        }
// If Number to put in array is divisible by 5, put buzz into the array instead
        else if (numberToPutInArr % 5 === 0) {
          fbArray.push ('buzz');
// If Number to put in array is divisible by 3, put fizz into the array instead
        }
        else if (numberToPutInArr % 3 === 0) {
          fbArray.push ('fizz');
// If Number to put in array is not divisible by 3 and/or 5, put in the regular number
        }
        else {
          fbArray.push (numberToPutInArr);
        }
    }
  return fbArray;
};

console.log (fizzBuzz (1, 100))
