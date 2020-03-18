/*
  Given a string, return true if the string is the same word if it is reversed, including spaces and punctuation.
  Input: "abba"
  Output: true
  Input: "abcdefg"
  Output: false
*/

function isPalidrome(string) {
// Similar to reverse string, we need newString to store the new string. LC string will convert the original string to all lower case for comparison purposes.
    let newString = '';
    let lowerCaseString = string.toLowerCase();
// Reverse string with for loop.
    for (i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
// We need to convert the new string into lower case as well.
    let lowerCaseNewString = newString.toLowerCase();
// Compare the lower case version of both the old and new string.
    if (lowerCaseNewString === lowerCaseString){
        return true;
    } else {
        return false;
    }
};

console.log(isPalidrome('Abba'))

//Time 10:00