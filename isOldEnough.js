/*
Write a function called "isOldEnoughToDrink".
Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21.
var output = isOldEnoughToDrink(22);
console.log(output); // --> true
*/

// Declare function
function isOldEnoughToDrink(age) {
// To prevent bad input (string, 0, or negative numbers), set the parameter so that it will return Null if bad input is detected.
    if (typeof(age) === Number || age > 0) {
// If the age is over 21, return true.
        if (age >= 21) {
            return true;
        } 
// Else if the age is below 21, return false.
        else {
            return false;
        }
    }
    else {
        return null;

    }
}
console.log (isOldEnoughToDrink(22))

