// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000
// Help
// Symbol	Value
// I	1
// IV	4
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000


class RomanNumerals {
    static fromRoman(roman) {
        let totalValue = 0;
        let value = 0;
        let prev = 0;

        const romNum = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        for (let i = 0; i < roman.length; i++) {
            let current = romNum[roman.charAt(i)];
            if (current > prev) {
                totalValue -= 2 * value;
            }
            if (current !== prev) {
                value = 0;
            }
            value += current;
            totalValue += current;
            prev = current;
        }
        return totalValue;
    }

    static toRoman(num) {
        const lookup = {
            M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
        };
        let roman = '';
        for (const i in lookup) {
            while (num >= lookup[i]) {
                roman += i;
                num -= lookup[i];
            }
        }
        return roman;
    }
}

console.log(RomanNumerals.fromRoman('IIX'));

console.log(RomanNumerals.romanize(2008));





// * Another solve * //

// const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

// class RomanNumerals {
//     static toRoman(num) {
//         let str = '';
//         for (var i in map) {
//             while (num >= map[i]) {
//                 str += i;
//                 num -= map[i];
//             }
//         }
//         return str;
//     }

//     static fromRoman(str) {
//         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
//     }
// }




// const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

// class RomanNumerals {
//     static fromRoman(str) {
//         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((pre, val) => pre + dec[rom.indexOf(val)], 0);
//     }

//     static toRoman(num) {
//         return dec.reduce((pre, val, idx) => pre + rom[idx].repeat(num / val ^ 0, num -= val * (num / val ^ 0)), ``);
//     }
// }