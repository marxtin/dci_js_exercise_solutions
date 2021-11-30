/// TASK 1.

function salute(i){
    return `Hey ${i}`
}

function salute_2(x){
    console.log(`Hi ${x}`);
}


const users = new Array("George", "Timothy", "Aurora");

function greeting(callback){
    console.log(callback);
}

greeting(salute(users[0]))
greeting(salute(users[1]))
greeting(salute(users[2]))

/// with let...Of

function greetUsers(array){
    for(let element of array)
    console.log(salute(element));
}

greetUsers(users)




///with Array.prototype.forEach

function userGreeting(callback){
users.forEach(callback)
}

userGreeting(salute_2)


///// TASK 2
const numbersArray = [1, 2, 3, 4, 5, 6]

function powerOf(num) {
    return Math.pow(num,2)
}

function powerOfLog(num) {
    console.log(Math.pow(num,2));
}
/// with for...of
function powerOfArray(array){
    let result = []
    for (let element of array)
    result.push(powerOf(element))
    console.log(result);
   
}

powerOfArray(numbersArray)

//with forEach
function powerArray(callback){
    numbersArray.forEach(callback)
    }

powerArray(powerOfLog)   


//Task 2, version more according to exercise (squareAll to accept two args)



function square(num) {
    return num**2
}

function squareAll(array, callback){
    let result = []
    for (let element of array) {
        result.push(callback(element))
    }
    return result
}

console.log(squareAll(numbersArray, square));













