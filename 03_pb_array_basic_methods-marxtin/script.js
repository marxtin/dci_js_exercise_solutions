// 1. 

let euroCities = [
    ["Paris"],
    ["Rome"],
    ["London"],
    ["Valletta"],
    ["Prague"]
];


console.log(euroCities);

//. 2

euroCities.unshift(["Berlin"])

console.log(euroCities);

//3. 

console.log(euroCities.length);

//4. 

euroCities.pop([6])

console.log(euroCities)

//5. 

euroCities.splice(1, 0, ["Budapest"])

console.log(euroCities)

//6. 

let removedCity = euroCities.pop([5])

console.log(removedCity)

//7.

euroCities.push(["Lissabon"], ["Madrid"], ["Athens"])

console.log(euroCities)

newLength = euroCities.length;

console.log(newLength)

