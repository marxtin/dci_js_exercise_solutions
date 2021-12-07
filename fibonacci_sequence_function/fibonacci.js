////****FIBONACCI SEQUENCE   */

/////// In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence,
/////// called the Fibonacci sequence, such that each number is
/////// the sum of the two preceding ones, starting from 0 and 1.

///For Loop (recursion below)

function fibonacci(iterations = 7) {
  let arr = [];
  let fib = [0, 1];
  for (let index = 2; index < iterations; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
    arr.push(fib[index]);
  }
  return arr;
}

console.log(fibonacci(10));

/** 
 * STEP 1 
 declare empty array with 
 let arr = [];  


 * STEP 2 
let fib = [0, 1];
starting from 0 and 1, so that in the for loop initialization, we have: 

let index = 2;
why do we start at [2] (let index = 2) in our function? This follows our definition of the fibonacci sequence, where it starts with 0, 1 at fib[0] and fib[1] respectively


* STEP 3 

fib[index] = fib[index - 1] + fib[index - 2]; 


>>>>>each number is the sum of the two preceding ones 

this means: 

first iteration:  F[2] = F[2-1] + F[2-2] = F[1] + F[0] = 1 + 0 = 1

second iteration: F[3] = F[3-1] + F[3-2] = F[2] + F[1] = 1 + 1 = 2

third iteration:  F[4] = F[4-1] + F[4-2] = F[3] + F[2] = 2 + 1 = 3

third iteration:  F[4] = F[4-1] + F[4-2] = F[3] + F[2] = 2 + 1 = 3

... and so forth



* STEP 4 

push the outcome of each iteration into the previously empty array: 

arr.push(fib[index]);


* STEP 5 
tell your function to return the array 
  return arr

TO SUMMARIZE: 

Now you have a pure, no side-effect function where you just tell your function the number of desired iterations and you get the result in an array

*/

///RECURSION

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
