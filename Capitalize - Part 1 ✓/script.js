"use strict";

const input = "bUrIm";

//First Letter Big
let firstLetterSelect = input.charAt(0);
let secondLetterPlusSelect = input.substring(1).toLowerCase();
let firstLetterBig = firstLetterSelect.toUpperCase();

console.log(firstLetterBig + secondLetterPlusSelect);

/*
3caPitalization - below here

const input = "burim";
const input = "01234";

//First Letter Big
let firstLetterSelect = input.charAt(0, 1);
let secondLetterPlusSelect = input.substring(1);
let firstLetterBig = firstLetterSelect.toUpperCase();

console.log(firstLetterBig + secondLetterPlusSelect);

//Third Letter Big
let thirdLetterSelect = input.charAt(2, 3);
let firstTwoLetterSelect = input.substring(0, 2);
let lastTwoLetterSelect = input.substring(3);
let thirdLetterBig = thirdLetterSelect.toUpperCase();

console.log(firstTwoLetterSelect + thirdLetterBig + lastTwoLetterSelect);

//Last Letter Big
let firstFourLetterSelect = input.substring(0, 4);
let lastLetterSelect = input.charAt(4);
let lastLetterBig = lastLetterSelect.toUpperCase();

console.log(firstFourLetterSelect + lastLetterBig);
*/
