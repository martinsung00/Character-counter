/*
Create a function to count all characters within a string.
*/

function countAllCharacters(string) {
// Create an object to store key (representing the character) and value (representing the count).
    let frequencies = {};
    for (i = 0; i < string.length; i++) {
      let currentLetter = string[i]
// If the character is missing in the object frequencies, we give it a value of 1 (first time we've seen it)
      if (frequencies[currentLetter] === undefined) {
        frequencies[currentLetter] = 1;
      } else {
// Or else we let our counter equal the value (current number of times we have seen it) and add 1 to the counter.
        let count = frequencies[currentLetter];
        frequencies[currentLetter] = count + 1;
      }
    }
    return frequencies;
  }
  
  console.log(countAllCharacters('banana'));