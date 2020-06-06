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

### Version 1.2.1

-   generate random location based on cirucle area

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

#### Numbers

-   generate random numbers from 1 to 100
    `randoit.number(100);`
-   generate random numbers between 10 to 20
    `randoit.numberRange(10, 20);`
-   generate random hexadecimal digit
    `randoit.hexadecimal(10, 20);`

#### Characters

-   generate random characters in uppercase
    `randoit.charUpper();`
-   generate random characters in lowercase
    `randoit.charLower();`
-   generate random characters
    `randoit.char();`
-   generate random characters in range 'B' to 'G'
    `randoit.charRange('B', 'G');`

#### Colors

-   generate random colors in rgb format
    `randoit.rgb();`
-   generate random colors in rgb format and ready for set css attribute!
    `randoit.rgbCSS()`
-   generate random colors in hsl format
    `randoit.hslColor();`
-   generate random colors in hexadecimal format
    `randoit.hexcolor();`

#### Date and Time

-   generate random day of week
    `randoit.dayOfWeek();`

-   generate random month of year
    `randoit.monthOfYear();`

#### Intelligent random content generate by weight!

-   generate random numbers by weight!
<pre>
randoit.byWeight(randoit.numberRange, [
            { from: 1, to: 5, weight: 1 },
            { from: 6, to: 10, weight: 4 },
            { from: 11, to: 20, weight: 1 },
        ]
</pre>

-   generate random characters by weight!

<pre>
  randoit.byWeight(randoit.charRange, [
            { from: 'A', to: 'F', weight: 6 }, // 75% pickup a random between 'A' to 'F
            { from: 'G', to: 'Z', weight: 2 }, // 25% choose a random between 'G' yo 'Z'
        ]
</pre>
