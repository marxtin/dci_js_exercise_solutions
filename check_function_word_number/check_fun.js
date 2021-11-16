/* Create a function that accepts 2 parameters. 
if the first parameters does **NOT** contains between 5 and 10 characters, 
the function should return a message like `Wrong information in first 
parameter`. 
If the first parameter contains between 5 and 10 characters, then 
continue. 
now check if the second paremter is a number. 
If it is **NOT** a number then return a message like 
`Wrong information in second parameter`.
 If the the second paremter is a number then return a message 
 saying `The information is correct`. Example:

  console.log(checkData("ciao","hi")) // This will print in the terminal: "Wrong information in first parameter"

  console.log(checkData("greetings","hi")) // This will print in the terminal: "Wrong information in second parameter"
  
  console.log(checkData("greetings",123)) // This will print in the terminal: "The information is correct"
  */


function checkFun (word,number) {
  if (!(word.length >= 5 && word.length <=10)){
    return "incorrect info in 1st param"
  }
  if (isNaN(number)){
return "incorrect info in 2nd param"
  }
  return "correct info"

}

console.log(checkFun("ciao", "hi"));
console.log(checkFun("greetings", "hi"));
console.log(checkFun("greetings", 123));