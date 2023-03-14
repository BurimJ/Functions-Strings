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

function PoliteName(last, first, middle) {
  if (middle) {
    console.log(`Mr ${first} aka ${middle} ${last}`);
  } else {
    console.log(`Mr ${first} aka ${last}`);
  }
}

PoliteName(last, first, middle);
