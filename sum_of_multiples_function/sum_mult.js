///Write a function that adds all the multiples of 3 and 5
///in a set of natural numbers from 0 to whatever you like, for example 1000

function findSumOfMultiples(n) {
  let sum = 0;
  for (let x = 0; x < n; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  return sum;
}
console.log(findSumOfMultiples(100));

/* 

Here, n is the number of iterations. We want to look at only the natural
numbers (=integers). 

So we want to specify how many numbers we want to look at. 
So n = iterations


(x % 3 === 0 || x % 5 === 0) in the if-condition checks every number with mod 3 OR mod 5 strictly equal to zero

so, this will only work with data type number

with the addition assignment operator */

////WITH THREE ARGUMENTS - if you want a purer function

function findSum(n, a, b) {
  let sum = 0;
  for (let x = 0; x < n; x++) {
    if (x % a === 0 || x % b === 0) {
      sum += x;
    }
  }
  return sum;
}
console.log(findSum(100, 3, 5));

////CHECK FOR PALINDROME WITH BUILT-IN FUNCTIONS
