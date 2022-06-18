// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

//  // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.



function isArray(o) {
    return Array.isArray(o);
}

Array.prototype.sameStructureAs = function (other) {

    const isError = (search = (arr1, arr2) => {
        let isLocalError = true;

        if (arr1.length !== arr2.length) {
            return false
        }

        for (let i = 0; i < arr1.length; i++) {
            const firstArr = isArray(arr1[i])
            const secondArr = isArray(arr2[i])

            if (firstArr && secondArr) {
                isLocalError = search(arr1[i], arr2[i])
                if (!isLocalError) {
                    return isLocalError
                }
            } else if (firstArr !== secondArr) {
                return false;
            } else {
                isLocalError = true;
            }
        }
        return isLocalError

    })(other, this)

    return isError;
};


console.log([1, 1, 1].sameStructureAs([2, 2, 2]));
console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));

console.log([1, [1, 1]].sameStructureAs([[2, 2], 2]));

console.log([1, [1, 1]].sameStructureAs([2, [2]]));
console.log([[[], []]].sameStructureAs([[[], []]]));




// Array.prototype.sameStructureAs = function (other) {
//     return (this.length === other.length) ? this.every(function (el, i) {
//         return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
//     }) : false;
// };



// Array.prototype.sameStructureAs = function (other) {
//     if (!Array.isArray(other) || this.length != other.length)
//         return false;

//     for (var i = 0; i < this.length; ++i) {
//         if (Array.isArray(this[i])) {
//             if (!this[i].sameStructureAs(other[i])) {
//                 return false;
//             }
//         } else if (Array.isArray(other[i])) {
//             return false;
//         }
//     }

//     return true;
// };