// Variables
var a = 7;
var b = a;
var doubleQuoteStr = "This is a string";
var singleQuoteStr = 'This is also a string';
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
var copyOfA = myStr[3]; // Character from other string 

// Operators 
var addition = a + b;
var subtract = 45 - 12;
var multiply = 10 * 10; 
var divison = 16 / 2; 
var remainder = 11 % 3;
var myDecimal = 5.7;
var addStrings = "This is the start." + "This is the end.";

divison++; // Add one
divison--; // Minus one
a += b // Add the value 
a -= b // Minus the value 
a *= b // Multiply the value 
a /= b // Divide the value 

// Comparsion Operators
// == Equal to
// ==== Equal Value and Equal Type
// != Not Equal
// !== Not Equal Value or Not Equal Type
// > Greater than
// < Less than
// >= Greater than or Equal to
// <= Less than or Equal to 


// Escape Sequences in Strings
// --    \'	single quote
// --    \"	double quote
// --    \\	backslash
// --    \n	newline
// --    \r	carriage return
// --    \t	tab
// --    \b	backspace
// --    \f	form feed
var myLines = "FirstLine\n\tSecondLine\nThirdLine"

// Arrays
var sandwich = ["peanut butter", "jelly", "bread"];
var myArray = ["George", 100];
var myArray = [["the universe", 42], ["everything", 101010]]; // Nested
var myList = [["Chocolate Bar", 15], ["Ice Cream", 10], ["Pizza", 20], ["Chicken", 10], ["Crisps", 5]];
var myData = myArray[0];
var myData = myArray[0][1];
myArray[0] = 45;
myArray.push(88);                                             // Append
myArray.push(["dog", 3])
var removedFromMyArray = myArray.pop();                       // Remove and return last element
var removedFromMyArray = myArray.shift();                     // Remove and return first element 
myArray.unshift(["Paul", 35]);                                // Add to front of array


// Functions - Does not require Return statement - Return value undefined if not stated
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

function functionWithArgs(one, two) {
    console.log(one + two);
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);

  function timesFive(num) {
    return num * 5;
  }
  
  timesFive(5);
  timesFive(2);



  // If Statements 

  function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
        return "Yes, that was true";
    }
        return "No, that was false";
  }

  function testEqual(val) {
    if (val == 12) {                        // Converts to type if needed
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10);

  function testStrict(val) {
    if (val === 7) {                       // Without type conversion 
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);

  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10);

function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

  function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
    if (val > 10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  testGreaterThan(10);

  function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  testGreaterOrEqual(10);

  function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
  }
  testLessThan(10);

  function testLessOrEqual(val) {
    if (val <= 12) {  
      return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
  }
  testLessOrEqual(10);
  
  function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
    return "No";
  }
  testLogicalAnd(10);

  function testLogicalOr(val) {
    if (val < 10 || val > 20 ) {
      return "Outside";
    }
    return "Inside";
  }
  testLogicalOr(15);

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
    return "Between 5 and 10";
   }
  }
  testElseIf(7);

  function testSize(num) {
    if (num < 5) {
      return "Tiny"
    }
    else if (num < 10) {
      return "Small"
    }
     else if (num < 15) {
      return "Medium"
    }
     else if (num < 20) {
      return "Large"
    }
     else if (num >= 20) {
      return "Huge"
    }
    return "Change Me";
  }
  testSize(7);

  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= par -2) {
    return names[1];
  }
  else if (strokes == par -1) {
    return names[2];
  }
  else if (strokes == par) {
    return names[3];
  }
  else if (strokes == par +1) {
    return names[4];
  }
   else if (strokes == par +2) {
    return names[5];
  } else if (strokes >= par +3) {
    return "Go Home!";
  }
  return ""
}
golfScore(5, 4);

function abTest(a, b) {
     if (a < 0 || b < 0) return undefined;
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
   } 
  
  abTest(2,2);

    
// Assertion - Check if true, error thrown if evaluates to 0 or false  
assert.equal(7 + 1, 8);
assert.equal('a' + 'b', 'ab');

// Undefined - “not initialized” (e.g. a variable) or “not existing” (e.g. a property of an object).
let myVar;
assert.equal(myVar, undefined);

function func(x) {
  return x;
}
assert.equal(func(), undefined);

const obj = {};
assert.equal(obj.unknownProp, undefined);


// Null -  means “the intentional absence of any object value” (a quote from the language specification).

// The prototype of an object is either an object or, at the end of a chain of prototypes, null. Object.prototype does not have a prototype:
Object.getPrototypeOf(Object.prototype)

// If you match a regular expression (such as /a/) against a string (such as 'x'), you either get an object with matching data (if matching was successful) or null (if matching failed):
/a/.exec('x')

  
// Switch Statements 
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
      answer = "alpha";
      break;
      case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma";
      break;
      case 4:
      answer = "delta";
      break;
    }
    return answer;  
  }
  caseInSwitch(1);
  
  function switchOfStuff(val) {
    var answer = "";
      switch(val) {
        case "a":
        answer = "apple";
        break;
        case "b":
        answer = "bird";
        break;
        case "c":
        answer = "cat";
        break;
  
        default:
        answer = "stuff";
        break; 
      }
    return answer;  
  }

  switchOfStuff(1);
  
  function sequentialSizes(val) {
    var answer = "";
   switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
   }
    return answer;  
  }
  sequentialSizes(1);
  
  function chainToSwitch(val) {
    var answer = "";
    switch(val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
    return answer;  
  }
  
  chainToSwitch(7);

  var count = 0;

function cc(card) {
   switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
      }
      if (count > 0){
        return count + " Bet";
      } else {
        return count + " Hold";
      }
  return "";
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
  
// Objects AKA Dictionaries 

var myDog = {
    "name": "Lou",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  myDog.bark = "woof";          // Add
  delete myDog.tails;           // Delete

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  testObj.shoes = "boots";     // Change
  
  var hatValue = testObj.hat     
  var shirtValue = testObj.shirt 
  var hatValue2 = testObj["hat"];
  var shirtValue2 = testObj["shirt"];

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  var playerNumber = 16;      
  var player = testObj[playerNumber];  


function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
  
    return result;
  }
  phoneticLookup("charlie");

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {

  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else { 
  return "Not Found";
 } 
}
checkObj("gift");

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
  ,
  {
   "artist": "50 Cent",
   "title": "Get Rich or Die Tryin",
   "release_year": 2001,
   "formats": [ 
     "CD",
     "8T",
     "LP"
   ],
   "gold": true
 }
];


var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

// While Loops 
var myArray = [];

var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}

// For Loops
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

function multiplyAll(arr) {
  var product = 1;
for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product; 
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

// Do While Loops
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 10);

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
for (var x = 0; x < contacts.length; x++){
  if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
      } else {
          return "No such property";
      }
  }
}
return "No such contact";
}
lookUpProfile("Akira", "likes");

// Random Numbers 
function randomFraction() {
  return Math.random();     // Random Decimal 
}

function randomWholeNum() {
  return Math.floor(Math.random() * 10);  // Round decimal to nearest whole number then multiply - this specfic returns number between 1-9
}


function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; 
}
var myRandom = randomRange(5, 15);

// Convert to Int 
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

// Ternary Operators
function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);


//
// ES6 - All modern browsers support it 
//

// Strict Mode 
"use strict";
x = 3.14; // throws an error because x is not declared

// Let - Can change,  local variable instead of global like var
let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}

// Constants - All Caps for naming common
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error

"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

// Object Freeze
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}

// Anononymous Functions - Functions that have no names 

function() {
  alert('hello');
}

// Generally use with an event handler

myButton.onclick = function() {
  alert('hello');
}

// Can also assign to be value of a variable 
var myGreeting = function() {
  alert('hello');
}

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

// doubles input value and returns it
const doubler = (item) => item * 2;

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};

// Default Parameters 
function greeting(name = "Anonymous") {
  return "Hello " + name;
}
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// Rest Operators -  Can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

// Spread Operator - Expand arrays and other expressions in places where multiple parameters or elements are expected.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

// Destructuring objects to assign to Variable 
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
   const { tomorrow: tempOfTomorrow } = avgTemperatures
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
    const { tomorrow: { max: maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// Destructing Arrays to assing Variables

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5 

// Strings using Template Literals

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

// Functions - can be done with keyword 
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// Getters and Setters to Control Access to an Object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut

// Import
import { function } from "file_path_goes_here"
// We can also import variables the same way!

import subtract from "math_functions";              // Default (Fallback) - can only have one 

// Import Everything 
import * as myCaptialStrings from "capitalize_strings";

// Export 
const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }

export default function subtract(x,y) {return x - y;} // Fallback - can only have one 

//
// Not ES6 specific? 
//

// Test Method 

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Ignores the case
let result = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); // Match method to extract found string 

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // G = Search for more than one / = I = Case Insensitive 
let result = twinkleStar.match(starRegex); 

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;                      // Wilcard = Search for any words containing x 
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;                  // Character classes = Search for all instances of characters 
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;                // Characeter set = Define a range of characters
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Can use numbers and characters 
let result = quoteSample.match(myRegex); 

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // ^ = Don't find these characters / numbers 
let result = quoteSample.match(myRegex); 

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // See if character appears more than once 
let result = difficultSpelling.match(myRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; //   ? - Laxy Match =  finds the smallest possible part of the string that satisfies the regex pattern
let result = text.match(myRegex);

let theEnding = "This is a never ending story";
let storyRegex = /story$/;                      // $ = Search at end of string 
storyRegex.test(theEnding);
// Returns true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // \w to count the number of alphanumeric characters in various quotes and strings.
let result = quoteSample.match(alphabetRegexV2).length;

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // \W to count the number of non-alphanumeric characters in various quotes and strings.
let result = quoteSample.match(nonAlphabetRegex).length;

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Looks for digit characters e.g. 1 
let result = numString.match(numRegex).length;

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Look for non digits 
let result = numString.match(noNumRegex).length;


let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Username must have more than 2 characters (any case), numbers can only be at end
let result = userCheck.test(username);

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;          // Match between 3 to 5 "a"
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

let haStr = "Hazzzzah";
let haRegex = /z{4,}ah/; // Match only when 4 more "z" appear 
let result = haRegex.test(haStr);

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;                // Optional = checks for zero or one of the preceding element
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

// Debugging
let seven = 7;
let three = "3";
console.log(seven + three);

console.log(typeof seven)   // Type of Data
console.log(typeof three)

// Copy Array using Slice

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// Combine Arrays using Spread

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

// Check for presence of Element with Index Of
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // returns -1
fruits.indexOf('oranges') // returns 2
fruits.indexOf('pears') // returns 1, the first index at which the element exists

// Objects 
let dog = {
  name: "Lou",
  numLegs: 4
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};
console.log(dog.name);
dog.sayLegs(); 

// Constructors -  functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"

class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird(); // Create new instance of Bird, has all its properties 

function Dog(name, color) {                           // Use parameters to create new instances easier 
  this.name = name;
  this.color = color;
  Dog.prototype.numLegs = 4;                          // This is same for all instances so use prototype to avoid having it copied over and over 
}

Dog.prototype = {                                     // Declare all prototypes at once 
  constructor: Dog, // Define the constructor property to avoid erasing it
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let terrier = new Dog("Mutley", "grey");

function House(numBedrooms) { 
  this.numBedrooms = numBedrooms;
}

var myHouse = new House(5); 
myHouse instanceof House;                 // Check if instance of anoher Object

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);      // Check if Protype of another Object

// Use Inheritance to avoid repeating code 
function Animal() { };

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

let dog = Object.create(Animal.prototype); 
dog.eat(); // Should print "nom nom nom"


Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"

//  Add method after Inheritance 
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof woof!");
};

function Bird() {
  let weight = 15;                  // private property

 this.getWeight = function() {       // publicly available method that a bird object can use
   return weight;
 };  
}

// Unit Tests 

// Code to Test
export function id(x) {
  return x;
}

import {strict as assert} from 'assert'; // Import the assertion library.
import {id} from './id.js'; // Import the function to test 

test('My test', () => { // Define a test by calling function test() - First parameter: Name of test. - 
  assert.equal(id('abc'), 'abc'); // Second Parameter: The test code (provided via an arrow function with 0 parameters).
});
