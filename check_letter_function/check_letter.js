/// Write function to check whether a letter is in a string
/// Arrow Function
const check = str => (str.toLowerCase().includes("o"));

console.log(check("opium"));
console.log(check("Opium"));






// Check whether certain letter is in string
// pure Function, no side effects
// for-loop, if-condition

const checkString = text => {
    let isThere = false;
  
    for (let index = 0; index < text.length ; index++) {
        
        if(text[index].toLowerCase() === "o"){
            isThere = true
        }
    }
    return isThere
};

console.log(checkTwoArg("Opium", "o"));
console.log(checkTwoArg("Opium", "o"));







/// The same with two arguments
/// (I know it may sound stupid, but I just did not like having the letter inside the functions' if condition)

function checkTwoArg (text, x) {
    let isThere = false;
  
    for (let index = 0; index < text.length ; index++) {
        
        if(text[index].toLowerCase() === x){
            isThere = true
        }
    }
    return isThere
}

console.log(checkTwoArg("Opium", "o"));
console.log(checkTwoArg("Opium", "o"));








/// EXERCISE from 15_11_21 late afternoon
//// First Code showed by Sebastian
function checkU(text) {
    let indexOfU;

    for (let i =0; i < text.length; i++) {
        if (text[i].toLowerCase() === "u") {
            indexOfU = i;
            break;
        }
    }
    if (indexOfU >=0) {
        return `the letter u is first found in the index ${indexOfU}`
    }else {
        return false
    }
}

console.log(checkU("Ute"));









/// Reduced Code
const checkUReduced = text => {
   

    for (let i =0; i < text.length; i++) {
        if (text[i].toLowerCase() === "u") {
            return `the letter u is first found in the index ${i}`
        }
    }
        return false
    
};

console.log(checkUReduced("Ute"));


