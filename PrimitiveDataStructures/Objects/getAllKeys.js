/*
  (EASY)
  Write a program to get the number of keys of any JavaScript object.
*/

function getAllKeys (object){
    let numOfKeys = 0;
    for (let key in object) {
        numOfKeys++;
    }
    return numOfKeys;
};

const myObject = {
    name: 'John',
    surname: 'Doe',
    age: 21,
    pet: 2
};

console.log(getAllKeys(myObject))