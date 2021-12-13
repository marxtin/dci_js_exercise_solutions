/*

DO...WHILE
The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.


*/



/*
WHILE
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

*/


let arr = [1, 5, 3, 6, 4, 2];

function bubbleSort1(arr) {
    // if( arr[1,2,3,4,5] )

    do {
        var isFinished = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[i + 1]) {
                // if (1 element) less than (2 element) > this codeblock will run
                let temp = arr[i]; // temp = 1
                arr[i] = arr[i + 1]; // (1 element) replaced with (2 element)
                arr[i + 1] = temp; // (2 element) replaced with (1 element)
                isFinished = true; // its mean ("if this block run,while loop will run again!")
            }
        }
    } while (isFinished); // if (false) it not gonna run!
    return arr;
}

function bubbleSort2(a)
{
    let swap;
    let n = a.length-1;
    let x=a;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
 return x; 
}


const bubbleSort3 = arr => arr.sort( (a, b) => b-a );


console.log(bubbleSort1(arr));
console.log(bubbleSort2(arr));
console.log(bubbleSort3(arr));