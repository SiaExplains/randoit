const radiot = require('./index');

// generate random numbers from 1 to 100
for (let i = 0; i < 10; i++) {
    console.log(radiot.number(100));
}
console.log('-----------------');
// generate random numbers between 10 to 20
for (let i = 0; i < 10; i++) {
    console.log(radiot.numberRange(10, 20));
}
console.log('-----------------');
// generate 10 random characters in uppercase
for (let i = 0; i < 10; i++) {
    console.log(radiot.charUpper());
}
console.log('-----------------');
// generate 10 random characters in lowercase
for (let i = 0; i < 10; i++) {
    console.log(radiot.charLower());
}
console.log('-----------------');
// generate 10 random characters
for (let i = 0; i < 10; i++) {
    console.log(radiot.char());
}
