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
