const isChar = (char) => {
    let charCode = char.charCodeAt(0);
    if (
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
    ) {
        return true;
    }
    return false;
};
const numberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const number = (max) => {
    return Math.floor(Math.random() * max) + 1;
};

const hexadecimal = () => {
    return number(2) === 2 ? charRange('A', 'F') : numberRange(0, 9);
};

const charRange = (from, to) => {
    if (!isChar(from) || !isChar(to)) {
        throw 'Parameters are not valid';
    }

    let codeFrom = from.toLowerCase().charCodeAt(0);
    let codeTo = to.toLowerCase().charCodeAt(0);
    return String.fromCharCode(numberRange(codeFrom, codeTo));
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
    hexadecimal: hexadecimal,
    char: char,
    charLower: charLower,
    charUpper: charUpper,
    charRange: charRange,
};
