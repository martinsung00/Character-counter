/*
  (EASY)
  Create a new variable named lastFavoriteFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.
*/

// Object (pre-set)
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
myPenguin.favoriteFoods = ['Fish', 'Penguin feed', 'Other penguins', 'Test item', 'Test item 2'];

// Set a variable to represent myPenguin.favoriteFoods. This makes it easier to remember the path to the array inside the object.
let penguinFavoriteFoods = myPenguin.favoriteFoods;

// Create a variable that will always log the last element of the array, no matter the length.
let lastFavoriteFood = penguinFavoriteFoods[penguinFavoriteFoods.length - 1];

// Console log lastFavoriteFood to verify it.
console.log(lastFavoriteFood);