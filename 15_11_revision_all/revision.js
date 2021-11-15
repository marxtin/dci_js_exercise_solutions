/* 

1. BASICS
-variable types
-variable data types
string methods
array Methods

IF CONDITION
- if structure
- conditions
- logical and comparison operators
- ternary operator

FOR LOOPS
- for loop structure
- condition
- reading a for loop 

FUNCTIONS
- function structure
- parameters and arguments



*/

//1. Variable Types
// let, const, var

// var: always global scope
// // for let, if we declare a variable without value, undefined is assigned

//let, const: for local scope
// for let, if we declare a variable without value, nothing is assigned

//const: variable declared will keep constant value, not possible to change value -> error if we try

//let, var: can later change value

/* Variable DATA Types

Numbers: 1,2,3...
Strings: "something", '1,2,3'
Arrays: [1,2,3], ["hi", "hello", "howdy"]
Objects: variable data type composed of keys and values are
Undefined: temporal value assigned when no value is initialized for a variable
NaN: all values that can not be represented the same as numbers in the pc

*/ ///
let myNumberOne = 123;
let myStringOne = "hello";
let myArrayOne = [1, 2, 3];
let myArrayTwo = ["Martin", "Martin", "Martin", "Martin"];
let myObject = {
  userNAme: "John",
  age: 55,
  hobbies: ["reading", "coding"],
};

///STRING METHODS
/* 
  -toLowerCase()
  -toUpperCase()
  -slice(), substring(), substr()
  -includes()
  -trim()

*/
/* toUpperCase()+toLowerCase()
arguments: indexStart, indexEnd --> optional!*/

let testString = "Banana Bananarama";

//substring() -> take some part of the string according to the arguments
//indexStart, indexEnd
//no negative values allowed
console.log(testString.substring(0, 6));
//---> "Banana"

//slice() -> take some part of the string according to the arguments:
//indexStart, indexEnd
//negative values allowed
console.log(testString.slice(7, 17));
//---> "Bananarama"

//substr() -> take some part of the string according to the arguments:
///(index-start, length) --> how many chars do we want?
console.log(testString.substr(0, 6));
//---> "Bananarama"

//main differences:
// for slice, we can use negative values, for slice we can not
// for substring, we can interchange the order of the values, for slice we can not

console.log(testString.slice(-10, -4));

//includes() --> will return true or false if string in arguments is in main strings

console.log(testString.includes("a"));

//trim()
let testStringTrim = "   Howdy   ";
console.log(testStringTrim.trim());

/* Array Methods 

- push()
- pop()
- unshift()
- shift()

*/

let euroCities = ["Hamburg", "Athens", "Naples", "Marseille", "Bratislava"];

let newLength = euroCities.push("Bilbao", "Roma");

console.log(euroCities);
console.log(newLength);

let removedItem = euroCities.pop();

// only without arguments

console.log(removedItem);
console.log(euroCities);

//unshift() --- > adds item to the beginning of the array
//shift () ---> removes item from the start of the array

let removedItem2 = euroCities.shift();

console.log(euroCities);
console.log(removedItem2);

/* IF STATEMENTS / CONDITIONS

---> if (left comparison right)
---> return BOOLEAN --- true? false? 
---> other: else 

*/ /////

function compareNum(num) {
  let message = "";
  if (num >= 10) {
    message = `${num} is higher or equal than 10`;
  } else {
    message = `${num} is lower than 10`;
  }
  return message;
}

console.log(compareNum(10));

//TERNARY ? : --- if you see a statement with ? and : you for sure
// have a ternary

let newNum = 12;

newNum > 20 ? console.log("higher") : console.log("lower");

//assign with ternary

let newerString = "Hello";

let assignWithTernary =
  newerString[0] === "J" ? "It starts with J" : "It does not start with J";

console.log(assignWithTernary);

/* 
FOR LOOPS
*/

let printedMessage = "Ex4 ";
let text = "the temperature is 15°C";
let c = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] == "p" || text[i] == "t") {
    printedMessage += i;
    c++;
  }
}

console.log(printedMessage);
console.log(c);

function checkTemp(n) {
  let str = "";
  if (n >= 15) {
    str = `${n}° is hot`;
  } else {
    str = `${n}° is not hot`;
  }
  return str;
}

console.log(checkTemp(1));

//////is letter "o" in string?

function checkU(text) {
    let indexOfU;

    for (let i =0; i < text.length; i++) {
        if (text[i].toLowerCase() === "u") {
            indexOfU = i;
            break;
        }
    }
    if (indexOfU >=0) {
        return `the letter u is first found in the index ${indexOfU}`
    }else {
        return false
    }
}

console.log(checkU("Ute"));


function checkUReduced(text) {
   

    for (let i =0; i < text.length; i++) {
        if (text[i].toLowerCase() === "u") {
            return `the letter u is first found in the index ${i}`
        }
    }
        return false
    
}

console.log(checkUReduced("Ute"));