/*
  (EASY)
  Add another food to the end of the list.
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

// First add the new key/value penguin's favorite food.
myPenguin.favoriteFoods = ['Fish', 'Penguin feed', 'Other penguins'];

// Set a variable to represent myPenguin.favoriteFoods. This makes the .push much easier to read and understand.
let penguinFavoriteFoods = myPenguin.favoriteFoods;

// Push the new item into the array.
penguinFavoriteFoods.push('Fish bone')

// Print what is in the array after the push.
console.log(myPenguin.favoriteFoods)