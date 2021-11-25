///1.

let foodArray = new Array("banana", "cucumber", "bread", "cakes", "pizza");

let [fruit, vegetable, ...food] = foodArray;

console.log("1", fruit, vegetable, food);

///2.

const helloween = new Object();
helloween.Martin = "Ghoul";
helloween.Sebastian = "Vampire";
helloween.Ion = "Werewolf";
helloween.Amanda = "Sinister Jester";
helloween.Alka = "Beetlejuice";

console.log(helloween);

const { Martin, Sebastian, Ion, Amanda, Alka } = helloween;
console.log(Martin, Sebastian, Ion, Amanda, Alka);

///3.

const greatestBand = new Object();
greatestBand.name = "Iron Maiden";
greatestBand.hits = new Array(
  "Can I Play With Madness",
  " Number Of The Beast",
  " Caught Somewhere In Time",
  " The Trooper",
  " Two Minutes To Midnight",
  " Run To The Hills",
  " Killers",
  " Bring Your Daughter ... To The Slaughter",
  " Fear Of The Dark",
  " and many more."
);
greatestBand.country = "the United Kingdom";
greatestBand.yearsActive = "1975 - today";
greatestBand.members = new Array(
  "Steve Harris",
  " Dave Murray",
  " Adrian Smith",
  " Bruce Dickinson",
  " Nicko McBrain",
  " Janick Gers"
);
(greatestBand.genre = "Heavy Metal"), (greatestBand.attribute = "Legendary");

function printBand({
  name,
  hits,
  country,
  yearsActive,
  members,
  genre,
  attribute,
}) {
  console.log(
    `${attribute} ${genre} Band ${name} from ${country} has been active ${yearsActive}. ${members} are currently members. Some of their hits are: ${hits}  `
  );
}

printBand(greatestBand);

///4.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

function printArray(arr = board) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

printArray();

///5.

const doggo = new Object();
doggo.name = "Doge";
doggo.breed = "Shibe";
doggo.favoriteFood = new Array("treats", "bone", "snack");

console.log(doggo);

let secondElement = doggo.favoriteFood[1];

console.log(secondElement);

function printArrElements(obj) {
  let arr = obj.favoriteFood;
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrElements(doggo);

///6.

const recipes = {
  ingredients: {
    sugar: "1/2 cup",
    flour: "1 cup",
    cocoa: "1/2 cup",
    oleo: "1/2 cup",
    printValues: function () {
      
      console.log(this.brown_sugar, this.flour, this.cocoa, this.oleo);
    }
  },
  
};


recipes.ingredients.brown_sugar=recipes.ingredients.sugar;
delete recipes.ingredients.sugar;
/* 
recipes.ingredients.ginger = "1 piece"
delete recipes.ingredients.sugar
recipes.ingredients.brown_sugar = "1/2 cup" */

recipes.ingredients.printValues()
console.log(recipes);
