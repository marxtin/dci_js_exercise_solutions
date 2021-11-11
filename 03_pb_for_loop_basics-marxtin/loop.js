//1.1. 

for (let i = 1; i <= 20 ; i++) {
  console.log("1.1",i)
}


///1-solution
let sum1to20= 0; 
for (let i = 1; i <= 20; i++) {
  sum1to20 += i;
}

console.log(sum1to20)



//2 

for ( let i = 1; i < 6; i++) {
  if (i == 1) {
  console.log(`2. There is ${i} bottle of beer on the wall`)
  }
  else {
  console.log(`2. There are ${i} bottles of beer on the wall`)
  }
  } 

//1.2. 
let firstArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 1; i <= firstArray.length; i++) {
    console.log("1.2",i+(i+1))
}

//3

let cNumber = 10;

let evenOrOdd = cNumber % 2 == 0 ? "even" : "odd";

console.log(`${cNumber} is ${evenOrOdd}`);


for (let i=0; i <= 20; i++) {
  if (i%2 == 0){
    console.log("3",i, "is even")
  }
  else {
console.log("3", i, "is odd")
  }
}

//5. 

for (let i=1; i <= 50; i++)
{
    if (i % 15 == 0, i % 30 == 0, i % 45 == 0 )
 
        console.log("FizzBuzz");

    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log("5.",i);
}

 

///6. 
let sum = 0;

for (let i = 1; i <=1000; i++) {
  if(i%3 == 0 && i%5 ==0){
    sum += i;
  }
}

console.log("6", sum);

///4. 

for (let i=0; i <= 10; i++) {
console.log("4", i ,"*9=",i*9)
}

for (let i=0; i<=10;i++) {
  for (let j = 0; j<2; j++) {
    //some code here
  }
}

for (let tableVar = 1; tableVar<=10; tableVar++) {
  for (let multiplierVar = 0; multiplierVar <=10; multiplierVar++) {
    console.log(`${multiplierVar} * ${tableVar} = ${multiplierVar*tableVar}`);
  }

}


// 7.1



for (let i = 1; i <=10; i++) {
 
  console.log("7.1",i*100);

 
 
}




for (let i = 0; i <=5; i++) {
 
  console.log("7.2.",i*2)
 
}

for (let i = 0; i <=5; i++) {
 
  console.log("7.3.",i*3)
 
}


for ( let i = 9; i >= 0; i-=1) {
  console.log("7.4.",i);
}

for ( let i = 1; i <= 4; i++) {
  for (g = 0; g < 3; g++)
      console.log("7.5",i);
}


 


 
 for ( var g = 0; g < 3; g++) { 
  for (i = 0; i <= 4; i++)
      console.log("7.6", i);
}   


const name = "Hildegard";

 const isPalindrome = (str) => {
   str = str.toLowerCase();
  for (let i=0; i<str.length; i+=1) {
    if (str[i] !==  str[str.length - 1 -i]) {
      return false;
    }
  }
  return true
}

console.log(`8. is the name ${name} a palindrome? answer: `,isPalindrome(name))



let word = "madam";
let pal = true;

for (let i = 0; i < word.length-1; i++) {
  if(word[i]!==word[ word.length-1-i]) {
    pal = false;
    break;
  }
}

////REVERSE ARRAY METHOD -

let reverseWord = word.split('').reverse().join('');

if (word === reverseWord) {
  console.log(`${word} is a ${pal} Palindrome`);
}else {
  nsole.log(`${word} is not a ${pal} Palindrome`);
}