function points(games) {
    // your code here
    return games.reduce((previous, current) => {
        if (current[0] > current[2]) {
            return previous + 3;
        } else if (current[0] === current[2]) {
            return previous + 1;
        } else {
            return previous;
        }
    }, 0);
}



console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']));