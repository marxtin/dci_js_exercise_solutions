////more with forEach

/*The first difference between map() and forEach() is the returning value.
 The forEach() method returns undefined and map() returns a new array with the transformed elements. 
 Even if they do the same job, the returning value remains different*/

const namesArray = new Array("Helena", "Paris", "Agamemnon", "Achilles", "Menelaos")


//anonymous function 
namesArray.forEach(function(element){
    console.log(`Hello ${element}`);
})
////
function salute_3(x){
    console.log(`Hey ${x}`);
}
////
namesArray.forEach((name) => salute_3(name))

////
namesArray.forEach((element) => {
   salute_3(element)
})

///forEach ---> NEVER RETURNS / DO NOT PUT RETURN into program ---> undefined!!!
/// also with for loops --> we need an empty variable to put stuff into, then return this variable