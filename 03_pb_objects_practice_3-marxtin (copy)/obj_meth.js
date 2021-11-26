///1. 
const forms = ({
    choice1: "pyramid",
    choice2: "rhomboeder",
    choice3: "cube"
  })

  function getValues(getObjectValues = forms) {
    let result = Object.values(getObjectValues);
    return result
  }
  console.log("1",getValues());

const hobbit = {
    firstName: "Frodo",
    lastName: "Baggins", 
    job: "ringbearer",
    age: 53, 
    region: "The Shire"
  }

  function getValuesToString(getObjectValues = hobbit) {
    let result = Object.values(getObjectValues).toString();
    return result
  }
  console.log("2",getValuesToString());

  ///3.

  function getKeysValues(getObjectValues = hobbit) {
    let result = Object.entries(getObjectValues);
    return result
  }
  console.log("3",getKeysValues());


 
