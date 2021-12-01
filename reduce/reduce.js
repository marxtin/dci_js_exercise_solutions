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





  
