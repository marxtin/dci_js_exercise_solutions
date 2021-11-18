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


///1.

const cityInfo = {
    name: "Berlin",
    country: "Germany",
    population: 3766082,
    languages: ["German", "Turkish", "Arabic", "Russian", "English"],
    area: "891,79 km²",
    climateInfo: ["oceanic", "continental"],
    min_elevation: 29.5,
  };
  
  ///2.
  
  function getCityInfo(obj, propertyName) {
    let result = obj[propertyName];
    return `The ${propertyName} of ${obj.name} is ${result}`;
  }
  
  console.log(getCityInfo(cityInfo, "population"));
  
  /////
  
  function giveProperty(obj, propertyName) {
    return `the ${propertyName} of ${obj.name} is ${obj[propertyName]}`;
  }
  
  //why? obj[propertyName] -because if I dont know the property-name
  // we can call any property name this way in the arguments
  // -> it's a variable
  
  console.log(giveProperty(cityInfo, "population"));
  
  //3. first version
  
  function UserInfo(userName, joinDate, email) {
    this.userName = userName;
    this.joinDate = joinDate;
    this.email = email;
  }
  
  const userOne = new UserInfo("marxtin", "01.07.2021", "marxtin@gmail.com");
  
  console.log(userOne);
  
  //3. second version
  
  function newUser(userName, joinDate, email) {
    let result = { userName, joinDate, email };
    return result;
  }
  
  console.log(newUser("marxtin", "01.07.2021", "marxtin@gmail.com"));
  
  /// xtra
  
  const menu = { burger: 10, fries: 3, salad: 4, coke: 2, beer: 3 };
  
  function getPrice(itemName, menu) {
    const itemPrice = menu[itemName];
    return itemPrice;
  }
  
  const priceOfBurger = getPrice("burger", menu);
  
  console.log(priceOfBurger);
  
  const books = [
    {
      isbn: "978-0099540946",
      author: "Mikhail Bulgakov",
      title: "Master and Margarita",
    },
    {
      isbn: "978-0596517748",
      author: "Douglas Crockford",
      title: "JavaScript: The Good Parts",
    },
    {
      isbn: "978-1593275846",
      author: "Marijn Haverbeke",
      title: "Eloquent JavaScript",
    },
  ];
  
  function getBookByIsbn(isbn, books) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].isbn === isbn) {
        return books[i];
      }
    }
  }
  
  
  console.log(getBookByIsbn("978-1593275846", books));
  
  
  
  
  
  const bookShop = {
    "978-0099540946": {
      isbn: "978-0099540946",
      author: "Mikhail Bulgakov",
      title: "Master and Margarita",
    },
    "978-0596517748": {
      isbn: "978-0596517748",
      author: "Douglas Crockford",
      title: "JavaScript: The Good Parts",
    },
    "978-1593275846": {
      isbn: "978-1593275846",
      author: "Marijn Haverbeke",
      title: "Eloquent JavaScript",
    },
  };
  
  function getBooks(isbn, bookShop) {
    return bookShop[isbn];
  }
  
  
  console.log(getBooks("978-0596517748", bookShop));
  