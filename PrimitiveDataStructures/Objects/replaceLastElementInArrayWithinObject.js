/*
  (EASY)
  Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
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

// Set a variable to represent myPenguin.favoriteFoods. This makes it easier to remember the path to the array inside the object.
let penguinFavoriteFoods = myPenguin.favoriteFoods;

// Push the new item into the array using the variable.
penguinFavoriteFoods.push('Fish bone')

// Remove last element in the array.
penguinFavoriteFoods.pop();

// Push a new element called pineapples.

penguinFavoriteFoods.push('Pineapple')

// Log what is inside the array to check.
console.log(penguinFavoriteFoods)