/*
  1. (EASY)
  Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page, e.g. character's name, origin, author, and notes –– all of them strings.
  Extra credit question: what is difference here between let myPenguin = ... and const myPenguin = ... ?
  Hint: It's not that one cannot be mutated! Try it out!
*/

// Create an object named myPenguin using const.
const myPenguin = {
    name: 'Skipper',
    origin: 'Madagascar',
    author: 'Mark Burton',
    voiceActor: 'Tom McGarth'
};

let myPenguin2 = {
    name: 'Private',
    origin: 'Madagascar',
    author: 'Mark Burton',
    voiceActor: 'Christopher Knights'
};

/*
  2. (EASY)
  Print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"
*/

// Log the name 'Skipper' from my penguin using object.key.
// console.log ("Hello, I'm a penguin and my name is" + " " + myPenguin.name); 

/*
  3. (EASY)
  Write another line of code that adds a new property to your penguin called canFly and set it to false.
  
  Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.
*/

// Add a new property by using obj.value = new key.
myPenguin.canFly = false;

/*
  4. (MEDIUM)
  Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"
  
  Note: Again, don't modify your previous code! Do this step by writing a new line of code.
  This line of code should invoke your function: myPenguin.chirp();
*/

// Set it so that myPenguin.chirp will be a function within the object that logs the phrase.
myPenguin.chirp = function() {
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
};

/*
  (MEDIUM)
  Add another method to your penguin called sayHello that prints to the console the same message from the problem above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way if you change its name later, your method will still work!
*/

// Set the object.value so that say hello will be a function.
myPenguin.sayHello = function() {
  console.log("Hello, I'm a penguin and my name is" + " " + myPenguin.name)
}

/*
  (EASY)
  Next, call your penguin's sayHello() method and make sure that it works.
*/

// Call the function Say Hello.
// myPenguin.sayHello()

/*
  (EASY)
  Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
*/

myPenguin.name = 'Penguin McPenguinFace';
myPenguin.sayHello();

/*
  (MEDIUM)
  Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.
*/

myPenguin.fly = function() {
  if (myPenguin.canFly === true) {
    console.log('I can fly');
  } else {
    console.log('No flying for me');
  }
};

/*
  (EASY)
  Call your penguin's fly() method and make sure it works!
*/

// myPenguin.fly();

/*
  Change the canFly property to true -- again, without modifying any of your previous code!
*/

myPenguin.canFly = true;

/*
  Now call your penguin's fly() method again and make sure it works as expected!
*/

myPenguin.fly();

/*
  Write a for ... in loop to print each key to the console.
*/

const getKeys = function(myPenguin) {
  for (let key in myPenguin) {
    console.log(key);
  }
};

/*
  Write another for ... in loop to print the value of each key to the console.
*/

const getValues = function(myPenguin) {
  let value;
  for (let key in myPenguin) {
    value = myPenguin[key];
    console.log(value); 
  }
};
