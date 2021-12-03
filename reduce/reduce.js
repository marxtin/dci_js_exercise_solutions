///REDUCE METHOD

/*
reduce array to anything 

this method will execute the callback function on each element in the calling array and it
will return an accumulator variable that will be returned at the end of the function

function callbackReduceFunction (accumulator, element) {
    //some logic
    return the new value of the accumulator
}

const reducedOutput = callingArray.reduce(callbackReduceFunction)

*/

const numArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

/*structure1*/

function callbackReduceFunction(accumulator, element) {
  return accumulator + element;
}

function sumReduce1(array) {
  return array.reduce(callbackReduceFunction);
}

console.log(sumReduce1(numArray));

//Structure 2A
function sumReduce2A(array) {
  return array.reduce(function (accumulator, element) {
    return accumulator + element;
  });
}

console.log(sumReduce2A(numArray));

//structure 2B

function sumReduceSt2B(array) {
  return array.reduce((accumulator, element) => {
    return accumulator + element;
  });
}

console.log(sumReduceSt2B(numArray));

function sumReduceShort(array) {
  return array.reduce((accumulator, element) => accumulator + element);
}

console.log(sumReduceShort(numArray));

//let reducedOutput = callingArray.reduce(callbackFunction,initialValue)

function sumReduceWithInitialValue(array, x) {
  return array.reduce(callbackReduceFunction, x);
}

console.log(sumReduceWithInitialValue(numArray, 5));

function sumReduceWithInitialValueSt2A(array) {
  return array.reduce(function (accumulator, element) {
    return accumulator + element;
  }, 10);
}

//create a func that accepts an array of objects. the object represents information of product in a basket.
//

const basket = new Array();
basket[0] = { productName: "Cube", price: 10 };
basket[1] = { productName: "Pyramid", price: 10 };
basket[2] = { productName: "Dodekahedron", price: 10 };
basket[3] = { productName: "Rhomboedron", price: 10 };

function calculateAmount(basketArray) {
  const amountToPay = basketArray.reduce(function (accumulator, element) {
    return accumulator + element.price;
  }, 0);
  return amountToPay;
}

console.log(calculateAmount(basket));

function sumReduceWithInitialValue(array, x) {
  return array.reduce(callbackReduceFunction, x);
}

////EXERCISE 1 - 01.12.2021
/* 
Create a function that accepts an array of objects. The function will return a final amount of orders made.
Example: 
const orders = [
  {orderID:1,amount:50},
  {orderID:2,amount:150},
  {orderID:3,amount:10},
  {orderID:4,amount:200},
]

console.log(calcAmount(orders)) // This will return 410
*/

const orders = [
  { orderID: 1, amount: 50 },
  { orderID: 2, amount: 150 },
  { orderID: 3, amount: 10 },
  { orderID: 4, amount: 200 },
];

function calcAmount(array) {
  const totalAmount = array.reduce(function (accumulator, element) {
    return accumulator + element.amount;
  }, 0);
}

////////////Merge two arrays to 1 object

const names = new Array("Mario", "Luigi", "Wario", "Peach", "Toad");
const ids = new Array(1234, 5678, 6, 87, 9);

function createObject(array1, array2) {
  
  let result = array2.reduce((accumulator, element, index)=>{
    accumulator[array1[index]] = element
    return accumulator;
  }, {});
  return result;
}

console.log(createObject(names, ids));



function convertArrays (keyArray,valueArray) {
  return keyArray.reduce((accum,element,index)=>{
    accum[element] = valueArray[index]
    return accum
  },{})
}

console.log(convertArrays(names,ids))

