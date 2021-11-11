////1////////////////////////////////


const substractor = (a,b) => a-b;

console.log(substractor(333,222));

////2////////////////////////////////


const myFunction = (message) => message.charAt(0).toUpperCase() + message.slice(1);

console.log(myFunction("this is my message"))

////3////////////////////////////////

function funnyWord(string) {
    if (string[0] === "a" || string[0] === "b") {
      return `${string} is a funny word`
    }else {
       return `${string} is not a funny word`
    }
}
console.log(funnyWord("apple")); 
console.log(funnyWord("zebra"));


////4////////////////////////////////




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