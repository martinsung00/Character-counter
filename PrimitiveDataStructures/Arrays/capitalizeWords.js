/*
  Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.
  Input: "a short sentence"
  Output: "A Short Sentence"
  Input: "look, it is working!"
  Output: "Look, It Is Working!""
*/

function capitalizeWords(string) {
// Split up the string to capitalize each word.
  let splitStr = string.split(' ');  
  for (i = 0; i < splitStr.length; i++) {
// For each word, forge a new word with a capitalized first letter combined with everything else behind it.
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}
console.log(capitalizeWords('hello world'))