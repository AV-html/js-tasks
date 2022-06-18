// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]



function evenNumbers(array, number) {
    const arr = [];
    let count = number;

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 === 0 && count > 0) {
            count--;
            arr.push(array[i]);
        }
    }

    return arr.reverse();
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));



// function evenNumbers(array, number) {
//     let arr = [];
//     for (let i=array.length-1;number>0;i--){
//       if (array[i] % 2 == 0) {
//         arr.push(array[i]);
//         number--;
//       }
//     }
// return arr.reverse();
// }


// const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);