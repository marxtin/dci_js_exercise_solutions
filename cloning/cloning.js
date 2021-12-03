///Cloning

const obj1 = {
    name: "Gilgamesh",
    location: {
        city: "Uruk",
        region: "Sumer",
    }
}

const obj2 = obj1 ///this is just a reference
obj2.name = "Utuhengal";
console.log(obj1);

///this is called shallow cloning
const obj4 = {...obj1}   ///still references from obj1

///this may clone completely, using shallow cloning to kinda deep clone, but it may be tedious
const obj3 = {...obj1,location:{...obj1.location}}   
obj3.name = "Gudea"
obj3.location.city = "Lagash"


console.log(obj1);
console.log(obj3);


/// with recursion we can deep clone for any object
/// this is an algorithm for deep cloning objects

function deepClone (obj){
    let clonedObj = {}
    for (let propertyName in obj){
        let propertyValue = obj[propertyName];
        if(typeof propertyValue === "object"){
            clonedObj[propertyName] = deepClone(propertyValue);
        }else{
            clonedObj[propertyName] = propertyValue;
        }
    }
    return clonedObj
}

const obj5 = deepClone(obj1);

obj5.name = "Sargon";
obj5.location.city = "Akkad"
obj5.location.region = "Akkad"
console.log(obj1);
console.log(obj5);
