/* 

structure:

objectNAme = {
    key1: value,
    key2: value,
    key3: value
}

*/


let userA = {
    name: "John",
    age: 33,
    email: "john@example.com",
}

let userB = {
    name: "Hillary",
    age : 44,
    email: "hilly@example.com",
    skills: ["drawing", "writing", "coding"],
    contacts: {
        contact1: 1,
        contact2: 2
    }
}

//accessing objects 
//objectName.propertyName

console.log(userB.email);

console.log(userB.skills);

console.log(userB.skills[0]);

let thirdSkill = userB.skills.pop();
console.log(thirdSkill)
console.log(userB.skills);

console.log(userB.contacts.contact1);

userB.age = 45;
console.log(userB.age);

///[] -> objName["propertyName"]

console.log(userB["name"]);

//assume this variable came from an ext place
let propertyName = "email";
console.log(userB[propertyName]);
// so: is the same as clg(userB["email"])

let propertyName2 = "skills"; 
console.log(userB["skills"][0]);
console.log(userB[propertyName2][0]);



///LET OR CONST?


const userC =  {
    name: "Svetlana",
    age: 40,
    email: "svetlana@gmail.com",
    skills: ["coding", "grammar" , "math"]
}

console.log(userC);

userC.name = "Michael"

console.log(userC);

userC.contacts = {Tel: 123}

console.log(userC);

// const protects the object
// we cannot change userC to userA for example
// with let, we could change userC to userA