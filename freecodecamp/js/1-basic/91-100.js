// * ===== 91 task ===== * //

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line

    let lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }
    result = lookup[val];

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

// * ===== 92 task ===== * //

// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found";
    // Only change code above this line
}

// * ===== 93 task ===== * //

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Pavel",
        "title": "Piano Man",
        "release_year": 2022,
        "formats": [
            "DVD",
            "HH",
            "LL"
        ],
    }
];

// * ===== 94 task ===== * //
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];


// * ===== 95 task ===== * //

// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];


// * ===== 96 task ===== * //



// * ===== 97 task ===== * //



// * ===== 98 task ===== * //



// * ===== 99 task ===== * //



// * ===== 100 task ===== * //