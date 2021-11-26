# Programming Basics: Objects Practice 2

### 1. Does it contain it?
Create a function that accepts an object. The function will check if the object contains a property called `fruit`. If the object contains the property then the function will return a message like `The object has fruits!`. If the object does not contain a property called `fruit`, the function will return a message like `sorry, no fruits here`.

```js
  let sampleObject1 = {name: "Cameron", age:120, email:"cameron@mail.com"}
  let sampleObject2 = {name: "Louis", fruit:"pear", age:5, email:"louis@mail.com"}
  console.log(haveFruit(sampleObject1)) // -> sorry, no fruits here
  console.log(haveFruit(sampleObject2)) // -> The object has fruits!
```

### 2. Create it!
Create a function that will return an object with the information of a product of an online shop. The object will have the following properties: name, id, category, keywords, price, stock. The values for the properties of the object will come from the parameters of the function. ***Note:*** This means the function will accept 6 arguments. ***Note2***: Look at the example so you know what are type of the arguments

```js

console.log(createProduct("sony headphones",123,"electronics",["music","accessory","sound"], "59€", 15))
/* This prints in terminal:
  {
    name: "sony headphones",
    id: 123,
    category: "electronics",
    keywords: ["music","accessory","sound"],
    price: "59€",
    stock: 15
  }
*/
```


### 2 substask  
- Inside the `createProduct()` function, make sure that the name and category property values start with capital letter.
- Inside the `createProduct()` function, use an if statement to check the stock. If the stock is less than 10 then show in the terminal a message saying `We need more of this!` **Bonus:** change the message so instead of `this` says the name of the product
- Inside the `createProduct()` function, ue an if statement to check if the if the price contains the `€` sign. If not add it to the price.

