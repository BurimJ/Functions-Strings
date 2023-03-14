"user strict";

const fullName = "Burim Shady Jusufi";

function seperateString(fullName) {
  let lastName = fullName.lastIndexOf(" ");
  let last = fullName.substring(lastName + 1);
  console.log(last);

  let middleName = fullName.indexOf(" ");
  let middle = fullName.substring(middleName + 1, lastName);
  console.log(middle);

  let firstName = fullName.indexOf(" ");
  let first = fullName.substring(0, middleName);
  console.log(first);
}

seperateString(fullName);
