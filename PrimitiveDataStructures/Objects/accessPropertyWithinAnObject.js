/*
  (EASY)
  Access your penguin's second favorite food and print it to the console using console.log().
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

// Set what the value is for the key.
myPenguin.favoriteFoods = ['Fish', 'Penguin feed', 'Other penguins'];
// Log what the second favorite food is.
console.log(myPenguin.favoriteFoods[1]);