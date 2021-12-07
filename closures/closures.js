/* Closures 

a function which encloses(uses) a variable from it's parents scope 
the common example is when the parent scope is a function, meaning that we 
have a function definied inside another function
- lexical scope is the scope seen from the inner function. typically equal to parent scope.

*/

///uncommon example bcuz clg
let myVar = "hello world";

function myFunc(){
console.log(myVar);
}

///common example
////inner function gives access to outerVariable which is only defined inside the function
///inner function gives access to parent's scope

function outerFunction(){
    let outerVariable = "Iam the outer variable";

    function innerFunction () {
        return outerVariable
    }
    return innerFunction
}

let accessVar = outerFunction()

console.log(accessVar());

////////////////////////////////
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      return name;
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  console.log(myFunc());
  


  ////BASIC IDEA: Protecting variable in parent scope. Only inner function will be able to access.


  function changeStr(){
      strGlobal = "Ciao"
      let strLocal = "Hallo"
      console.log("line54",strLocal);
      console.log(strLocal);
      function innerChangeStr (){
        console.log("line57",strLocal);
          strLocal = "Good Morning";
          console.log("line59",strLocal);
      }
      return innerChangeStr
  }

  let accessInnerChangeStr = changeStr();
  console.log(strGlobal);
  accessInnerChangeStr()
  changeStr()
  accessInnerChangeStr()

  ////counter without closure

 
  // counter without closure option 1
// This counts perfectly, but it has the flaw that anyone can change the globalCounter variable making the solution no secure.
let globalCounter = 0;
function count () {
  globalCounter = globalCounter + 1;
}

// console.log(globalCounter)
// count()
// console.log(globalCounter)
// count()
// console.log(globalCounter)
// globalCounter = 25;
// console.log(globalCounter)

// Option 2
// This will not work because everytime we call the function we will create the localCounte variable from scratch, meaning there is no record of the previous call of the function.
function countV2 () {
  let localCounter = 0;
  localCounter = localCounter + 1;
  console.log(localCounter)
}
// countV2()
// localCounter = 25;
// console.log(localCounter)
// countV2()
// countV2()

  /// with using a parent scope variable, this variable is safe. only my function can use it. 

  function outerScopeCounter(){

      let enclosedCounter = 0;

      function closureCount(){
          enclosedCounter = enclosedCounter += 1;
          console.log(enclosedCounter);
      }
      return closureCount
  }

  let instanceClosureCount = outerScopeCounter();
  instanceClosureCount()
  instanceClosureCount()
  instanceClosureCount()
  instanceClosureCount()
  instanceClosureCount()

  let inst2ClosureCount = outerScopeCounter();
  inst2ClosureCount()  ///1: when we call function with new let var, variable from outer scope is created from scratch

  instanceClosureCount() ///6


  function makeAdder (baseNum) {
      //baseNum is considered a variable for the makeAdder function:
      //let baseNum = argument
      function adder (numToAdd){
          return baseNum+numToAdd
      }
      return adder
  }

  const add7 = makeAdder(7)
  //add7 will be an instance of the adder function with baseNum = 7
  console.log(add7(10));


  ///IIFE - immediately invoked function expressions
  console.log(makeAdder(7)(10));




  ////Addition counter 
  
  function addAmountMaker() {
    let add=0;
   return function (x) {
       add += x;
       console.log(add);
       return add
   }
  }
  const instAdd = addAmountMaker();
  
  instAdd(5)
  instAdd(2)
  instAdd(10)

