/* Map method 

creates new array with the returned values of calling a function 

per each element of the calling array

The first difference between map() and forEach() is the returning value.
 The forEach() method returns undefined and map() returns a new array with the transformed elements. 
 Even if they do the same job, the returning value remains different.*/

const numbersArray = new Array(0, 1, 1, 2, 3, 5, 8, 13, 21, 34);

function squareCallback(element) {
  return element ** 2;
}

const mappedArray = numbersArray.map(squareCallback);

console.log(mappedArray);

/* [
    0,    1,  1,   4,
    9,   25, 64, 169,
  441, 1156
] */

console.log(numbersArray);

//Syntax
//most common structure found online
const numbersArray2 = new Array(0, 1, 1, 4, 9, 25, 64, 169, 441, 1156);

const returnedArray2 = numbersArray2.map((element) => {
  return element ** 2;
});

console.log(returnedArray2);

/// ArrayxOfObjects.map

const iliadArray = new Array({
  name: "Menelaos",
  city: "Sparta"
}, {
  name: "Paris",
  city: "Ilios"
}, {
  name: "Agamemnon",
  city: "Mykenai"
});

const messagesArray = iliadArray.map((item, index) => {
  let message = `This is ${item.name} and this person is from ${item.city} and the index of this entry is ${index}`;
  return message;
});

console.log(messagesArray);

////CREATE OBJECT FROM ARRAY

const usersArray = new Array("Sarpedon", "Penthesilea", "Patroklos");

const usersObjectArray = usersArray.map((user) => {
  const temporalObject = {
    name: user,
  };
  return temporalObject;
});

console.log(usersObjectArray);

////Create function to make first letter of string in array of strings uppercase

const lowerCaseArray = new Array("cat", "rabbit", "mouse");

function arrayToUpperCase(array) {
  const temporalArray = array.map(function (string) {
    return string[0].toUpperCase() + string.slice(1);
  });
  return temporalArray;
}

console.log(arrayToUpperCase(lowerCaseArray));







