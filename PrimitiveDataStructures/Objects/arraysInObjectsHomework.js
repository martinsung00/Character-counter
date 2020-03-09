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

/*
  (EASY)
  Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
*/

myPenguin.favoriteFoods = ['Fish', 'Penguin feed', 'Other penguins'];

/*
  (EASY)
  Access your penguin's second favorite food and print it to the console using console.log().
*/

console.log(myPenguin.favoriteFoods[1]);

/*
  (EASY)
  Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
*/

let whatToFeedMyPenguin = myPenguin.favoriteFoods[0];

/*
  (EASY)
  Add another food to the end of the list.
*/

penguinFavoriteFoods.push('Fish bone')

/*
  (EASY)
  Print the length of your penguin's favoriteFoods array to the console with console.log()
*/

console.log(penguinFavoriteFoods.length)

/*
  (EASY)
  Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
*/

penguinFavoriteFoods.splice(3, 1, 'Pineapple');

/*
  (EASY)
  Create a new variable named lastFavoriteFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.
*/

const lastFavoriteFood = penguinFavoriteFoods[penguinFavoriteFoods.length - 1];

/*
  (EASY)
  Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console.
*/

for (i = 0; i < penguinFavoriteFoods.length; i++) {
  console.log(penguinFavoriteFoods[i]);
};