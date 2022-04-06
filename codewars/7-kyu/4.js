
// console.log(parseInt('10', 2));



const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 1, 0, 0]));


// console.log([0, 1, 0, 0].split(""));