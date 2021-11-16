function fizzBuzz(start, end){
    for(let num=start; num <= end; num++){
        if(num % 5 === 0 && num % 3 === 0){
          console.log("FizzBuzz")
        }   
        else if(num % 3 === 0){
          console.log("Fizz")
        }
        else if(num % 5 === 0){
          console.log("Buzz")
        }
        else {
          console.log(num)
        }
    }
}


fizzBuzz(1,10)