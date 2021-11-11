# Programming basics: Functions - Basics

#### 1. Substraction
* Create a function that accepts 2 numbers as parameters and returns the substraction of the first parameter minus the second parameter. Example:
```js
   console.log(substract(12,2)) // This will print in the terminal 10
   console.log(substract(9,4)) // This will print in the terminal 5
```

#### 2. Capitalize
* Create a function that will accept a string parameter. The function will return the same string but with the first letter being an uppercase. Example:
```js
  console.log(capWord("banana")) // This will print in the terminal: "Banana"
  console.log(capWord("car")) // This will print in the terminal: "Car"
```

#### 3. Funny Strings
* Create a function that accepts one string parameter. If the string starts with letter `a` or `b` Then return a message saying the given string is a funny word. If the string starts with any other letter then the function should return a message saying the given string is not a funny word. Example:
```js
  console.log(funnyWord("banana")) // This will print in the terminal: "banana is a funny word"
  console.log(funnyWord("car")) // This will print in the terminal: "car is not a funny word"
```


## Bonus
You dont need to submit this one. Only for practice purposes.
#### 4. Check function
* Create a function that accepts 2 parameters. if the first parameters does **NOT** contains between 5 and 10 characters, the function should return a message like `Wrong information in first parameter`. If the first parameter contains between 5 and 10 characters, then continue. now check if the second paremter is a number. If it is **NOT** a number then return a message like `Wrong information in second parameter`. If the the second paremter is a number then return a message saying `The information is correct`. Example:
```js
  console.log(checkData("ciao","hi")) // This will print in the terminal: "Wrong information in first parameter"
  console.log(checkData("greetings","hi")) // This will print in the terminal: "Wrong information in second parameter"
  console.log(checkData("greetings",123)) // This will print in the terminal: "The information is correct"
  
```
