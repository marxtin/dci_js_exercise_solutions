/// Find largest number in array usinf for-loop and if-statement

function max(arr) {
  var m = '';
  for (var i = 0; i <= arr.length; i++) {
    
      if (arr[i] > arr[arr.length-1-i]) {
        m = arr[i];
      }
    
    }
  
  return m;
}

console.log(max([1, 6, 9]));


/// Find largest number in array using Math.max and 
/// Spread operator

function maxMath(arr) {
    var m =  Math.max(...arr);
    return m;
  }
  
  console.log(maxMath([1, 6, 9]));



///// Find the largest sub-array of many arrays

function maxMultiArr (arr) {

    var m = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          m = arr[i];
        }
        if (arr[i] < arr[j]) {
          m = arr[j];
        }
      }
    }
    return m;
  } 

  console.log(maxMultiArr([[1, 6, 9],[10, 16, 19],[100, 160, 190]]));