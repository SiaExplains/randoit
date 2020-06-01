const randoitCore = require('./core');
const randoitColors = require('./colors');

module.exports = {
    number: randoitCore.number,
    numberRange: randoitCore.numberRange,
    char: randoitCore.char,
    charLower: randoitCore.charLower,
    charUpper: randoitCore.charUpper,
    charRange: randoitCore.charRange,
    rgb: randoitColors.rgb,
    rgbCSS: randoitColors.rgbCSS,
    hexcolor: randoitColors.hexcolor,
    hslColor: randoitColors.hslColor,
};
