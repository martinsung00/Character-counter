/*
  (EASY)
  Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
*/

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
// Second set a variable equal to the object.value_inside_array[of_index]
let whatToFeedMyPenguin = myPenguin.favoriteFoods[0];
// Test to see whatToFeedMyPenguin =
console.log(whatToFeedMyPenguin)