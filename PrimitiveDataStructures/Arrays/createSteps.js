/*
  Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side!
  Input: 4
  Output:
  "#   "
  "##  "
  "### "
  "####"
*/

function createSteps(number) {
// Create a number x number grid. Row and column should be the same as the input. Iterate until row and column reaches number.
    for (let row = 0; row < number; row++) {
        let steps = '';

        for (let column = 0; column < number; column++) {
/* If the # of columns is less than the # of rows, we add in a # sign. However if it exceeds the row, we add a space. I.e column is 1, the row will only add 1 # sign. The rest will be space.
*/
            if (column <= row) {
                steps += '#';
            } else {
                steps += ' '
            }
        }
        console.log(steps)
    }
};

console.log(createSteps(4))