
/* Check whether a single number is even or odd */


const evenOrOdd = (n) => n % 2 == 0 ? "even" : "odd";

console.log(evenOrOdd(20));

/* check whether a defined set of numbers between 0 and n is even or odd */

function evenOdd(n) {
for (let i=0; i <= n; i++) {
  if (i%2 == 0){
    console.log(i, "is even")
  }
  else {
console.log(i, "is odd")
  }
}
}

evenOdd(20)




