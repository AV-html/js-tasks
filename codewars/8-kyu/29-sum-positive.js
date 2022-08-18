function positiveSum(arr) {
    return arr.reduce((p, v) => v > 0 ? p + v : p, 0)
}