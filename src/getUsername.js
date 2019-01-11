const adjectives = require("./resources/adjectives.json");
const animals = require("./resources/animals.json");
const getRandomItem = require("./shared/getRandomItem.js");
const generatePseudoWords = require("./generatePseudoWord.js");

module.exports = (format) => {
    let username = format.replace(/%a/g, getRandomItem(adjectives));
    username = username.replace(/%A/g, getRandomItem(animals));
    username = username.replace(/%p/g, generatePseudoWords());

    return username;
}
