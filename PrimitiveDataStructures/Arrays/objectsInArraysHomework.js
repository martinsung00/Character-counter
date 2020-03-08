// Pre-set object
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
    },
  
    favoriteFoods: ["fish", "ice cream", "hot chocolate", "pineapples"],
  
    outfit: {
      hat: "top hat",
      shirt: "Hawaiian shirt",
      shoes: "flip-flops",
      accessory: "pocket watch"
    }
  };

/*
  Reinforcements have arrived!
*/
let gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function() {
      console.log("QUACK!!!");
    }
  };
  
  let ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function() {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  let fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function() {
      console.log("Hi there!");
    }
  };

/*
  (EASY)
  Create a new variable named penguins and set it equal to an array that lists these three penguins.
*/

let penguins = [gunter, ramon, fred];

/*
  (EASY)
  Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console!
*/

console.log(penguins[0]);

/*
  (EASY)
  Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.
*/

secondPenguin = penguins[2];

/*
  (EASY)
  Print to the console the name of the last penguin in the list.
*/

penguins.push(myPenguin);
console.log(penguins);

/*
  (EASY)
  Print the length of the penguins array to the console.
*/

console.log(penguins.length);

/*
  (EASY)
  Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).
*/

penguins[0].canFly = true;

/*
  (EASY)
  Call the sayHello method of the first penguin in your penguins array!
*/

penguins[0].sayHello();

/*
  (MEDIUM)
  
  Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
*/

function printValue(penguins) {
  let value;
  for (let i = 0; i < penguins.length; i++){
      for (let key of penguins[i]) {
        value = penguins[i][key];
        console.log(value); 
      }
    };
  }