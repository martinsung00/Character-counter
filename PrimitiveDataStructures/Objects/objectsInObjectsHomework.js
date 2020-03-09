// Pre-made object called myPenguin.

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
  
    favoriteFoods: ["fish", "ice cream", "hot chocolate", "pineapples"]
};

/*
  (EASY)
  Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)
*/

myPenguin.outfit = {
    hat: 'Baseball cap',
    top: 'T-shirt',
    pants: 'Cargo shorts',
    shoes: 'Yeezys'
};

/*
  (MEDIUM)
  Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.
*/

penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

/*
  (EASY)
  Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!
*/

myPenguin.outfit.accessory = 'Pocket watch';

/*
  (EASY)
  Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)
*/

myPenguin.outfit.hat = 'Top hat';

/*
  (EASY)
  This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property.
*/

delete myPenguin.outfit.pants;
/*
  (HARD)
  Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. 
*/

const getValues = function(myPenguin) {
    let value;
    for (let key in myPenguin.outfit) {
      value = myPenguin.outfit[key];
      console.log(value); 
    }
  };

console.log(getValues(myPenguin));