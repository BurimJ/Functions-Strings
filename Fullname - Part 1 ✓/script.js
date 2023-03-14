"use strict";

const fullName = "Burim Shady Jusufi";

//Last Name
let lastName = fullName.lastIndexOf(" ");
let last = fullName.substring(lastName + 1);

// Middle Name
let middleName = fullName.indexOf(" ");
let middle = fullName.substring(middleName + 1, lastName);

// First Name
let firstName = fullName.lastIndexOf(" ");
let first = fullName.substring(0, middleName);

function PoliteName(first, middle, last) {
  if (middle) {
    console.log(`Mr ${last} aka ${first} ${middle}`);
  } else {
    console.log(`Mr ${last} aka ${first}`);
  }
}

PoliteName(last, first, middle);
