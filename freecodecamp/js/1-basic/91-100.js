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
// You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire record collection object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
// Note: A copy of the recordCollection object is used for the tests.

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop === "tracks" && value !== "") {
        if (records[id].hasOwnProperty(prop)) {
            records[id][prop].push(value);
        } else {
            records[id][prop] = [];
            records[id][prop].push(value);
        }
    } else if (value === "") {
        delete records[id][prop];
    } else {
        records[id][prop] = value;
    }

    return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA'); /// artist should be the string ABBA
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"); //tracks should have the string Take a Chance on Me as the last and only element.
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

console.log(recordCollection);


// * ===== 97 task ===== * //



// * ===== 98 task ===== * //



// * ===== 99 task ===== * //



// * ===== 100 task ===== * //