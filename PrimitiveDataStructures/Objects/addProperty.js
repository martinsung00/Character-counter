/* Write a function that will take a given object and key, and sets a new property with 
a value of true
*/

// Declare function called addProperty. Takes two inputs: object, and key: 
function addProperty(obj, key) {
// Since the prompt asks that the value is equal to true, the value will equal to "true"   
    obj[key] = true;
};
// Set my object to blank object
const myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);
// Log what my object contains
console.log(myObj);