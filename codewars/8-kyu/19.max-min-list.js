const min = function (list) {
    return list.reduce((a, v) => v < a ? v : a);
}

const max = function (list) {
    return list.reduce((a, v) => v > a ? v : a);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// ! StartValue = list[0] !

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);
