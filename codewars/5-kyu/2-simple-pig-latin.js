// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !





// Переместите первую букву каждого слова в конец, а затем добавьте «ay» в конец слова. 
// Оставьте знаки препинания нетронутыми.

// function pigIt(str) {
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }


// Не учитывает знаки!
// function pigIt(str) {
//     return str.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
// }

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) // 'hisTay siay ymay tringsay'