// * ===== 71 task ===== * //

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }



    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);

// * ===== 72 task ===== * //
function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);

// * ===== 73 task ===== * //

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);


// * ===== 74 task ===== * //

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

// * ===== 75 task ===== * //


function testSize(num) {
    // Only change code below this line

    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
    // Only change code above this line
}

testSize(7);



// * ===== 76 task ===== * //


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
    // Only change code above this line
}
// Strokes	    Return
// 1	        "Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	    "Birdie"
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Go Home!"

golfScore(5, 4);

// * ===== 77 task ===== * //
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;

        case 4:
            answer = "delta";
            break;
    }

    // Only change code above this line
    return answer;
}
caseInSwitch(1);


// * ===== 78 task ===== * //

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 'a':
            answer = "apple";
            break;
        case 'b':
            answer = "bird";
            break;
        case 'c':
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);


// * ===== 79 task ===== * //

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);


// * ===== 80 task ===== * //


function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    // if (val === "bob") {
    //     answer = "Marley";
    // } else if (val === 42) {
    //     answer = "The Answer";
    // } else if (val === 1) {
    //     answer = "There is no #1";
    // } else if (val === 99) {
    //     answer = "Missed me by this much!";
    // } else if (val === 7) {
    //     answer = "Ate Nine";
    // }

    switch (val) {
        case 'bob':
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);

