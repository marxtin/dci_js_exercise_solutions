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

