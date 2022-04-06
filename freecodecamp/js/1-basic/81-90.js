// * ===== 81 task ===== * //
// Fix the function isLess to remove the if/else statements.
// function isLess(a, b) {
//     // Only change code below this line
//     if (a < b) {
//         return true;
//     } else {
//         return false;
//     }
//     // Only change code above this line
// }
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);


// * ===== 82 task ===== * //

// Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) return undefined

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);


// * ===== 83 task ===== * //

let count = 0;

function cc(card) {
    // Only change code below this line

    if (card < 7) {
        count++;
    } else if (card < 10) {
        count += 0;
    } else {
        count--;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');




// * ===== 84 task (object) ===== * //

const myDog = {
    // Only change code below this line
    name: "Foks",
    legs: 4,
    tails: 1,
    friends: ['Alex', 'Liza']

    // Only change code above this line
};



// * ===== 85 task ===== * //


// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line




// * ===== 86 task ===== * //

// Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj2["an entree"];   // Change this line
const drinkValue = testObj2["the drink"];    // Change this line




// * ===== 87 task ===== * //

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line


// * ===== 88 task ===== * //

// Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog2.name = "Happy Coder";



// * ===== 89 task ===== * //

const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog3.bark = "woof";


// * ===== 90 task ===== * //

// Setup
const myDogs4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDogs4.tails;




