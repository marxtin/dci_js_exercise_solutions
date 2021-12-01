/* filter method will create an array 
with all elements from the calling array 
that pass a condition inside the callback function

so: we always need a condition with filter, that js will evaluate to return Boolean*/

/* func callbackfunc (element) {something}
const filteredArray = arrayName.filter(callback function)
const filteredArray = arrayName.filter((element) => {some conditional logic  return either true or false}) */

const numberArray = new Array(1, 5, 8, 19, 30, 4, 7);

function testCondition(element) {
  return element > 10;
}

const filteredArray = numberArray.filter(testCondition);

console.log(filteredArray);

/* return element > 10: 
if javasript sees a condition, javascript will evualuate it to a boolean value and return the boolean value */

const numArray = new Array(19, 9, 6, 11, 12, 5, 20, 23);

const filteredArray2 = numArray.filter((element) => {
  return element > 10;
});

console.log(filteredArray2);

///Array of objects


const arrayOfProducts = [{
    name: "Peptide Serum",
    category: "Peptides",
  },
  {
    name: "Hyaluronic Serum",
    category: "Moisturizers",
  },
  {
    name: "SPF 50",
    category: "sunscreen",
  },
  {
    name: "SPF 25",
    category: "sunscreen",
  },
];



const filteredArray3 = arrayOfProducts.filter((element) => {
  return element.category === "sunscreen"
})

const filteredArray3_2 = arrayOfProducts.filter((element) => element.category === "sunscreen")

console.log(filteredArray3);
console.log(filteredArray3_2);

///function with filter that accepts 2 args, typical example 

function filterByCategory(array, category) {
  return array.filter((element) => element.category === category)
}

function filterByCategory_2(array, category) {
  const filtered = array.filter((element) => element.category === category ? true : false);
  return filtered;
  }
  

console.log(filterByCategory(arrayOfProducts, "sunscreen"));

console.log(filterByCategory_2(arrayOfProducts, "Moisturizers"));


//Create function that filters array of strings according to a letter passed in the ARGUMENTS

const usersArray = new Array("Sarpedon", "Penthesilea", "Patroklos")


function filterByFirstLetter(array, letter) {
  const temporalArray = array.filter((word)=>{
    if(word.includes(letter)){
      return true
    }else {
      return false
    }
  })
  return temporalArray
}

console.log(filterByFirstLetter(usersArray,"s"));

/* return array.filter((element) => element.toLowerCase().charAt(0) === letter); */




///EXERCISE 01.12.21 --- get strings that end with substring, return array

const humans = new Array("rika", "jenna", "bleda", "oliver", "itamar");

function select(array, substring) {
  const temporalArray = array.filter((word) => {
    if (word.slice(-1) === substring || word.slice(-2) === substring) {
      return true;
    } else {
      return false;
    }
  });
  return temporalArray;
}

console.log(select(humans, "ka"));
console.log(select(humans, "a"));

///version by Seb

function filterItems(array, string) {
  const temporalArray = array.filter((word) => {
    const lastPartOfWord = word.slice(word.length - string.length);
    if (lastPartOfWord === string) {
      return true;
    } else {
      return false;
    }
  });
  return temporalArray;
}

console.log(filterItems(humans,"ka"));