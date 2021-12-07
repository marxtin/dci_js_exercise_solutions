///Recursion

/* recursion in javascript / other langs / is the idea of having a function that calls 
itself inside its scope

0. commonly functions that use recursion accepts some parameters
1. repetitive
2.
3. needs exit condition
*/


///for loop version of countdown

for (let i = 10; i>0;i--){
    console.log(i);
}

//using recursion to make a countdown 

function countdown(count){
    if (count >0){
        console.log(count);
        return countdown(count-1)
    }else{
        return count
    }
}

countdown(10)


///The call stack is the queue line from js where the order of all the functions that have been called are saved


///RECURSION FOR DEEP CLONING

const obj1 = {
    name: "Gilgamesh",
    location: {
        city: "Uruk",
        region: "Sumer",
    }
}

function deepClone (obj){
    let clonedObj = {}
    for (let propertyName in obj){
        let propertyValue = obj[propertyName];
        if(typeof propertyValue === "object"){
            clonedObj[propertyName] = deepClone(propertyValue);
        }else{
            clonedObj[propertyName] = propertyValue;
        }
    }
    return clonedObj
}

const obj5 = deepClone(obj1);

obj5.name = "Sargon";
obj5.location.city = "Akkad"
obj5.location.region = "Akkad"
console.log(obj1);
console.log(obj5);



//// compute the sum of an array of numbers

let myArray = [1,2,3,4,5,6]

const sum = function(array) {
  if (array.length === 1) { ///exit condition
    return array[0];
  }
  else {
    return array.pop() + sum(array);
  }
};

console.log(sum(myArray));



///recursion to get the first n numbers of fibonacci sequence

function fibonacciSequence(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      let s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }
  
  console.log(fibonacci_series(8));
  