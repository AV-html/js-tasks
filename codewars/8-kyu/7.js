// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// Возвращает чётное, если весь массив из нечётных и наоборот

const arr = [160, 3, 1719, 19, 11, 13, -21];

function findOutlier(integers) {
    //your code here
    let evenCount = 0;
    let oddCount = 0;

    integers.forEach(element => {
        element % 2 === 0 ? evenCount++ : oddCount++;
    });

    return integers.find(evenCount > oddCount ? (el) => el % 2 !== 0 : (el) => el % 2 === 0);
}

console.log(findOutlier(arr)); // 160



// 1 вариант
// function findOutlier(integers) {
//     const even = integers.filter(int => int % 2 === 0);
//     const odd = integers.filter(int => int % 2 !== 0);
//     return even.length === 1 ? even[0] : odd[0];
// }



// 2 вариант
// function findOutlier(integers) {
//     return integers.slice(0, 3).filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
// }
// function even(num) {
//     return (num % 2 == 0);
// }
// function odd(num) {
//     return !even(num)
// }