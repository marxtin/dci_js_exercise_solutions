/* 1st December
- Recap map, filter
- reduce

- if we have time:
- split,join,concatenate,slice,sort,find
*/

//Recap map
// I will use map, when I need to return a new array with same length of the calling array, and using each of the elements of the calling array.

// Take an array of strings with names of users, and create an object for each user.

const usersArray = ["MartinB","Martins","MartinJ","Jade","Maurice","Olumide"];

/* 
{
  name: "nameOfUser"
} 
*/ 

// const usersObjectArray = usersArray.map((user)=>{
//   const temporalObject = {
//     name: user
//   }
//   return temporalObject
// })

const usersObjectArray = usersArray.map(function (user) {
  const temporalObject = {
    name: user
  }
  return temporalObject
})

// console.log(usersObjectArray)



/*
Create a function that accepts an array of strings, and returns a new array with each String having the first letter upper case.
example:
  arrayToUpperCase(["cat","rabbit"]) // -> ["Cat","Rabbit"]
*/

function arrayToUpperCase (array) {
  const temporalArray = array.map(function (string) {
    return string[0].toUpperCase()+string.slice(1);
  })
  return temporalArray
}

// console.log(arrayToUpperCase(["cat","rabbit"]))


//-------------------------------
// filter method
// filter method will return a new array with the elements of the calling array that pass the test/condition of the callback function. The callback function can only return true/truthy or false/falsy values. If the callback function returns true, then we save the current element. If the callback function returns false, then we skip the current element


/* Create a function that filters an array of strings according to a letter passed in the arguments. The function will receive 2 arguments, an array of strings and a string with a letter. The function should return a new array with only the elements that contain the letter passed in the second argument.
example:
  checkForLetter(["piano","guitar","drums"],"u") // -> ["guitar","drums"]
*/

function checkForLetter (array,letter) {
  const temporalArray = array.filter((word)=>{
    if(word.includes(letter)){
      return true
    } else {
      return false
    }
  })
  return temporalArray;
}

console.log(checkForLetter(["piano","guitar","drums"],"u"))


//---------------------------------------
// reduce method
/* The reduce method will execute the callback function on each element of the calling array and it will return an accumulator variable that will be returned at the end of reduce method.
structure 1:

  function callbackReduceFunction (accumulator,element) {
    //some logic
    return the new value of the accumulator
  }

  let reducedOutput = callingArray.reduce(callbackReduceFunction)

structure 2A: 

  let reducedOutput = callingArray.reduce(function (accumulator,element) {
    //some logic
    return the new value of the accumulator
  })

structure 2B: 

  let reducedOutput = callingArray.reduce((accumulator,element) => {
    //some logic
    return the new value of the accumulator
  })

*/


// Create a function that accepts an array of numbers and returns the sum of all the elements.

// for loop approach
function sumForLoop (array) {
  let sum = 0; // a temporal variable
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

console.log(sumForLoop([1,2,3,4,5,6]))

// reduce approach structure 1
function callbackReduceFunction (accumulator,element) {
  return accumulator+element;
}

function sumReduceSt1 (array) {
  return array.reduce(callbackReduceFunction)
}

console.log(sumReduceSt1([1,2,3,4,5,6]))

// reduce approach structure 2A
function sumReduceSt2A (array) {
  let numberOfteration = 0;
  return array.reduce(function (accumulator,element){
    numberOfteration += 1;
    return accumulator+element; 
  })
} 

console.log(sumReduceSt2A([1,2,3,4,5,6]))

// reduce approach structure 2B
function sumReduceSt2B (array) {
  return array.reduce((accumulator,element)=>{
    return accumulator+element; 
  })
} 

console.log(sumReduceSt2B([1,2,3,4,5,6]))



// reduce approach shorter
function sumReduceShort (array) {
  return array.reduce((accumulator,element)=>accumulator+element)
}
console.log(sumReduceShort([1,2,3,4,5,6]))


//----------------------
// reduce method - initialValue
/* An extra argument that the reduce method accepts is the initial value of the accumulator. It is optional.
 - if I give an initial value to the reduce method, the accumulator will be starting with this value.
 - if I do not give any initial value to the reduce method, the accumulator will be starting with the first element of the array, and the element will start with the second element of the array

structure: 

let reducedOutput = callingArray.reduce(callbackFunction,initialValue)

CallbackFunction can be defined outside or inside the reduce.
*/

function callbackReduceFunction (accumulator,element) {
  return accumulator+element;
}

function sumReduceWithInitialValue (array) {
  return array.reduce(callbackReduceFunction,10)
}

console.log(sumReduceWithInitialValue([1,2,3,4,5,6]))


//--------------------
function sumReduceWithInitialValueSt2A (array) {
  return array.reduce(function (accumulator,element) {
    	return accumulator + element;
  },10)
}

console.log(sumReduceWithInitialValueSt2A([1,2,3,4,5,6]))

/* 
 To check with the debugger:
  1. Put the breakoutpoint in the line of the console.log() of the function you want to see.
  2. Click on the run and debug button of the debugger tab
  3. Once the debugger is in the console.log line, click in the step into button (the one with the down arrow). This will direct you to inside the function, and in this case it will direct you to the reduce method
  4. Now we want to get inside the callback function of the reduce method. To do this, click again on the step into button (the one with the down arrow). This will direct you to inside the callback function.
  5. Once you are inside the callback function use the step over button (the one with the curve arrow over the dot) to go line by line inside the callback function
By going line by line, you will see how the debugger will go from the start of the callback to the end of the callback. This is happening because the reduce method is calling the callback function per each element of the array. In the left tab you can see how the variables (accumulator and element) change with each call of the callback function. This may help you understand how things change with having or not an initial value for the reduce method
*/

