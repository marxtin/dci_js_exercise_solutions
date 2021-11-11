//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let min = 50;
let max = 99;

let a = 55;
let b = 75;
let c = 100;

if ((a >= min || a <= max, b >= min || b <= max)) {
  console.log("1.", true);
} else {
  console.log("1.", false);
}

if ((a >= min || a <= max, b >= min || b <= max)) {
  console.log("1.2", true);
} else {
  console.log("1.2", false);
}

if ((a >= min && a <= max) || (b >= min && b <= max)) {
  console.log("1.3", true);
} else {
  console.log("1.3", false);
}

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

if ((a >= min || a <= max, b >= min || b <= max, c >= min || c <= max)) {
  console.log("2.", true);
} else {
  console.log("2.", false); mySolution3 = r % 7 == 0 || r % 11 == 0 || q % 7 == 0 || r % 11 == 0 
  ? "true"
  : "false";

  console.log(`11.3  ${mySolution3} `); 
}

if (
  (a >= min && a <= max) ||
  (b >= min && b <= max) ||
  (c >= min && c <= max)
) {
  console.log("2.1", true);
} else {
  console.log("2.1", false);
}

//3. Check if the given string begins with "Py", if true print the given string if false add "Py" at the beginning of the string.

let newString = "Python";

//charAt

if (newString.charAt(0) == "P" && newString.charAt(1) == "y") {
  console.log("3.", true);
} else {
  console.log("3", false);
}

//substr

if (newString.substr(0, 2) == "Py") {
  console.log("3a.", true);
} else {
  console.log("3a.", false);
}

//slice

let first2letters = newString.slice(0, 2);

if ((first2letters = "Py")) {
  console.log("3b.", true);
} else {
  console.log("3b.", false);
}

// if string misses Py:

let newString2 = "thon";

if (newString2.charAt(0, 1) == "P" && newString2.charAt(1) == "y") {
  console.log("3.1", true);
} else {
  console.log("3.1", false);
}

let newString3 = "Py";

console.log("3.2", newString3.concat("", newString2));

// 4. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let i = 25;
let j = 40;

let newSum = i + j;
console.log(newSum);

if (newSum >= 50 && newSum <= 80) {
  console.log("4.", true, "65");
} else {
  console.log("4.", false);
}

// 5. Check whether the sum of two integers is 8. If this is the case, print true.

if (newSum == 8) {
  console.log("5.", true);
} else {
  console.log("5.", false);
}

// 6. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let m = 10;
let n = 5;

if ((m == 15, n == 15) || m + n == 15) {
  console.log("6.", true);
} else {
  console.log("6.", false);
}

// 7. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let q = 666;
let r = 777;

if (r % 7 == 0 || r % 11 == 0 || q % 7 == 0 || r % 11 == 0) {
  console.log("7.", true);
} else {
  console.log("7.", false);
}

//8. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let thelema = q + r;

if (q == r) {
  console.log("8.", 3 * thelema);
} else {
  console.log("8.", false);
}

//9. Bonus Challenge 1

let firstName = "Martin";
let age = 37;

if (age < 13) {
  console.log(`10. ${firstName} is a child`);
} else if (age >= 13 && age < 20) {
  console.log(`10. ${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`10. ${firstName} is a young adult`);
} else {
  console.log(`10. ${firstName} is a adult`);
}

// 11.1 from task 10

let firstNameT = "Martin";
let ageT = 32;

mySolution1 =
  ageT < 13
    ? "is a child"
    : ageT >= 13 && ageT < 20
    ? "is a Teenager"
    : age >= 20 && age < 30
    ? "is a young adult"
    : "is an adult";

console.log(`11.1 ${firstNameT} ${mySolution1}`);


//11.2 from task 5. 

  mySolution2 = 
    newSum ==8 
    ? "true"
    : "false";

  console.log(`11.2  ${mySolution2} `); 

// 11.3 - from task 7. 


 mySolution3 = r % 7 == 0 || r % 11 == 0 || q % 7 == 0 || r % 11 == 0 
    ? "true"
    : "false";

    console.log(`11.3  ${mySolution3} `); 