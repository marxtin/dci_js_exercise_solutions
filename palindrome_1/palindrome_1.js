///PALINDROME WITH A FOR LOOP////////////////////////////////////////////////////////////////

function isPalindrome(str) {
    str = str.toLowerCase();
   for (let i=0; i<str.length; i++) {
     if (str[i] !==  str[str.length -1 -i]) {
         
       return false;
     }
   }
   return true;
 }
 

 /////// if (str[i] !== str[str.length - 1 - i]) means:  
 ///check if the elements of the string left of the operator are strictly not equal to the elemtents to the right, whereas:
 ///str[str.length - 1 - i] checks every element from the end towards the beginning of the string
 /// ----> As long as the characters from each part match, the FOR loop will go on 


 // return false; ----> When the characters don't match anymore, false is returned and we exit the FOR loop
 
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
 
 