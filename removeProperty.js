/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}
let myObj = {
    name: 'Sam',
    age: 20
}
removeProperty(myObj, 'name');
console.log(myObj)