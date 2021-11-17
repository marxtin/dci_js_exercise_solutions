// Vowel replace. Replace all vowels of a string with one vowel, like this:

// vowelReplace("Contrabass") --> "Cintribiss"

function vowelReplace(str, replacement) {
  let reg = /[aeiou]/g;
  let newString = str.toLowerCase().replaceAll(reg, replacement);

  return newString.charAt(0).toUpperCase() + newString.slice(1);
}

console.log(vowelReplace("Drei Bassisten mit dem Kontrabass", "i"));






function replaceVowels(str, replacement) {
  let newString = str.toLowerCase();
  let newerArray = newString.split("");

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
