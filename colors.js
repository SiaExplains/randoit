const randoitCore = require('./core');

const rgb = () => {
    let red = randoitCore.numberRange(0, 255);
    let green = randoitCore.numberRange(0, 255);
    let blue = randoitCore.numberRange(0, 255);

    return `(${red},${green},${blue})`;
};

const rgbCSS = () => {
    let red = randoitCore.numberRange(0, 255);
    let green = randoitCore.numberRange(0, 255);
    let blue = randoitCore.numberRange(0, 255);

    return `rgb${rgb()}`;
};

const hexcolor = () => {
    let red = `${randoitCore.hexadecimal()}${randoitCore.hexadecimal()}`;
    let green = `${randoitCore.hexadecimal()}${randoitCore.hexadecimal()}`;
    let blue = `${randoitCore.hexadecimal()}${randoitCore.hexadecimal()}`;
    return `#${red}${green}${blue}`;
};

module.exports = {
    rgb: rgb,
    rgbCSS: rgbCSS,
    hexcolor: hexcolor,
};
