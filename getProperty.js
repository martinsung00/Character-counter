/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

// Declare function getProperty

let myObj = {
    myKey: 'My Value'
  };
function getProperty(obj, key) {
// If the object has no property (undefined), then it will return undefined
    if (obj === undefined) {
        return undefined;
// Else proceed normally and get the object and value
    } else
    {
// Return the selected key and value within the object
        return obj[key];
    }
}
console.log (getProperty(myObj, 'myKey'))
console.log (myObj)