const randomBetween = require("./shared/randomBetween.js");
const words = require("./resources/words.json");
const getRandomItem = require("./shared/getRandomItem.js");

module.exports = (wordQuantity=2, maxWordLength=4) => {
    wordQuantity = Math.max(2, wordQuantity);
    let word = "";

    for (i = 0; i < wordQuantity; i++) {
        const randomWord = getRandomItem(words);

        const randomStart = randomBetween(0, randomWord.length - 1);
        const randomEnd = randomBetween(randomStart + 1, Math.min(maxWordLength, randomWord.length));

        word += randomWord.substring(randomStart, randomEnd);
    }

    return word;
}
