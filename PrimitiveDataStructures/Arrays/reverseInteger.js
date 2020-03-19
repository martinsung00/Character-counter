/*
  Input: 500
  Output: 5
  Input: 981
  Output: 189
  Input: -15
  Output: -51
  
  Input: -90
  Output: -9
*/

function reverseInteger(integer) {
    let newInteger = '';
    let tempInteger = integer.toString(integer.length);
    let tempArray = tempInteger.split('');
        if (integer >= 0) {
        for (i = tempArray.length - 1; i >= 0; i--) {
            newInteger += tempArray[i]
        }
        return Number(newInteger);
    } else if (integer < 0) {
        tempArray.shift();
        for (i = tempArray.length - 1; i >= 0; i--) {
            newInteger += tempArray[i]
        }
        return Number('-' + newInteger);
    }
    
};

console.log(reverseInteger(-981));