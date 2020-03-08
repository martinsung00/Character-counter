/*
  (EASY)
  Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.
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
myPenguin.favoriteFoods = ['Fish', 'Penguin feed', 'Other penguins'];

// Set a variable to represent myPenguin.favoriteFoods. This makes it easier to remember the path to the array inside the object.
let penguinFavoriteFoods = myPenguin.favoriteFoods;

// Push the new item into the array.
penguinFavoriteFoods.push('Fish bone')

// For loop to iterate all elements in the array, and log all the elements once.
for (i = 0; i < penguinFavoriteFoods.length; i++) {
    console.log(penguinFavoriteFoods[i]);
};