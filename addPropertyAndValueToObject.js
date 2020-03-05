/*
  (EASY)
  Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
*/

// Object of interest (pre-set)
let myPenguin = {
    character: "Penguin McPenguinFace",
    origin: "Donald Duck",
    notes: 'A baby penguin in the classic 1939 cartoon "Donald\'s Penguin".',
    canFly: true,
  
    chirp: function() {
      console.log("CHIRP CHIRP! Is this what penguins sound like?");
    },
  
    sayHello: function() {
      console.log("Hello, I'm a penguin and my name is " + this.character + "!");
    },
  
    fly: function() {
      if (this.canFly) {
        console.log("I can fly!");
      } else {
        console.log("No flying for me!");
      }
    }
  };
// Your code here.

// Initialize a function to add in a new key and value; technically there is no need for a function.
function addFavoriteFoods(inputObject){
// To add a key and a value, use this formula: object.new_key = new_value.
myPenguin.favoriteFoods = ['Fish', 'Penguin feed', 'Other penguins'];
return myPenguin;
}
// Test to see if the new key and value has been added.
console.log(addFavoriteFoods(myPenguin))
