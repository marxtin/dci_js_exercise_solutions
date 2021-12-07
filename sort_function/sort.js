///Two functions to sort stuff, e.g sort the letters 
/// of a word or the digits of a number


/* 1:
nested loop */


function order(str) {
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]]
                
        }
    }
    return arr.join('')
} 

console.log(order("998832450000343465"));


/* Explanation:

first we have to split the string
let arr = str.split('')
to get an array

to get the full effect, we need nested for-loops. 
--> we need to "make two arrays", with index=i and index=j,
to compare them in our if-statement, 
no sorting without comparison of items here

condition: if (arr[i] < arr[j]) 
--> the ""computer" or interpreter "knows" that a<b or 1<2
--> "sort them from smaller to higher value"

when this condition is met,
[arr[i], arr[j]] = [arr[j], arr[i]] switches the indices of every
neighbouring items, during many iterations. 

We get a sorted array and join it back to a string. */





/* 2: 
using built-in function sort() 
is the easier way. the function sort() does the ... well, sorting.

it works for arrays, so we split and join
*/


function newOrder(str)
  {
return str.split('').sort().join('');
  }
console.log(newOrder("Fischer Fritze fischt frische Fische"));



//3
const numArray = [11, 4, 6, 77, 9, 0, 12, 13, 1, 2]
///use numeric sorting method in callback function
numArray.sort(function (a, b) {
  return a - b
})
console.log(numArray);

///reverse: 

numArray.sort(function (a, b) {
  return b - a
})
console.log(numArray);

/* callingArray.sort(function(element1,element2) {
    ///some conditional logic
    return a number that is either (<0) OR (>0) OR (0)
}) 

if we return 0 in the callback func, it means element1 and element2 are the same or should be organized the same level
---> both elements stay in their position

if we return number >0 : the element 2 should be before element1
---> the element1 will move to the right of the other element2


if we return number <0 : the element1 should be before element2
---> the element2 will move to the right of element1

the numbers get converted to unicode by an algorithm */

const numArray2 = [17, 4, 6, 77, 99, 8, 102, 4359]

numArray2.sort(function (element1, element2) {
    if (element1 > element2) {
        return 1
    } else if (element1 < element2) {
        return -1
    } else {
        return 0
    }
})

console.log(numArray2);