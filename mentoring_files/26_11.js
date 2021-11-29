function printAllGroups () {
   let result = []
   for (let x of "123456") for ( let y of "abcde")
   result.push(x+y);
   return result.join(', ')
}

console.log(printAllGroups())


/* According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers. */


/// 13 -> (1² = 1) + (3² = 9) = 10 = 1 --> Happy Number
/// "13".split() = ["1", "3"]
/// ["1", "3",].forEach (item => {}
///   totaliser += item * item


function numOfDigits(num) {
	var s = num.toString();
	if(s.includes("-")){
	return s.length-1;
	}else{
		return s.length;
	}
}

console.log(numOfDigits(345672304987));


/* 
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
Notes
Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.
Think of the input (step) as the total number of houses that have been connected together.*/

function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}

console.log(matchHouses(40));