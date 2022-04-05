// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

const flip = (d, a) => {
    return a.sort(d === 'R' ? (a, b) => a - b : (a, b) => b - a)
}


// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);


// const flip = (d, a) => {
//     if (d === 'R') return a.sort((a, b) => a - b);
//     if (d === 'L') return a.sort((a, b) => b - a);
// }