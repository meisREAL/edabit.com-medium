//* Create a function which returns the number of true values there are in an array.
// *Examples
// *countTrue([true, false, false, true, false]) ➞ 2
// *countTrue([false, false, false, false]) ➞ 0
// *countTrue([]) ➞ 0
// *Notes
// *Return 0 if given an empty array.
// *All array items are of the type bool (true or false).

function countTrue(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === true) {
                count++;
            }
        }
        return count;
    }
}

//console.log(countTrue([true, false, false, true, false]))

// A Redundant Function
// Published by Helen Yu in JavaScript
// closuresfunctional_programminglanguage_fundamentals
//* Write a function redundant that takes in a string str and returns a function that returns str.
// Examples
// const f1 = redundant("apple")
// f1() ➞ "apple"
// const f2 = redundant("pear")
// f2() ➞ "pear"
// const f3 = redundant("")
// f3() ➞ ""
// Notes
// Your function should return a function, not a string.

function redundant(str) {
    const func = (str) => {
        return str;
    }

    return func(str);
}

// console.log(redundant('apple'))
// console.log(redundant('pear'))
// console.log(redundant(''))


//*In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
// Examples
// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

function possibleBonus(a, b) {
    if (b - a <= 6 && b - a >= 1) {
        return true;
    } else {
        return false;
    }
}

// Perimeters with a Catch
//* Write a function that takes a number and returns the perimeter of either a circle or a square.The input will be in the form(letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
// Use the following formulas:
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
// The catch is you can only use arithmetic or comparison operators, which means:
// No if... else statements.
// No objects.
// No arrays.
// No formatting methods, etc.
// The goal is to write a short, branch - free piece of code.

function perimeter(l, num) {
    return (4 * num) * (l === 's')
        + (6.28 * num) * (l === 'c')
};
//! jeigu l === s tai skaicius skliaustuose tampa 1, nes true reisksmes yra = 1, jeigu lygybe yra false tai skaicius skliaustuose tampa 0, o daugyba is 0 bus lygi 0. Tada skaicius + 0 = skaiciui.

//* Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
// Examples
num_of_digits(1000)
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1
// Notes
// Try to solve this challenge without using strings!

function num_of_digits(num) {
    // const re = /1234567890/g
    // return (num.match(/[0-9]/g) || []).length
    const count = (String(num).match(/[0-9]/g) || []).length
    return count
}