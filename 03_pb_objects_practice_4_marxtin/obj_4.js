

const minMaxValues = new Object()
minMaxValues.min = 1
minMaxValues.max = 10

console.log(minMaxValues);



function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

console.log(inRange(5, minMaxValues.min, minMaxValues.max));

/* 

why ((x-min)*(x-max) <= 0)?

in range example with x = 5:

5-1=4 
5-10=-5
4*(-5)=-1

out of range example with x = 11:

11-1 = 10
11-10 = 1
10*1 = 10

*/


const objectAuthor = new Object()
objectAuthor.name = "Frank Herbert"
objectAuthor.books = new Array("Dune", "Dune Messiah", "Children of Dune", "God Emperor of Dune", "Heretics of Dune", "Chapterhouse: Dune")
objectAuthor.publishYear = new Array("1963", "1969", "1976", "1981", "1984", "1985")

console.log(objectAuthor);



/* 
create copy without changing original object / shallow copy
 */


const newAuthor = {...objectAuthor}

function newBook(array, item) {
    array.push(item)
}



newBook(newAuthor.books, "Road to Dune")
newBook(newAuthor.publishYear, "1985")
console.log("newAuthor",newAuthor);

////Clone

function cloneObject (objectToClone) {
    return {...objectToClone}
}

const newAuthorClone = cloneObject(newAuthor)

newBook(newAuthorClone.books, "Eye")
newBook(newAuthorClone.publishYear, "1985")
console.log("newAuthorCopy",newAuthor);





const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
      "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
  };



  programming.languages.push("Go")

  programming["difficulty"] = 7

  delete programming.jokes

  programming.isFun= true

  for (let element of programming.languages) {
      console.log(element);
  }

  for (let propertyValues of Object.values(programming)){
      console.log(propertyValues);
  }

programming.checkChallengeAndReward = function() {
    if (this.isChallenging && this.isRewarding){
        return `learning programming langs ${this.languages} is rewarding and challenging`
    }
    return `false`
}

  console.log(programming);
  console.log(programming.checkChallengeAndReward());




  function delayed() {
      console.log("I am delayed");
  }

  setTimeout(delayed,3000)

