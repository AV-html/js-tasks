// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

String.prototype.isUpperCase = function () {
    console.log(this);
    return this == this.toUpperCase()
}

console.log('hello I AM DONALD'.isUpperCase());
console.log('HELLO I AM DONALD'.isUpperCase());