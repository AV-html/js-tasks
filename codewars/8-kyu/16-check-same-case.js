// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1

// 'b' and 'G' returns 0
// 'B' and 'g' returns 0

// '0' and '?' returns - 1


function sameCase(a, b) {
    // if (/[0-9]/.test(Number(a)) || /[0-9]/.test(Number(b))) return -1
    if (/[a-z]/.test(a) && /[a-z]/.test(b)) return 1
    if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) return 1

    if (/[a-z]/.test(a) && /[A-Z]/.test(b)) return 0
    if (/[a-z]/.test(b) && /[A-Z]/.test(a)) return 0

    else return -1;
}

console.log(sameCase('A', 'V'));


// sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1


// function sameCase(a, b) {
//     if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
//     if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
//     if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
//     return 1;
// }