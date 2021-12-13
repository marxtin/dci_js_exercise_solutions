




///Fisher Yates Algorithm truely randomizes items of array

function randomize(arr){
  
    for(let i =arr.length-1 ; i>0 ;i--){
      let j = Math.floor( Math.random() * (i + 1) ); //random index
      [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
  }
  return arr
  }