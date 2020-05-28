/*
  Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the pyramid has spaces on both the left and right hand side.
*/

function createPyramid(number) {
    for (let column = 0; column < number; column++) {
        let steps = '';

        for (let row = 0; row < number; row++) {
            if (row <= column) {
                steps = '#' + steps + '#';
            } else {
                steps = ' ' + steps + ' '
            }
        }
        console.log(steps)
    }
};

console.log(createPyramid(4))