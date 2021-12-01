

const humans = new Array("rika", "jenna", "bleda", "oliver", "itamar");


function select3(array, substring) {
    const temporalArray = array.filter((word) => {
      if (word.endsWith(substring)) {
        return true;
      } else {
        return false;
      }
    });
    return temporalArray;
  }


  console.log(select3(humans, "ka"));
console.log(select3(humans, "a"));