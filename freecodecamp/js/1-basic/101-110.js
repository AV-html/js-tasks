// * ===== 101 task ===== * //
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

// Only change code below this line



// * ===== 102 task ===== * //
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



// * ===== 103 task ===== * //

// Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i < 5)


// * ===== 104 task (recursive) ===== * //

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    // Only change code below this line

    if (n <= 0) {
        return 0;
    }

    return sum(arr, n - 1) + arr[n - 1];
    // Only change code above this line
}
// console.log(sum([2, 3, 4], 1));

// * ===== 105 task ===== * //


// lookUpProfile("Kristian", "lastName") should return the string Vos

// lookUpProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]

// lookUpProfile("Harry", "likes") should return an array

// lookUpProfile("Bob", "number") should return the string No such contact

// lookUpProfile("Bob", "potato") should return the string No such contact

// lookUpProfile("Akira", "address") should return the string No such property

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}

// console.log(lookUpProfile("Akira", "address"));

// * ===== 106 task ===== * //



// * ===== 107 task ===== * //



// * ===== 108 task ===== * //



// * ===== 109 task ===== * //



// * ===== 110 task ===== * //


