# Programming Basics: Functions practice

#### 1. console.log X 3
Write a function that takes in one parameter and logs that parameter 3 times into the console. ***mini bonus***: Do it with a for loop to repeat the console.log 3 times
```js
  display3("hello world") // By calling this function it will show in the terminal "hello world" 3 times one below the other.
```

#### 2. twofer
Create a function so that it returns "Two for me and one for you" when no arguments are passed. When one argument is passed it will return `Two for me and one for ${parameter}`.
```js
  console.log(twofer("Fran")) // ---> "Two for me and one for Fran"
  console.log(twofer()) // ---> "Two for me and one for you"
```

#### 3. largest number
Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. 
```js
  console.log(largestNum([1,6,83,91,0,-4,1337,5])) // It returns: "The largest number is 1337"
```


## Bonus

#### 4. Logical thinking
For this exercise is only needed for you to try and think what is the logic behind the function no need to code it.
Reverse engineering challenge. Describe the logic of the function that does this: 
- bar("") --> "Cat"
- bar("x") --> "Cat"
- bar("Cat") --> "Catt"
- bar("Foobar") --> "Catobar"
- bar("Potato") --> "Cattato"
- bar("Tomato") --> "Catmato"
- bar("International Space Station") --> "Catternational Space Station"
#### Extra bonus
***(BONUS1: write a code that does this. BONUS2: write it as a short (one line) arrow function)***

