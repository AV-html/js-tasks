// JavaScript provides a built-in parseInt method.

// It can be used like this:

// parseInt("10") returns 10
// parseInt("10 apples") also returns 10
// We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

// You are asked to write a myParseInt method with the following rules:

// It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
// For all other strings (including the ones representing float values), it should return NaN
// It should assume that all numbers are not signed and written in base 10



// function myParseInt(str) {
//     let sign = '+';
//     const string = str.trimStart()


//     let restStr = null;
//     if (string[0] === '+' || string[0] === '-') {
//         sign = string[0];
//         restStr = string.slice(1, string.length);
//     } else {
//         restStr = string.slice(0, string.length);
//     }

//     lastIdx = restStr.split('').findIndex(s => isNaN(s));
//     if (lastIdx === -1) { return Number(`${sign}${restStr}`) }
//     intStr = restStr.slice(0, lastIdx);

//     // console.log(sign);
//     // console.log(lastIdx);
//     // console.log(intStr);
//     // console.log(`${sign}${intStr}`);

//     // console.log(Number(`${sign}${intStr}`));

//     return Number(`${sign}${intStr}`);
// }
// console.log(myParseInt("15 friends"));
// console.log(myParseInt("  1  "));
// console.log(myParseInt("1"));
// console.log(myParseInt("16.5"));
// console.log(myParseInt("px16.5"));
// console.log(myParseInt("1ds6.5"));
// console.log(myParseInt("1a6.5"));



function myParseInt(str) {
    let sign = '+';
    const string = str.trimStart()
    let restStr = null;
    if (string[0] === '+' || string[0] === '-') {
        sign = string[0];
        restStr = string.slice(1, string.length);
    } else {
        restStr = string.slice(0, string.length);
    }

    lastIdx = restStr.split('').findIndex(s => isNaN(s));
    if (lastIdx === -1) { return Number(`${sign}${restStr}`) } else {
        return NaN
    }
}


console.log(myParseInt("15 friends"));
console.log(myParseInt("  1  "));
console.log(myParseInt("1"));
console.log(myParseInt("16.5"));
console.log(myParseInt("px16.5"));
console.log(myParseInt("1ds6.5"));
console.log(myParseInt("1a6.5"));


// * Best practice
// function myParseInt(str) {
//     return /^\s*\d+\s*$/.test(str) ? +str : NaN;
// }

// function myParseInt(str) {
//     return /^\d+$/g.test(str.trim()) ? +str : NaN;
// }


// const myParseInt = s => /^\d+$/.test(s.trim()) ? +s : 'NaN';
// const myParseInt = (str) => /\D/.test(str.trim()) ? 'NaN' : +str;

// function myParseInt(str) {
//     console.log(str)
//     return str.trim().match(/[^0-9]/g) === null ? parseInt(str) : 'NaN'
// }