# JavaScript-Cheat-Sheet
Basic syntax for reference

Update: Converted to ReadMe for easier readability.

## Table of Contents

- [Call Stack](#call-stack)
- [Event Loop](#event-loop)
- [Value Types and Reference Types](#value-types-and-reference-types)
- [Double Equals and Triple Equals](#double-equals-and-triple-equals)
- [call()](#call)
- [apply()](#apply)
- [bind()](#bind)
- [map()](#map)
- [filter()](#filter)
- [reduce()](#reduce)
- [Object.create()](#objectcreate)
- [Object.assign()](#objectassign)
- [Set](#set)
- [Promise](#promise)
- [async/await](#asyncawait)
- [Variables](#variables)
- [Operators](#operators)
- [Escape Sequences in Strings](#escape-sequences-in-strings)
- [Arrays](#arrays)
- [Functions](#functions)
- [If Statements](#if-statements)
- [Assertion](#assertion)
- [Undefined](#undefined)

- [Switch Statements](#switch-statements)
- [Objects](#objects)
- [Loops](#loops)
- [Numbers](#numbers)
- [ES6](#es6)
- [Test Method](#test-method)
- [Constructors](#constructors)
- [setTimeout and setInterval](#settimeout-and-setinterval)


## Call Stack
Javascript is a single threaded single concurrent language, meaning it can handle one task at a time or a piece of code at a time. It has a single call stack which along with other parts like heap, queue constitutes the Javascript Concurrency Model (implemented inside of V8).

**Call Stack** - It’s a data structure which records the function calls, basically where in the program we are. If we call a function to execute, we push something on to the stack, and when we return from a function, we pop off the top of the stack.

**Heap** - Objects are allocated in a heap i.e mostly unstructured region of memory. All the memory allocation to variables and objects happens here.

**Queue** - A JavaScript runtime contains a message queue, which is a list of messages to be processed and the associated callback functions to execute. When the stack has enough capacity, a message is taken out of the queue and processed which consists of calling the associated function (and thus creating an initial stack frame). The message processing ends when the stack becomes empty again. In basic words , these messages are queued in response to external async events(such as a mouse being clicked or receiving the response to an HTTP request), given a callback function has been provided. If, for example a user were to click a button and no callback function was provided — no message would have been enqueued.

## Event Loop
**Asynchronous callbacks** -  Run some part of code and give it a callback (function) which will execute later. We all must have encounter asynchronous callbacks like any AJAX request using ```$.get(),setTimeout(),setInterval(), Promises, etc.``` Node is all about asynchronous function execution. All these async callbacks doesn’t run immediately and are going to run some time later, so can’t be pushed immediately inside the stack unlike synchronous functions like ```console.log(), mathematical operations.```

Any of the WebAPI pushes the callback onto this queue when it’s done executing. The Event Loop now is responsible for the execution of these callbacks in the queue and pushing it in the stack, when it is empty. Event loop basic job is to look both at the stack and the task queue, pushing the first thing on the queue to the stack when it see stack as empty. Each message or callback is processed completely before any other message is processed.

## Value Types and Reference Types
Javascript has 5 data types that are passed by **value:** ```Boolean, null, undefined, String, and Number```. We’ll call these **primitive types**.

Javascript has 3 data types that are passed by reference: ```Array, Function, and Object```. These are all technically Objects, so we’ll refer to them collectively as **Objects**.

### Primitives
If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.

```javascript
var x = 10;
var y = 'abc';
var z = null;
```

When we assign these variables to other variables using =, we **copy** the value to the new variable. They are copied by value.

```javascript
var x = 10;
var y = 'abc';var a = x;
var b = y;console.log(x, y, a, b); // -> 10, 'abc', 10, 'abc'
```
Both a and x now contain 10. Both b and y now contain 'abc'. They’re separate, as the values themselves were copied.

Changing one does not change the other. Think of the variables as having no relationship to each other.

```javascript
var x = 10;
var y = 'abc';var a = x;
var b = y;a = 5;
b = 'def';console.log(x, y, a, b); // -> 10, 'abc', 5, 'def'
```
### Objects
Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.

Objects are created at some location in your computer’s memory. When we write ```arr = []```, we’ve created an array in memory. What the variable arr receives is the address, the location, of that array. The array in memory is what changes. When we use ```arr``` to do something, such as pushing a value, the Javascript engine goes to the location of ```arr``` in memory and works with the information stored there.

### Assigning by Reference
When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over as if it were a primitive. ***Objects are copied by reference*** instead of by value.

```javascript
var reference = [1];
var refCopy = reference;
```

Each variable now contains a reference to the same array. That means that if we alter reference, refCopy will see those changes:

```javascript
reference.push(2);
console.log(reference, refCopy); // -> [1, 2], [1, 2]
```

### Reassigning a Reference
Reassigning a reference variable replaces the old reference.

```javascript
var obj = { first: 'reference' };
obj = { second: 'ref2' }
```
The address stored in ```obj``` changes. The first object is still present in memory, and so is the next object.

When there are no references to an object remaining, the Javascript engine can perform garbage collection. This just means that the programmer has lost all references to the object and can’t use the object any more, so the engine can go ahead and safely delete it from memory. In this case, the object ```{ first: 'reference' }``` is no longer accessible and is available to the engine for garbage collection.

### Passing Parameters through Functions
When we pass primitive values into a function, the function copies the values into its parameters. It’s effectively the same as using =

```javascript
var hundred = 100;
var two = 2;function multiply(x, y) {
    // PAUSE
    return x * y;
}

var twoHundred = multiply(hundred, two);
```

In the example above, we give ```hundred``` the value ```100```. When we pass it into ```multiply```, the variable ```x``` gets that value, ```100```. The value is copied over as if we used an ```=``` assignment. Again, the value of ```hundred``` is not affected. 

### Pure Functions
We refer to functions that don’t affect anything in the outside scope as pure functions. As long as a function only takes primitive values as parameters and doesn’t use any variables in its surrounding scope, it is automatically pure, as it can’t affect anything in the outside scope. All variables created inside are garbage-collected as soon as the function returns.

A function that takes in an Object, however, can mutate the state of its surrounding scope. If a function takes in an array reference and alters the array that it points to, perhaps by pushing to it, variables in the surrounding scope that reference that array see that change. After the function returns, the changes it makes persist in the outer scope. This can cause undesired side effects that can be difficult to track down.

Many native array functions, including ```Array.map``` and ```Array.filter```, are therefore written as pure functions. They take in an array reference and internally, they copy the array and work with the copy instead of the original. This makes it so the original is untouched, the outer scope is unaffected, and we’re returned a reference to a brand new array.

Impure Function:

```javascript
function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

var alex = {
    name: 'Alex',
    age: 30
};

var changedAlex = changeAgeImpure(alex);console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }
```

This impure function takes in an object and changes the property age on that object to be 25. Because it acts on the reference it was given, it directly changes the object alex. Note that when it returns the person object, it is returning the exact same object that was passed in. alex and alexChanged contain the same reference. It’s redundant to return the person variable and to store the reference in a new variable.

Pure Function:

```javascript
function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

var alex = {
    name: 'Alex',
    age: 30
};

var alexChanged = changeAgePure(alex);console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }
```

In this function, we use JSON.stringify to transform the object we’re passed into a string, and then parse it back into an object with JSON.parse. By performing this transformation and storing the result in a new variable, we’ve created a new object. There are other ways to do the same thing such as looping through the original object and assigning each of its properties to a new object, but this way is simplest. The new object has the same properties as the original but it is a distinctly separate object in memory.

When we change the age property on this new object, the original is unaffected. This function is now pure. It can’t affect any object outside its own scope, not even the object that was passed in. The new object needs to be returned and stored in a new variable or else it gets garbage collected once the function completes, as the object is no longer in scope.

## Double Equals and Triple Equals
When using triple equals === in JavaScript, we are testing for strict equality. This means both the type and the value we are comparing have to be the same.

```javascript
'hello world' === 'hello world'
// true (Both Strings, equal values)true === true
// true (Both Booleans, equal values)
```

When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion. Type coercion means that two values are compared only after attempting to convert them into a common type.

```javascript
77 == '77'
// true
```

The string value of '77' can easily be converted into the number value of 77. Since 77 equals 77, we get our answer of true.

## call()
It takes in two arguments

    Context (object)
    Arguments

A context is an object that replaces the this keyword in the area function. And then arguments are passed as function arguments.

```javascript
const calcArea = {
  pi: 3.14,
  area: function(r) {
    return this.pi * r * r;
  }
}

calcArea.area(4); // prints 50.24

calcArea.area.call({pi: 3.14159}, 4)

50.26544
```

## apply()
Apply is exactly the same as call(), except function arguments are passed as an array or you can use an Array object (new Array(2, 4)).

```javascript
const cylinder = {
    pi: 3.14,
    volume: function(r, h) {
        return this.pi * r * r * h;
    }
};

cylinder.volume.call({pi: 3.14159}, 2, 4);// 50.26544

cylinder.volume.apply({pi: 3.14159}, [2, 4]);// 50.26544
```

## bind()
It allows us to input context into a function which returns a new function with an updated context. Basically it means bind() attaches a new this to a given function. Unlike call() and apply(), bind() function is not executed immediately but later when required. bind() is useful while working with JavaScript events.

```javascript
const cylinder = {
    pi: 3.14,
    volume: function(r, h) {
        return this.pi * r * r * h;
    }
};


var customVolume = cylinder.volume.bind({pi: 3.14159}); // This will not be instantly called
// In future or after some event is triggered.
customVolume(2,4); // Now pi is 3.14159
```

## map()
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);// halves is [1, 2, 4, 5]
```

## filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);// longWords is ["exuberant", "destruction", "present"]
```

## reduce()
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);// total is 7
```

## Object.create()
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

```javascript
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

## Object.assign()
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

## Set
A Set is a collection of values. It’s mutable, so your program can add and remove values as it goes. So far, this is just like an array. But there are as many differences between sets and arrays as there are similarities.

First, unlike an array, a set never contains the same value twice. If you try to add a value to a set that’s already in there, nothing happens.

```javascript
 var desserts = new Set("🍪🍦🍧🍩");
> desserts.size
    4
> desserts.add("🍪");
    Set [ "🍪", "🍦", "🍧", "🍩" ]
> desserts.size
    4
```

Set can contain any type of JS value. Just as with strings, adding the same object or number more than once has no added effect.

Second, a Set keeps its data organized to make one particular operation fast: membership testing.

```javascript
> // Check whether "zythum" is a word.
> arrayOfWords.indexOf("zythum") !== -1  // slow
    true
> setOfWords.has("zythum")               // fast
    true
```

## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation completed successfully.
    rejected: meaning that the operation failed.

```javascript
var isMumHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMumHappy) {
            var phone = {
                brand: 'Apple',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mum is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};

// call our promise
var askMum = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new black iPhone.'
        })
        .catch(function (error) {
            // oops, mum don't buy it
            console.log(error.message);
            // output: 'mum is not happy'
        });
};

askMum();
```

## async/await

### Async functions

The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

For instance, this function returns a resolved promise with the result of 1

```javascript
async function f() {
  return 1;
}

f().then(alert); // 1
```

#### Await

The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s an example with a promise that resolves in 1 second:

```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
```

The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: await literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

We can’t use await in top-level code. For example, this will not work:

```javascript
// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();
```

But we can wrap it into an anonymous async function, like this:

```javascript
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
```

When we need to wait for multiple promises, we can wrap them in Promise.all and then await:

```javascript
// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);
```

In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.

## Variables

```javascript
var a = 7;
var b = a;
var doubleQuoteStr = "This is a string";
var singleQuoteStr = 'This is also a string';
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
var copyOfA = myStr[3]; // Character from other string 
```

## Operators 
```javascript
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

// Ternary Operators
function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);
```

## Escape Sequences in Strings
```javascript
// --    \'	single quote
// --    \"	double quote
// --    \\	backslash
// --    \n	newline
// --    \r	carriage return
// --    \t	tab
// --    \b	backspace
// --    \f	form feed
var myLines = "FirstLine\n\tSecondLine\nThirdLine"
```

## Arrays
```javascript
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

// Map - Arrays have a map() method that is commonly used for mapping data to other data
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2); // [2, 4, 6]

```

## Functions 
> Functions are executed when they are called. This is known as **invoking** a function.

> Functions always return a value. If no return value is specified, the function will return undefined by default.

> Values can be passed into functions and used within the function. The name of the value is called a parameter. The actual value itself is called an argument.

```javascript
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
  ```

### Function Expressions
A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name. Function Expressions are not hoisted, and therefore cannot be used before they are defined. In the example below, we are setting the anonymous function object equal to a variable.

```javascript
let name = function(parameters){
  statements
}
```

### Arrow Function Expression
An Arrow Function Expression is a shorter syntax for writing function expressions. Arrow functions do not create their own ```this``` value.

```javascript
let name = (parameters) => {
  statements
}
```

## If Statements 
```javascript
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
 ```
 
## Assertion
> Check if true, error thrown if evaluates to 0 or false  
```javascript
assert.equal(7 + 1, 8);
assert.equal('a' + 'b', 'ab');
```

## Undefined
> “not initialized” (e.g. a variable) or “not existing” (e.g. a property of an object).
```javascript
let myVar;
assert.equal(myVar, undefined);

function func(x) {
  return x;
}
assert.equal(func(), undefined);

const obj = {};
assert.equal(obj.unknownProp, undefined);
```

## Switch Statements 
```javascript
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
```

## Objects

```javascript
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
```

## Loops
```javascript
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
```

## Numbers
```javascript
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
```


## ES6
```javascript
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
```
## Test Method 
```javascript
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
```

## Constructors
> Functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
```javascript
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
```
## setTimeout and setInterval
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

    setTimeout allows us to run a function once after the interval of time.
    setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

### setTimeout
```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

```javascript
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);
```

With arguments:
```javascript
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

### Canceling with clearTimeout

```javascript
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)
```

### setInterval
All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

To stop further calls, we should call ```clearInterval(timerId)```.

```javascript
// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```
