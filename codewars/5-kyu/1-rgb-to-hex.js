// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3



function rgb(r, g, b) {
    if (r <= 0) { r = '00' }
    if (g <= 0) { g = '00' }
    if (b <= 0) { b = '00' }

    if (r >= 255) { r = 255 }
    if (g >= 255) { g = 255 }
    if (b >= 255) { b = 255 }

    r = r.toString(16).toUpperCase();
    if (r.length === 1) r = `0${r}`;

    g = g.toString(16).toUpperCase();
    if (g.length === 1) g = `0${g}`;

    b = b.toString(16).toUpperCase();
    if (b.length === 1) b = `0${b}`;

    return `${r}${g}${b}`;
}

console.log(rgb(255, 255, 255));
console.log(rgb(173, 255, 47));
console.log(rgb(0, 0, 0));
console.log(rgb(42, 216, 8)); // 2AD808

// const rgb = (r, g, b) => `${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase()


// Best Practice!
// function rgb(r, g, b) {
//     return toHex(r) + toHex(g) + toHex(b);
// }

// function toHex(d) {
//     if (d < 0) { return "00"; }
//     if (d > 255) { return "FF"; }
//     return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
// }