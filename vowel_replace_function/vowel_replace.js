

// Vowel replace. Replace all vowels of a string with one vowel, like this:

// vowelReplace("Contrabass") --> "Cintribiss"

function vowelReplace(str) {
    let re = /[\W]/g;
    let newString = str.toLowerCase().replace(re, '');;
    let newArray = newString.split('');
    console.log(newArray);
}

vowelReplace("Hello")
