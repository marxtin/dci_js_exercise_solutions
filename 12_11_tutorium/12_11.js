/**
 * Write a JavaScript function that reverse a number.
Sample Data and output:
Example x = 32243;
Expected Output: 34223
 */

function reverse_a_number(n)
{
	n = n + ""; ///1. 
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));



///STEP 1: convert number to string
/// Code : -> n = n + "";

///STEP 2: The split() method is used to split a String object into an 
///array of strings by separating the string into substrings.
///Code : console.log('1000'.split(""));
///Output : ["1", "0", "0", "0"]


///STEP 3: The reverse() method is used to reverse an array in place. The ////first array element becomes the last and the last becomes the first.
///Code : console.log(["1", "0", "0", "0"].reverse());
///Output : ["0", "0", "0", "1"]


////STEP 4: 
////The join() method is used to join all elements of an array into a 
////string.
///Code : console.log(["1", "0", "0", "0"].reverse().join(""));
///The Number constructor contains constants and methods for working with ////numbers. Values of other types can be converted to numbers using the //////Number() function.
///Output : 1


///PALINDROME WITH A FOR LOOP////////////////////////////////////////////////////////////////

function isPalindrome(str) {
   str = str.toLowerCase();
  for (let i=0; i<str.length; i++) {
    if (str[i] !==  str[str.length -1 -i]) {
        
      return false;
    }
  }
  return true
}

//IMPORTANT!////////////////////////////////
/////// str[i] !== str[str.length - 1 - i]) means:  the string is str.length long, we start at the end ( - 1), and go each position backwards to the start of the string (-i).

///As long as the characters from each part match, the FOR loop will go on
// When the characters don't match anymore, false is returned and we exit the FOR loop

console.log(isPalindrome("Anna"));


//For each iteration:     i = ?  i < str.length  i++    if(str[i] !== str[str.length - 1 - i])?

// 1st iteration:        0        yes        1           if(str[0] !== str[4 - 1 - 0])? 

//=> if("a"  !==  "a")? // false

//2nd iteration:        1        yes         2           if(str[1] !== str[4 - 1 - 1])? 

//=> if("n"  !==  "n")? // false      

// 3rd iteration:        2        yes        3            if(str[2] !== str[4 - 1 - 2])? 

//=> if("n"  !==  "n")? // false  

//4th iteration:        3        yes         4     if(str[3] !== str[4 - 1 - 3])? 

//=> if("a"  !==  "a")? // false */





////CHECK FOR PALINDROME WITH BUILT-IN FUNCTIONS

function palindrome(str) {
    let re = /[\W]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }


console.log(palindrome("A man, a plan, a canal. Panama"));;




/* 

\W removes all non-alphanumeric characters:

\W matches any non-word character
\W is equivalent to [^A-Za-z0–9]
\W matches anything that is not enclosed in the brackets (so you can enclose other things you might want to match such as _)

g means = search global 



The toLowerCase() method to return the calling string value converted to lowercase.

The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.

The split() method splits a String object into an array of strings by separating the string into sub strings.

The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

The join() method joins all elements of an array into a string. */


// // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
// str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
// str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"



// // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'

// lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]

// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]

// ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"

// So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
// And, let reverseStr = "amanaplanacanalpanama";


 // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//  "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true




/* 

3 ^ 0 = 1 
3 ^ 1 = 3
3 ^ 2 = 9  = 3 * 3
3 ^ 3 = 27 = 3 * 3 * 3

*/

    ////GEOMETRIC SEQUENCE//////////////////////////////

    ///////////////STRING///////////////////////////////

    //// EXPLANATIONS BELOW/////////////////////////////
    
    function sequence_return_str (iterations = 5) {
        let textAcc = "";
        for (let index = 0; index < iterations; index++) {
           
           textAcc += `${Math.pow(3,index)},`
            
        }
        return textAcc
        }
    
        
        console.log(sequence_return_str(6));
    
    /////////////////ARRAY///////////////////////////////
    
        function sequence_return_arr (iterations = 5) {
      
            let arr = [];
            for (let index = 0; index < iterations; index++) {
               arr.push(Math.pow(3,index))
                
            }
            return arr
            }
        
            
            console.log(sequence_return_arr(6));


////REMARKS FOR THE GEOMETRIC SEQUENCE

/// ARRAY METHOD
/// we use the push method when we want to return an array: arr.push()   
/// Why? because we want to push whatever our for-loop does with each iteration into the array
/// so here are the steps for the function sequence_return_arr:
/// Step 1: declare an empty array with let arr=[]
/// Step 2: tell javascript what should happen with each iteration: Math.pow(3,index)
/// and push it into the array with arr.push()
/// declare return arr outside of the for loop curly brackets to tell javascript to return your array


///STRING METHOD
/// This is basically the same, only instead of an empty array, you declare an empty string with:
/// let textAcc = "";
/// Then with  textAcc += `${Math.pow(3,index)},` you put the solution of every iteration into the new string
/// This happens with += , the addition assignment operator. You add what you assign with each iteration. 


function fibonacci (iterations = 7) {
      
    let arr = [];
    let fib = [0, 1];
    for (let index = 2; index < iterations; index++) {
        fib[index] = fib[index - 1] + fib[index - 2]; 
        arr.push(fib[index]);
        
    }
    return arr
    }


console.log(fibonacci(10));    