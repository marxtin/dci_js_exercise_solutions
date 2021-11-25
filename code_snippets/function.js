/* Create a function that takes a string, checks if it has 
the same number of 'x's and 'o's and returns either true or false. */


function compareXtoO(str) {


    // 1. make the string lowercase (case sensitivity)
 


    str = str.toLowerCase();

    // 2. put the string into an array



    let arrayOfCharacters = str.split("");

    // 3. count the x's



    let countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
      }, 0);
  
      
    // 4. count the o's


    let countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
      }, 0);
    
 

    
    // 5. check if these numbers match. if yes, return true. otherwise, return false.
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}