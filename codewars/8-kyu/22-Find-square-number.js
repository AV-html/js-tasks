// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:


function nearestSq(n) {
    return Math.round(Math.sqrt(n)) ** 2;
}

console.log(nearestSq(nearestSq(1))); // 1
console.log(nearestSq(nearestSq(2))); // 1
console.log(nearestSq(nearestSq(10))); // 9
console.log(nearestSq(nearestSq(111))); // 121
console.log(nearestSq(nearestSq(9999))); // 10000