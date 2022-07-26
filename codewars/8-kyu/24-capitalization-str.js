function capitalizeWord(word) {
    const symbol = word[0].toUpperCase();
    return symbol + word.slice(1);
}

console.log(capitalizeWord('word'))

