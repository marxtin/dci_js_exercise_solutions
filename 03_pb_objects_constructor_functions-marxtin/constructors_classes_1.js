/* ### 1.
Create a constructor function that serves as a template for creating objects representing rectangles:

```js
/*Object format:
{
  base: value,
  height: value
} 
*/
/* 
{
  base: 50px,
  height: 100px
}
*/

function Rectangle(base, height) {
    this.base = base;
    this.height = height;
}

const rectangle1 = new Rectangle("50px", "100px");
console.log(rectangle1);

rectangle1.color = "white";
console.log(rectangle1);

console.log(typeof Rectangle, typeof rectangle1);

Rectangle.prototype.changeColor = function (value) {
    return (this.color = value);
};

rectangle1.changeColor("black");
console.log(rectangle1);

/*
### 2.
Create a constructor function that serves as a template for creating objects representing small posts in a page. The object will contain 2 methods to display information (look at the example to know what to display)
*/
/*Object format:
{
  postTitle: value,
  postAuthor: value
  postLink: value,
  showLink: method,
  postInfo: method
} 
*/

function Post(postTitle, postAuthor, postLink) {
    this.postTitle = postTitle;
    this.postAuthor = postAuthor;
    this.postLink = postLink;
    this.showLink = function () {
        console.log(postLink);
    };
    this.postInfo = function () {
        console.log(`this is ${this.postTitle} by ${this.postAuthor}`);
    };
}

const post1 = new Post(
    "winter is coming",
    "Ned Stark",
    "https://gameofthrones.fandom.com/wiki/Winter_Is_Coming_(motto)"
);
post1.showLink(); /* shows in terminal: https://gameofthrones.fandom.com/wiki/Winter_Is_Coming_(motto) */
post1.postInfo(); /* shows in terminal: "This is winter is coming by ned Stark" */

/* ### 3.
Create a class that serves as a template for creating objects representing pets.
```js */
/*Object format:
{
  name: value,
  age: value
} 
*/
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const dog = new Pet("Snoopy", "5");
console.log(dog);

/* ### 4. 
Create a class that serves as a template for creating objects representing orders in an online shop.The object will contain a method to display information (look at the example to know what to display)
 */
/*Object format:
{
  orderValue: value,
  orderOwner: value,
  orderDescription: value,
  orderInfo: methodlet
} 
*/

class Order {
    constructor(orderValue, orderOwner, orderDescription) {
        this.orderValue = orderValue;
        this.orderOwner = orderOwner;
        this.orderDescription = orderDescription;
    }
    orderInfo() {
        console.log(
            `The order is ${this.orderDescription} and the owner of the order is  ${this.orderOwner}. The owner bought it for ${this.orderValue}`
        );
    }
}
const order1 = new Order(
    "60 gold coins",
    "John Snow",
    "a coat to cover from winter"
);
order1.orderInfo(); /* shows in terminal: "The order is a coat to cover from winter and the owner of the order is John Snow. The owner bought it for 60 gold coins" */

///Calculator

function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
    this.read = function () {
        console.log(`Calculator says:\n ${this.a} added to ${this.b} is ${this.sum()}\n ${this.a} multiplied by ${this.b} is ${this.mul()}\n the square root of ${this.a} is ${this.square_a()},\n the square root of ${this.b} is ${this.square_b()}\n ${this.a} to the power of ${this.b} is ${this.square()}`)
    }
}

const calculator = new Calculator()
calculator.square_a = function () {
    return this.a ** 2
}
calculator.square_b = function () {
    return this.b ** 2
}
calculator.square = function () {
    return this.a**this.b
}

calculator.a = 5
calculator.b = 3
console.log(calculator);
calculator.read()