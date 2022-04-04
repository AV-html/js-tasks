// * ===== 41 task ===== * //

// Only change code below this line
// const myArray = [[]];


// * ===== 42 task ===== * //
// Create a variable called myData and set it to equal the first value of myArray using bracket notation.

// const myArray = [50, 60, 70];
// let myData = myArray[0];



// * ===== 43 task ===== * //
// Modify the data stored at index 0 of myArray to a value of 45.
// Setup
// const myArray = [18, 64, 99];

// // Only change code below this line
// myArray[0] = 45;




// * ===== 44 task ===== * //

// Using bracket notation select an element from myArray such that myData is equal to 8.
// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
// ];

// const myData = myArray[2][1];


// * ===== 45 task ===== * //
// Push["dog", 3] onto the end of the myArray variable.

// // Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// myArray.push(["dog", 3]);




// * ===== 46 task ===== * //
// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// // Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// let removedFromMyArray = myArray.pop();



// * ===== 47 task ===== * //
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
// const myArray = [["John", 23], ["dog", 3]];

// // Only change code below this line
// let removedFromMyArray = myArray.shift();
// console.log(myArray);



// * ===== 48 task ===== * //

// Add["Paul", 35] to the beginning of the myArray variable using unshift().

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);



// * ===== 49 task ===== * //
// Shopping List
// Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

// The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.


const myList = [["potato", 100], ["carot", 60], ["tomato", 200], ["milk", 80], ["eggs", 120]];


// * ===== 50 task (function) ===== * //

// Create a function called reusableFunction which prints the string Hi World to the dev console.
// Call the function.


function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

