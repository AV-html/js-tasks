// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives


function add(a, b) {
    a = [...a].reverse()
    b = [...b].reverse()

    for (var q = 0; q < b.length; ++q) {
        if ((a[q] = ~~a[q] + ~~b[q]) > 9) {
            a[q] -= 10
            b[q + 1] = ~~b[q + 1] + 1
        }
    }

    return a.reverse().join("")
}

// function add(a, b) {
//     return (BigInt(a) + BigInt(b)).toString(); // Fix me!
// }

console.log(add("101", "100"));

console.log(add('63829983432984289347293874', '90938498237058927340892374089'));