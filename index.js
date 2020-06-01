const numberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const number = (max) => {
    return Math.floor(Math.random() * max) + 1;
};

const charUpper = () => {
    return String.fromCharCode(numberRange(65, 90));
};

const charLower = () => {
    return String.fromCharCode(numberRange(97, 122));
};

const char = () => {
    if (number(2) === 2) {
        return charUpper();
    }
    return charLower();
};

module.exports = {
    number: number,
    numberRange: numberRange,
    char: char,
    charLower: charLower,
    charUpper: charUpper,
};
