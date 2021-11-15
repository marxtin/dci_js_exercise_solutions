function findSumOfMultiples(n) {
  let sum = 0;
  for (let x = 0; x < n; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  return sum;
}
console.log(findSumOfMultiples(100));


/* 

Here, n is the number of iterations. We want to look at only the natural
numbers (=integers). 

So we want to specify how many numbers we want to look at. 
Here the numbers-count is equal to the iterations-count, so we can
declare our function with any positive intew *//////
