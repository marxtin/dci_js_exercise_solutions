
function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

 //*(max - min) max-min-trick to make sure random number is scaled within boundaries 

 // + min to make sure minimum is always the lowest number we can get