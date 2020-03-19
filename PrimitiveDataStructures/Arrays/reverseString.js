/*
  Given a string, return a new string with the reversed
  order of characters
  Input: "apple"
  Output: "elppa"
*/

function reverseString(string) {
    let newString = "";
// Iteration starts from the end, and goes backwards to the front. I.e for 'Hello', the iteration will read from o to H.
    for (var i = string.length - 1; i >= 0; i--) {
// The new string will add a letter through each iteration starting from the end.
        newString += string[i];
    }
    return newString;
}
console.log(reverseString('hello'));

//Time 5:14


