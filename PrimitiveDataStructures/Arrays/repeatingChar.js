/*
  Given a string, return true if there are characters repeated, false if there are none.
  Input: "abcccccccd"
  Output: true
  Input: "apple 1231111"
  Output: true
  Input: ",  .!"
  Output: true
  Input: "hi"
  Output: false
*/

function repeatingChar(str) {
    let frequencies = {};
    for (let char of str) {
        if (!frequencies[char]) {
          frequencies[char] = 1;
        } else {
            frequencies[char] += 1;
            if (frequencies[char] > 1) {
                return true;
            }
        }
    }
    return false;
};

console.log(repeatingChar('apple'))