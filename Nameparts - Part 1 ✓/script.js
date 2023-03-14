"use strict";

const fullName = "Burim Shady Jusufi";

//Seperate the fullName into 3

//Last Name
let lastName = fullName.lastIndexOf(" ");
let last = fullName.substring(lastName + 1);

// Middle Name
let middleName = fullName.indexOf(" ");
let middle = fullName.substring(middleName + 1, lastName);

// First Name
let firstName = fullName.lastIndexOf(" ");
let first = fullName.substring(0, middleName);

console.log(first);
console.log(middle);
console.log(last);
