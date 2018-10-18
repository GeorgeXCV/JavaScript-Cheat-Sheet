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

