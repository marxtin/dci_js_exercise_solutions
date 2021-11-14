//// NESTING FOR LOOPS -> Function: multiply multi-dimensional array 

/* if we have an array with sub-arrays - i.e. a multi-dimensional array -
and want to do calculate it's product, we need a function that accepts an
array as argument and processes two nested loops.

Why do we need two loops here?

One to loop through each of the arrays sub-arrays, 
and another to loop through the elements in each sub-array.

STEP BY STEP GUIDE BELOW

*/


function multiplyArray (arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(`Sub-array ${i}: ${arr[i]}`);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`Element ${j}: ${arr[i][j]}`);
            product *= arr[i][j];
        }
    }

    return product;
}

console.log(multiplyArray([
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7],
]));




/* STEP 1: 
 let product = 1;
 --> The outcome of any multiplication is called a product. So let's name our 
     variable product, too! 
     The default value of our variable is a number: 1. 

     The reason we declare this variable is:
     product *= arr[i][j];

     *= is the multiplication assignment operator
     So: with each iteration, we multiply all the numbers of the sub-arrays, with
         product.

     This is also why our new variable product HAS to be 1. 
     It cannot be 0, because the outcome of any multiplication with 0 is 0.
     If it were 2, the result would be not what we wanted,
     because everything would be multiplied with 2. 



  STEP 2:  
  loop through the sub-arrays with: 
  for (let i = 0; i < arr.length; i++)

  >>>>>>>> when you log it with: 
           console.log(`Sub-array ${i}: ${arr[i]}`),
  >>>>>>>> you will in the console each iteration of i

  STEP 3: 
  loop through each number in the sub-arrays:
  for (let j = 0; j < arr[i].length; j++)

  >>>>>>>> when you log it with: 
          console.log(`Element ${j}: ${arr[i][j]}`);
  >>>>>>>> you will in the console each iteration of j

  SO: "The first iteration of i grabs the first sub-array, [1, 2].
       Then the first iteration of j goes through each element 
       in that sub-array:"

 */


/* Improving the code */
/* for better readability we can declare a new variable:
   const subArray = arr[i];
   instead of arr[i][j], which might be difficult to grasp */

       function multiArray (arr) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            const subArray = arr[i];
            for (let j = 0; j < subArray.length; j++) {
                product *= subArray[j];
            }
        }
        return product;
    }
    
    console.log(multiArray([
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
    ]));
