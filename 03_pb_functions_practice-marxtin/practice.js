////1 


const display3 = (x) => x + x + x;

console.log(display3(" Hello,World "));


///only side effects function

function display0() {
    console.log("Hello World");
}

display0()

function display0_1() {
    for (let i = 0; i < 4; i++) {
        console.log("Hello World")
    }
}

display0_1()


///1 with for loop


function loop(x) {
    let result = '';
    for (let i = 0; i < 4; i++) {
        result = x + x + x 
    }
    return result }

console.log(loop(" Hello World "));

//2//

function twofer(name="you") {
    return `Two for me and one for ${name}`
}

console.log(twofer());
console.log(twofer("Martin"));


////3/////////////
/* letting one of the arguments 
replace the other argument 
as long as it’s of a smaller value 
and iterate through all the values in the array */

function findLargestNum(arr) {
  let largestNum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(findLargestNum([1,6,83,91,0,-4,1337,5]))


/// One Liner using Math... spread operator


const findMaxNum = arr => Math.max(...arr);

console.log(findMaxNum([1,6,83,91,0,-4,1337,5]));


////4////////////////////////////////////////////////////////////////

/* The function inserts "Cat" into a string and replaces the first two characters 0f a string with "Cat" */

const bonus_1 = function(str, a="Cat") {
    return a+str.slice(2)
}

const bonus_2 = (str, a="Cat") => a+str.slice(2)


console.log(bonus_2("Tomato"));