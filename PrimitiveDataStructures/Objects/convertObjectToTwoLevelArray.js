/*
Convert an object into a two level array. Given an object with keys and values, return [[key, value], [key, value], [key, value]]

*/

function convertObjectToArray(object) {
// We need two variables in a global scope. Output will store the final array we want. Value will be used to represent what is stored within a key.
    let output = [];
    let value;
// Iterate through all keys in the object.
    for (let key in object) {
// Create a temporary array to store each key and value when the iteration occurs. 
        let tempArray = [];      
        value = object[key];
// Each iteration will create a temporary array of [key, value]. Each key will have it's own array.
        tempArray.push(key);
        tempArray.push(value);
// Put each temporary array into the final output array.  
        output.push(tempArray);
    }
    return output;
};

// Test object.
  var input = {
      name: 'Holly',
      age: 35,
      role: 'producer'
};

  console.log(convertObjectToArray(input))
  