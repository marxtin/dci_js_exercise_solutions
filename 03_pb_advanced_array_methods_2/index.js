//1 
let arr = [5, 2, 1, -10, 8];

arr.sort(function (a, b) {
  return b - a
})


console.log(arr);


//2

const arr2 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

const filtered = filterRange(arr2, 1, 4);

console.log(filtered); // 3,1 (matching values)
console.log(arr2); //still exists

//3 

const arr3 = [3, 4, 5, 6];

function givePower(arr) {
  return arr.map(function (x) {
    return Math.pow(x, 2);
  });
}



const squaredArray = givePower(arr3);

console.log(squaredArray); // [9,16,25,36] (matching values)


///4

/* Create a function totalVotes(array) that calculates how many people voted according to the information of each object. If the object has voted equal true it means the person voted. If the object has voted equal false then it means the person did not vote. */

const voters = [{
    name: 'Bob',
    age: 30,
    voted: true
  },
  {
    name: 'Jake',
    age: 32,
    voted: true
  },
  {
    name: 'Kate',
    age: 25,
    voted: false
  },
  {
    name: 'Sam',
    age: 20,
    voted: false
  },
  {
    name: 'Phil',
    age: 21,
    voted: true
  },
  {
    name: 'Ed',
    age: 55,
    voted: true
  },
  {
    name: 'Tami',
    age: 54,
    voted: true
  },
  {
    name: 'Mary',
    age: 31,
    voted: false
  },
  {
    name: 'Becky',
    age: 43,
    voted: false
  },
  {
    name: 'Joey',
    age: 41,
    voted: true
  },
  {
    name: 'Jeff',
    age: 30,
    voted: true
  },
  {
    name: 'Zack',
    age: 19,
    voted: false
  }
];

function totalVotes(arr) {
  const count = arr.reduce(function (n, person) {
    return n + (person.voted == true);
  }, 0);
  return count
}


console.log(totalVotes(voters)); // 7


function totalVotes2(arr) {
  const count = arr.reduce(function (n, person) {
    return n + person.voted;  //n is already a num, JS converts Boolean true to 1, false is 0
  }, 0);
  return count
}

console.log(totalVotes2(voters));