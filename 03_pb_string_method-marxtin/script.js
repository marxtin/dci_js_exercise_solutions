//1. 

var myPark = "I can walk in the park all day"
console.log("1.",myPark.substring(17,22))

//2.

var greeting = "Hello, world!"
console.log("2.",greeting.toUpperCase())

//3.

var greeting2 = "Hello Earthling"
console.log("3.",greeting2.toLowerCase())

//4. 

var myVariable = "JavaScript"
console.log("4.", myVariable.substr(3,3))

//5. 

let textShoes = "nice shoes"
console.log("5.1",textShoes.includes("l"))
console.log("5.2",textShoes.includes("n"))

//6.
let fruit = "Banana"
let strFruit = fruit[0] + fruit +fruit[0]
console.log("6.", fruit[0] + fruit +fruit[0])
console.log(strFruit)

//7. 
let $str = "Scritch"
console.log("7.",$str.slice(4)+$str+$str.slice(-3))

//8. 
let $str2 = "BoogieWoogie"
let $str2_1 = $str2[11]+$str2.slice(1,-1) + $str2[0]
console.log("8.", $str2_1)

//9. 

let firstName = "Martin"
let city = "Berlin"
let job = "Web Developer"
console.log("9.",`My name is ${firstName}. I live in ${city} and I am a ${job}.`)


//10.
let story = "the quick brown fox"
console.log("10.",story[0].toUpperCase()+story.substring(1))