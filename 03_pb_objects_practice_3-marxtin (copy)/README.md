# Programming Basics: Objects methods

Please print each of your answers to the console.

**Get Values.** 
Create a function that returns an array of all **values** of an object's properties. 
* Examples:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Expected output: 
```javascript
["tea", "coffee", "milk"] 
```

**Add A Method.**
Create an object and add a method to that object which prints the values of the objects in a string. 
* Example
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris"
}

```
* Example of expected output for method of person
"Michael Smith is a 20 year old driver in Paris".

## Bonus Question

** Convert keys and values into an array.** 
Create a function that converts an object into an array of keys and values. 
* Examples:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
```
* Expected output: 
```javascript
[["A", 1], ["B", 2], ["C", 3]]
```

```javascript
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
```
* Expected output: 
```javascript
[["cats", 1], ["dogs", 2], ["turtles", 4]] 
```
