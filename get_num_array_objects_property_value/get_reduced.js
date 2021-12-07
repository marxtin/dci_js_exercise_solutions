const voters = [
  {
    name: "Bob",
    age: 30,
    voted: true,
  },
  {
    name: "Jake",
    age: 32,
    voted: true,
  },
  {
    name: "Kate",
    age: 25,
    voted: false,
  },
  {
    name: "Sam",
    age: 20,
    voted: false,
  },
  {
    name: "Phil",
    age: 21,
    voted: true,
  },
  {
    name: "Ed",
    age: 55,
    voted: true,
  },
  {
    name: "Tami",
    age: 54,
    voted: true,
  },
  {
    name: "Mary",
    age: 31,
    voted: false,
  },
  {
    name: "Becky",
    age: 43,
    voted: false,
  },
  {
    name: "Joey",
    age: 41,
    voted: true,
  },
  {
    name: "Jeff",
    age: 30,
    voted: true,
  },
  {
    name: "Zack",
    age: 19,
    voted: false,
  },
];

function totalVotes(arr) {
  const count = arr.reduce(function (n, person) {
    return n + (person.voted == true);
  }, 0);
  return count;
}

console.log(totalVotes(voters)); // 7

////with TERNARY

function totalVotes2(array) {
  return array.reduce(
    (accumulator, element) => (element.voted ? accumulator + 1 : accumulator),
    0
  );
}

///specific solutions for Boolean property values

function totalVotes3(arr) {
    const count = arr.reduce(function (n, person) {
      return n + person.voted;  //n is already a num, JS converts Boolean true to 1, false is 0
    }, 0);
    return count
  }
  
  console.log(totalVotes3(voters));