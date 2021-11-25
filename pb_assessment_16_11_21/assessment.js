

/*1

Create a function named "nameOfCity". 
If a passed string begins with "Los" or "New", 
then return the full string. 
If not, return "The city name does not begin with Los or New". 
The function should be case insensitive.*/

function nameOfCity(str) {
    let testString = str.toLowerCase().slice(0, 3);
  
    if (testString === "new" || testString === "los") {
      return str;
    }
    return "The city name does not begin with Los or New";
  }
  
  console.log(nameOfCity("Los Angeles"));
  console.log(nameOfCity("New York"));
  console.log(nameOfCity("newark"));
  console.log(nameOfCity("London"));
  
/* EXPLANATION 
I only want the first three characters of my string to be evaluated, so I slice it with slice(0,3), giving me the chars with indices 0,1,2.

 if (testString === "new" || testString === "los") 
  return str;
 --> if the sliced out lowercase new string is strictly "new" OR "los",
 return this string

*/


  /* 2 isDivisible?
Create a function named "isDivisible". The function should take an integer number as an argument. If the integer is divisible by 100, then return true. If not, return false. */
  
  function isDivisible(n) {
    if (n % 100 === 0) {
      return true;
    }
    return false;
  }
  
const  isDivisible2 = a => a%100 === 0;
const  isDivisible3 = a => !(a%100);


  console.log(isDivisible3(100));
  console.log(isDivisible3(1000));
  console.log(isDivisible3(1));
  
  /* 3 
  Create a function named "missingAngle" which takes two angles of a triangle as arguments, and classifies the missing angle as either acute, right or obtuse. 


*/
  
  function missingAngle(a=90, b=90) {
    let c = 180 - a - b;
    if (c < 90) {
      return "Acute angle.";
    }
    if (c === 90) {
      return "Right angle.";
    }
    if (c < 180) {
      return "Obtuse angle.";
    }
    return "Straight angle.";
  }
  
  console.log(missingAngle(11, 20));
  console.log(missingAngle(27, 59));
  console.log(missingAngle(135, 11));
  console.log(missingAngle(10, 80));
  
/* EXPLANATION
----> function accepts two arguments, both should be angles. 

Acute angle c < 90°
right angle c = 90°
obtuse angle c > 90°  
straight angle c = 180° (if a + b = 0). 

The sum of all angles inside a triangle is 180° = a + b + c 
with a,b,c being the three angles 

so to get the value of c, we need to permute the equation  180° = a + b + c 
to:  let c = 180 - a - b

then we formulate the if conditions and we're good to go */



  /* 4 
  What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".*/
  
  function isRaining(umbrella) {
    return umbrella
      ? "wet day - you need an umbrella"
      : "dry day - leave your umbrella home";
  }
  
  console.log(isRaining(true));
  console.log(isRaining(false));
  
  /* 5 
  Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.*/
  
  function geometricalSequence(iterations = 9) {
    let str = "";
    for (let index = 0; index < iterations; index++) {
      str += `${Math.pow(2, index)},`;
    }
    return str;
  }
  
  console.log(geometricalSequence(9));
  
  /* 6 
  Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.*/
  
  function mutliplesOfThree(n = 6) {
    let str = "";
    for (let x = 1; x <= n; x++) {
      str += `${x * 3},`;
    }
    return str;
  }
  
  console.log(mutliplesOfThree(5));
  


  /* 7 
  Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.*/
  
    // as arrow function
const powerOf = (n) => Math.pow(n, n);


  
   // as regular named function)
  function powerOfNamed(n) {
      return Math.pow(n, n);
  }
  
  
  console.log(powerOf(4));
  
  /* 8 
  
  Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.

  Here I found it the easiest for me to construct an arguably huge if-conditions with comparison and logical operators:
  
  newStr === "a" || newStr === "e" || newStr === "i" || newStr === "o" || newStr === "u"

  it's possible to do so. So I did it, to get my countVowel variable filled up with checks: 

  countVowel += 1;

  of course, before I can do so, I have to tell my function, where to put the vowel counts, so I open up an "empty jar" with

   let countVowel = 0;

   it's zero, so the function knows to expect numbers
  
  */
  
  function vowelCount(str) {
    let countVowel = 0;
  
    for (let i = 0; i < str.length; i++) {
   let newStr = str[i].toLowerCase();
      if (
        newStr === "a" ||
        newStr === "e" ||
        newStr === "i" ||
        newStr === "o" ||
        newStr === "u"
      ) {
        countVowel += 1;
      }
    }
    return countVowel;
  }
  
  console.log(vowelCount("hello"));
  console.log(vowelCount("test"));
  console.log(vowelCount("fbw"));
  
  
  
  ////ANOTHER WAY OF DOING IT - experimental with for-of - condition
  
  /* The for...of statement creates a loop iterating over iterable objects
  such as strings, arrays
  
  so when you say: for (let element of array), it's like saying: 
  "iterate through every element of the array"

  BUT, you declare this element to be a variable with a name with
  let, const or var in the for-of condition, here this variablie is:

  let letter 

  so: the because of the for of, the computer knows that whatever variable 
  you declare (here: variable with the name we gave it: letter) is one item of the 
  iterable (here: a string).
  */
  
  
  function countVowels(str) {
    str = str.toLowerCase();
    let vowelArray = ["a", "e", "i", "o", "u"],
      counter = 0;
  
    for (let letter of str) {
      if (vowelArray.includes(letter)) {
        counter++;
      }
    }
    return counter;
  }
  
  console.log(countVowels("hello"));
  console.log(countVowels("test"));
  console.log(countVowels("fbw"));