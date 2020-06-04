# randoit

randoit is a javascript library that helps to generate random content such as:

-   number (decimal, hexadecimal, binary, octal, etc.)
-   characters (in range, in case)
-   terms, names
-   time, date and duration
-   passwords, capctah, keys
-   sentences, pharases
-   random with weight !!!
-   locations (such as cities, countries,etc.)
-   lorem ipsum texts
-   etc.

## Installation

`npm install randoit`

### Next Version features

-   random password
-   captcha text
-   random times of day
-   random day of years

### Version 1.1.4

-   add weight for range-functions! you can define a chance of each range be setting a weight for each segment!

### Version 1.1.3

-   add datetime feature
-   generate random day of week (by name)
-   generate random month of year (by name)

### Version 1.1.2

-   `hslColor()` : generate colors in hsl format

### Version 1.1.1

These functions has been added:

-   `hexadecimal()` : generate hexadecimal number (0 to F)
-   `charRange(from, to)` : generate characters in range (from, to)
-   `rgb()` : generate random colors in rgb format
-   `rgbCSS()` : generate random colors in rgb format and ready for set css attribute!
-   `hexcolor()` : generate random colors in hexadecimal format

### Version 1.0.0

These functions has been added:

-   `number(max)` : generate number from 1 to max number.
-   `numberRange(min, max)` : generate number from min to max.
-   `charUpper()` : generate character in uppercase.
-   `charLower()` : generate character in lowercase
-   `char()` : generate character in lowercase and uppercase.

## Exmaples

generate random numbers from 1 to 100

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.number(100));
}
</pre>

generate random numbers between 10 to 20

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.numberRange(10, 20));
}
</pre>

generate 10 random characters in uppercase

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.charUpper());
}
</pre>

generate 10 random characters in lowercase

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.charLower());
}
</pre>

generate 10 random characters

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.char());
}
</pre>

generate random colors in rgb format

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.rgb());
}
</pre>

generate random colors in rgb format and ready for set css attribute!

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.rgbCSS());
}
</pre>

generate random characters in range 'B' to 'G'

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.charRange('B', 'G'));
}
</pre>

generate random colors in hexadecimal format

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.hexcolor());
}
</pre>

generate random colors in hsl format

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.hslColor());
}
</pre>

generate random day of week

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.dayOfWeek());
}
</pre>

generate random month of year

<pre>
for (let i = 0; i < 10; i++) {
    console.log(radiot.monthOfYear());
}
</pre>

generate random numbers by weight!

<pre>
for (let i = 0; i < 4; i++) {
    console.log(
        randoit.byWeight(randoit.numberRange, [
            { from: 1, to: 5, weight: 1 },
            { from: 6, to: 10, weight: 4 },
            { from: 11, to: 20, weight: 1 },
        ])
    );
}
</pre>

generate random characters by weight!

<pre>
for (let i = 0; i < 10; i++) {
    console.log(
        randoit.byWeight(randoit.charRange, [
            { from: 'A', to: 'F', weight: 6 }, // 75% pickup a random between 'A' to 'F
            { from: 'G', to: 'Z', weight: 2 }, // 25% choose a random between 'G' yo 'Z'
        ])
    );
}
</pre>
