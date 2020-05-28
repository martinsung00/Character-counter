/* Create a Function that finds the respective Fibonacci number based on position
*/

// Function is declared, and will take in the desired position of the Fibonacci number represented by (n)
const findFibNum = (n) => {
// The first number of the Fib sequence is 0, second number to 1, and new number represents the sum of first and second.
        let firstNum = 0;
        let secondNum = 1;
        let newNum = 1;
        let fibNum = ''

        if (n < 0 || n === (String)) {
            return null;
// If the position is 0, naturally that is the starting position which will return 0
        } else if (n === 0) {
            return 0;
        } else if (n > 0) {
            for (i = 1; i < n; i++) {
  //To get to the next position (new number), add first number and second number
                newNum = firstNum + secondNum;
  //Now that there is a new number to work with, lets update the first number so that it is the next number in the sequence. (i.e from 0 to 1, 1 to 1, 1 to 2)
                firstNum = secondNum;
  //Second number needs to turn into the new number so that it can be added
                secondNum = newNum;
                fibNum = newNum;
            }
        }
        return fibNum;
};
    
console.log(findFibNum(0))
    