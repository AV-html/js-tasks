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
    friedns: 100,

    // Only change code above this line
};



// * ===== 85 task ===== * //




// * ===== 86 task ===== * //




// * ===== 87 task ===== * //




// * ===== 88 task ===== * //




// * ===== 89 task ===== * //




// * ===== 90 task ===== * //



