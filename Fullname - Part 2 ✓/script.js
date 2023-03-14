"user strict";

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

function getFullName(last, first, middle) {
  if (middle) {
    return `Mr ${first} ${middle} ${last}`;
  } else {
    return `Mr ${first} ${last}`;
  }
}

console.log(getFullName(last, first, middle));
