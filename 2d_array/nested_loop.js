function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(`Sub-array ${i}: ${arr[i]}`);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(`Element ${j}: ${arr[i][j]}`);
            product *= arr[i][j];
        }
    }
    console.log(product);
    return product;
}

multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
]);

//multiply the product variable by each number in the
//sub-arrays of the parameter arr, which is a
//multi-dimensional array.