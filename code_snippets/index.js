/* 22nd November
- Recap objects
- Methods definitions, which methods have we used so far?
- Methods of the Object object
  - Object.keys()
  - Object.values()
- Creating own methods
- Iterating through objects and other lists

*/


// When defining an object, I should use const
const userA = {
  //keys:value
    name:"Freeman",
  age: 35,
  skills: ["coding","design","hiking"]
}

userA.age = 36;

// console.log(userA)

// Accessing properties
// dot notationgit config --global core.editor "code --wait"
// console.log(userA.name)

// (square)bracket notation
// console.log(userA["name"])

let propertyName = "age";
// console.log(userA[propertyName]) // userA["age"]


//Deleting a property:
delete userA.skills;

// console.log(userA)


//Adding properties:
userA.city = "Berlin";

// console.log(userA)

// This is not possible. It will give an error
// userA = 5;
// userA = "Hello";
// userA = {
//   name: "Deniz",
//   age:30,
//   city:"Leipzig"
// }

// Assigning variables in an object

let name = "Deniz";
let age = 30;
let city = "Leipzig";

const userB = {
  name, //name: "Deniz"
  age,  //age: 30
  city  //city: "Leipzig"
}

// console.log(userB)


//Example of using variables inside objects
function createUser(fname,lname,age,city) {
  return {
    fname,
    lname,
    age,
    city
  }
}

let user1 = createUser("John","Smith",99,"Segovia");
console.log(user1)

/* Step of execution of line 81 and 82
1. JavaScript reads the statement
2. Because there is a function, it is needed to execute the function
3. It takes the arguments and assign those values to the parameters.
  3.1 for example: the first parameter, fname, will be equal to the first argument, "John"
  3.2 for example: the second parameter, lname, will be equal to the second argument, "Smith"
  3.3 for example: the third parameter, age, will be equal to the third argument, 99
  3.4 for example: the fourth parameter, city, will be equal to the fourth argument, "Segovia"
4. The logic in the function is executed. (in this specific case for the createUser function there is no logic)
5. The returned value is evaluated. In the case of this function, the object is created. And all the parameter values are assigned to the object.
6. After the returned value is evaluated, JavaScript takes the returned value to the statement where the function was called. The part of the statement that corresponds to the call of the function is replaced by the returned value:
  Example:
    let user1 = {fname:"John",lname:"Smith",age:99,city:"Segovia"};

7. After replacing for the returned value, the statement is executed. The object is assigned to the variable user1
8. In line 82, we use console.log(user1) to display the user in the terminal

*/

// Review task 2 morning exercise
function createProduct(name,id,category,keywords,price,stock) {

  // subtask 1. name and category with capital letter
  name = name[0].toUpperCase() + name.slice(1);
  category = category[0].toUpperCase() + category.slice(1);

  // subtask 2. stock is less than 10
  if(stock<10){
    console.log(`We need more of ${name}`)
  }

  // subtask 3. check €
  if(!price.includes("€")) {
    price = price + "€"
  }

  let finalObject = {name,id,category,keywords,price,stock};
  return finalObject;
}

console.log(createProduct("sony headphones",123,"electronics",["music","accessory","sound"], "70", 5))


//-----------------------------------
// Methods
// Which methods have we seen so far? Array Methods: pop, push, unshift and shift
// What is a method? Is a function that are used directly from an object. Normally the would use the object information to execute some logic.

console.log(Math.max(1,2,8,4,6))

// Object object
Object;
// Methods for Object: Object.keys(objectVariable) -> This will return the keys of the object in the parenthesis. The keys will be returned as an array of strings.
const apple = {
  color: "red",
  size: "medium",
  flavor: "sweet",
  origin: "cold climates",
  seeds: 7
}

console.log(Object.keys(apple))

// console.log(apple.keys()) This will not work.

// Object.values(objectVariable) -> This will return the values of the object properties. The values will be returned as an array.
console.log(Object.values(apple))
console.log("This is the second value", Object.values(apple)[1])


//---------------------------
// Creating our own method

const userC = {
  fname: "James",
  lname: "Bond",
  code: 007,
  catchphrase: function () {
    console.log(`My name is ${this.lname}, ${this.fname} ${this.lname} Agent ${this.code}`)
  },
  isThisAnUser: function () {
    console.log("Yes, this is an user")
  }
}

userC.catchphrase()
userC.isThisAnUser()

