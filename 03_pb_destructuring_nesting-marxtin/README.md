# Programming Basics: Destructuring assignment and Nesting

## Destructuring

**Instructions**
#### 1. Array Destructuring
* Declare an array with the following elements: "banana", "cucumber", "bread", "cakes", "pizza". Declare the variables `fruit`, `vegetable`, `food`. Assign the first element of the array to `fruit`, the second element to `vegetable` and the resto to `food`. Use destructuring assignment.

#### 2.Object Destructuring
* Create an object which contains 5 properties with keys as names and values as their respective halloween costume e.g. `sebastian: "vampire"`.   Assign each key pair value to a corresponding variable with the name of the key. Display each person's costume in the terminal. 

```js
//Object example:
const costumes = {
   sebastian:"vampire",
   ion: "werewolf"
}

// Example 
console.log(sebastian) // This shows in the terminal: vampire
```

#### 3. Parameters: Object Destructuring 
* Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
* Then, create a function that accepts this object as parameter and return a message with all of the band/musician's data. 
* Example of output
```javascript
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
```

## Nesting

#### 1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print the values.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
```

#### 2. Doggo
* 2.1 Create a doggo object. Add name and breed as properties of the object.
* 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods and display it in the terminal. 
* 2.4 Add a method that loops through the array and display all the doggo's favorite food.

#### 3. Recipes
* 3.1 Create an object called recipes.
* 3.2 Inside this object, you should create another object as a property. This property will be called ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
* 3.3 After creating the object. Access the ingridients property and add another ingredient `ginger`. 
* 3.4 After creating the object. Access the ingridients property and change the ingredient `sugar` to `brown sugar`. 
* 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients property. 
