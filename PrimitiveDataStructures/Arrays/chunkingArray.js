/*
  Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.
  Input: [1, 2, 3, 4], 2
  Output: [[ 1, 2], [3, 4]]
  Input: [1, 2, 3, 4, 5, 6, 7, 8], 3
  Output: [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  Input: [1, 2, 3, 4, 5], 10
  Output: [[ 1, 2, 3, 4, 5]]
*/

function chunkArray(array, size) {
    let chunk = [];
    
    while (array.length >= size) {
        let elements = []
        
        for (i = 0; i < size; i++) {
            elements.push(array.shift())
        }
        chunk.push(elements)
    }
    chunk.push(array)
    return chunk
}  

console.log(chunkArray([1, 2, 3, 4], 3))