/* Write a function that counts the number of vowels in a string */

const countVowelsWithArray = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    count = 0;
      for (i = 0; i < string.length; i++) {
        for (x = 0; x < vowels.length; x++) {
          if (string[i] === vowels[x]) {
            count ++;
          }
        }
      }
    return count;
  };
  
  console.log (countVowelsWithArray('I love applepie'))


/* Write a function that counts the number of vowels in a string */

const countVowels = (string) => {
    count = 0
    for (i = 0; i < string.length; i++) {
      if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
        count = count + 1;
      }
    }
    return count;
};
  
  console.log (countVowels('input'))
  