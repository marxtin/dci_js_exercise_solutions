/* 


Write a program that takes two numbers and prints the numbers. 
But for multiples of three print “Fizz” instead of the number and 
for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.

Accept 2 numbers — start and end
For numbers start to end we need to do something
If the number is a multiple of 3 log “Fizz” instead of the number
If the number is a multiple of 5 log “Buzz” instead of the number
If the number is a multiple of 3 AND 5 log “FizzBuzz” instead of the number
If = else ///not logging “Fizz”, “Buzz”, or “FizzBuzz” log the number

*/

function fizzBuzz(start, end) {
  for (let num = start; num <= end; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      return "Fizzbuzz"
    } else if (num % 3 === 0) {
      return "Fizz"
    } else if (num % 5 === 0) {
      return "Buzz"
    } else {
      return num
    }
  }
}

console.log(fizzBuzz(1,25))
