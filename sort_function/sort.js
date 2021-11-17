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