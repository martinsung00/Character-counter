/*
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/
 
function findPairForSum(integers, target) {
    // For every number in the set of numbers we are going to add every number in the set to it to see if it equals the target number.
    let pair = [];
    for (let i = 0; i < integers.length; i++) {
        let baseNumber = integers[i];
        for (n = 0; n < integers.length; n++) {
            let currentSum = integers[n] + baseNumber;
    // If the sum of the base number and the number we added to it equals the target number, we will push that pair of numbers into the pairs array.
            if (currentSum === target) {
                pair.push([integers[i], integers[n]])
            }
        }
    }
    return pair;
};

console.log(findPairForSum([3, 34, 4, 12, 5, 2], 8));