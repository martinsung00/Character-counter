/*
  Given a string, return the character that is most commonly used in the string.
  Input: "abcccccccd"
  Output: "c"
  Input: "apple 1231111"
  Output: "1"
*/

function characterFrequency(string) {
// We need two variables, the letter count to store the letter's count and compare it with the count of other letters.
// The second variable will store the letter and frequencies as a key/value pair.
    let frequencies = {};
    let letterCount = 0;
    for (i = 0; i < string.length; i++) {
        let currentLetter = string[i];
// If it is the first time we've seen it, give the letter a value of 1. If we have already seen it, add one to the occurrence of the letter.
        if (frequencies[currentLetter] === undefined) {
            frequencies[currentLetter] = 1;
        } else {
            let count = frequencies[currentLetter];
            frequencies[currentLetter] = count + 1;
        }
    }
// This time we want to compare all the frequencies of all the letters in the frequencies object.
    for (let letter in frequencies) {
        let value = frequencies[letter];
        if (value >= letterCount) {
// If the value is bigger than the letter count we've created earlier, replace it. If it is smaller do nothing.
            letterCount = value;
        }
    }
// Return the letter that has the same count as the biggest count we've found in the above for loop.
    for (let key in frequencies) {
        if (frequencies[key] === letterCount) {
            return key;
        }
    }
};

console.log(characterFrequency('apple'))