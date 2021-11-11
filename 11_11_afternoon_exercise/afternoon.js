/* 

3 ^ 0 = 1 
3 ^ 1 = 3
3 ^ 2 = 9
3 ^ 3 = 27

*/

function sequence (iterations = 5) {
for (let index = 0; index < iterations; index++) {
   console.log(Math.pow(3,index));
    
}
}

sequence(9)
sequence()

///////////////STRING///////////////////////////////

function sequence_return_val (iterations = 5) {
    let textAcc = "";
    for (let index = 0; index < iterations; index++) {
       console.log(Math.pow(3,index));
       textAcc += `${Math.pow(3,index)},`
        
    }
    return textAcc
    }

    
    console.log(sequence_return_val(6));

/////////////////ARRAY///////////////////////////////

    function sequence_return_arr (iterations = 5) {
  
        let arr = [];
        for (let index = 0; index < iterations; index++) {
           arr.push(Math.pow(3,index))
            
        }
        return arr
        }
    
        
        console.log(sequence_return_arr(6));


//////is letter "o" in string? 


const check = str => (str.toLowerCase().includes("o"));

console.log(check("opium"));
console.log(check("Opium"));


function checkO (text) {
    let isThere = false;
    for (let index = 0; index < text.length ; index++) {
        
        if(text[index].toLowerCase() === "o"){
            isThere = true
        }
    }
    return isThere
}

console.log(checkO("opium"));
console.log(checkO("Opium"));