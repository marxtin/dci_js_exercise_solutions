// Vowel replace. Replace all vowels of a string with one vowel, like this:

// vowelReplace("Contrabass") --> "Cintribiss"
// RegExp 

function vowelReplace(str, replacement) {
  let reg = /[aeiou]/g;
  let newString = str.toLowerCase().replaceAll(reg, replacement);

  return newString.charAt(0).toUpperCase() + newString.slice(1);
}

console.log(vowelReplace("Hello I am Martin", "i"));


//RegExp (regular expression) /[aeiou]/ 
//





function replaceVowels(str, replacement) {
  let newString = str.toLowerCase();
  let newerArray = newString.split("");
  console.log(newerArray);
  newerArray.map(function (item, i) {
   
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    )
      newerArray[i] = replacement;
  });

  return (
    newerArray.join("").charAt(0).toUpperCase() + newerArray.join("").slice(1)
  );
}

console.log(replaceVowels("Drei Bassisten mit dem Kontrabass", "i"));


