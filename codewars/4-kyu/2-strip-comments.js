// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"


// Part1: (\/\*[\wа-я\'\s\r\n\*]*\*\/) for comments style: /*   .....   */

// Part2: (\/\/[\wа-я\s\'\;]*)         for comments style: //   .....

// Part3: (\<![\-\-\s\wа-я\>\/]*\>)    for comments style: <!-- .....  -->



function solution(input, markers) {
    let result = input


    let indexEnd = 0;
    markers.forEach(marker => {
        let indexStart = null;
        if (result.includes(` ${marker}`)) {
            indexStart = result.indexOf(` ${marker}`)
        } else if (result.includes(`${marker}`)) {
            indexStart = result.indexOf(`${marker}`)
        }


        let endResult = null
        if (result.includes(`\n`, indexEnd)) {
            indexEnd = result.indexOf('\n')
            endResult = result.substring(indexEnd)
        } else {
            indexEnd = -1;
            endResult = ''
        }
        result = result.substring(0, indexStart) + endResult;
    });

    return result
};
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
console.log(result);



// Best solve
// function solution(input, markers) {
//     return input.split('\n').map(
//         line => markers.reduce(
//             (line, marker) => line.split(marker)[0].trim(), line
//         )
//     ).join('\n')
// }

// function solution(input, markers) {
//     return input.replace(/(\s\W\w+).*|(\s\W\s?\w+\s?\w+)/g, "");
// };

// function solution(input, markers) {
//     return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
// }

// function solution(input, markers) {
//     return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`, 'g'), '');
// }


// function solution(input, markers) {
//     var lines = input.split("\n");
//     for (var i = 0; i < lines.length; ++i)
//         for (var j = 0; j < markers.length; ++j)
//             lines[i] = lines[i].split(markers[j])[0].trim();
//     return lines.join("\n");
// }
