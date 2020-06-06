const randoit = require('./index');

// generate random numbers from 1 to 100
for (let i = 0; i < 10; i++) {
    console.log(randoit.number(100));
}
console.log('-----------------');
// generate random numbers between 10 to 20
for (let i = 0; i < 10; i++) {
    console.log(randoit.numberRange(10, 20));
}
console.log('-----------------');
// generate 10 random characters in uppercase
for (let i = 0; i < 10; i++) {
    console.log(randoit.charUpper());
}
console.log('-----------------');
// generate 10 random characters in lowercase
for (let i = 0; i < 10; i++) {
    console.log(randoit.charLower());
}
console.log('-----------------');
// generate 10 random characters
for (let i = 0; i < 10; i++) {
    console.log(randoit.char());
}
console.log('-----------------');
// generate random colors in rgb format
for (let i = 0; i < 10; i++) {
    console.log(randoit.rgb());
}
console.log('-----------------');
// generate random colors in rgb format and ready for set css attribute!
for (let i = 0; i < 10; i++) {
    console.log(randoit.rgbCSS());
}
console.log('-----------------');
// generate random characters in range 'B' to 'G'
for (let i = 0; i < 10; i++) {
    console.log(randoit.charRange('B', 'G'));
}
console.log('-----------------');
// generate random colors in hexadecimal format
for (let i = 0; i < 10; i++) {
    console.log(randoit.hexcolor());
}
console.log('-----------------');
// generate random colors in hsl format
for (let i = 0; i < 10; i++) {
    console.log(randoit.hslColor());
}
console.log('-----------------');
// generate random day of week
for (let i = 0; i < 10; i++) {
    console.log(randoit.dayOfWeek());
}

console.log('-----------------');
// generate random month of year
for (let i = 0; i < 10; i++) {
    console.log(randoit.monthOfYear());
}
console.log('-----------------');
// generate random numbers by weight!
for (let i = 0; i < 4; i++) {
    console.log(
        randoit.byWeight(randoit.numberRange, [
            { from: 1, to: 5, weight: 1 },
            { from: 6, to: 10, weight: 4 },
            { from: 11, to: 20, weight: 1 },
        ])
    );
}

console.log('-----------------');
// generate random characters by weight!
for (let i = 0; i < 10; i++) {
    console.log(
        randoit.byWeight(randoit.charRange, [
            { from: 'A', to: 'F', weight: 6 }, // 75% pickup a random between 'A' to 'F
            { from: 'G', to: 'Z', weight: 2 }, // 25% choose a random between 'G' yo 'Z'
        ])
    );
}

const P = {
    latitude: 37.7768006,
    longitude: -122.4187928,
};

const R = 700; // meters

for (let i = 0; i < 10; i++) {
    console.log(randoit.randomInCircle(P, R));
}
