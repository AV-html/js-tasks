// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
    let sum = 0;
    let numStart = 1;
    let d = 1;

    for (let i = 1; i < n; i++) {
        numStart += d;
        d += 1;
    }

    let oddNum = 2 * numStart - 1;

    for (let i = 0; i < n; i++) {
        sum += oddNum + 2 * i;
    }

    return sum;
}

console.log(rowSumOddNumbers(4));



// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

