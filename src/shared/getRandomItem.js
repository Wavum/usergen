const randomBetween = require("./randomBetween.js");

module.exports = (array) => {
    return array[randomBetween(0, array.length - 1)];
}
