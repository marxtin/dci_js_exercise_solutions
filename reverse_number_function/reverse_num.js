/**
 * Write a pure, no side-effect JavaScript function that reverses a number.

   STEP BY STEP GUIDE BELOW

*/

function reverse_a_number(n)
{
	n = n + "";  
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(12345)));

///STEP 1: convert number to string
/// Code : -> n = n + "";
    /// note: there are several ways to do this, but to me
    /// n = n + "" seemed the easiest to understand, 
    /// you assign the 

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