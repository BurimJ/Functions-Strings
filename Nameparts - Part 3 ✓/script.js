"use strict";

// Capitalizes first Letter
function capitalized(fullName) {
  //First Letter Big
  let firstLetterSelect = fullName[0];
  let secondLetterPlusSelect = fullName.substring(1).toLowerCase();
  let firstLetterBig = firstLetterSelect.toUpperCase();
  // Variable
  const capitalizedName = firstLetterBig + secondLetterPlusSelect;
  if (capitalizedName === " ") {
    return undefined;
  }

  return capitalizedName;
}

function writeNameParts(fullName) {
  //Last Name
  let lastName = fullName.lastIndexOf(" ");
  let last = fullName.substring(lastName + 1);

  // Middle Name
  let middleName = fullName.indexOf(" ");
  let middle = fullName.substring(middleName + 1, lastName);

  // First Name
  let firstName = fullName.lastIndexOf(" ");
  let first = fullName.substring(0, middleName);

  // Variables
  const firstNavn = capitalized(first);
  const middleNavn = capitalized(middle);
  const lastNavn = capitalized(last);

  return { firstNavn, middleNavn, lastNavn };
}

console.log(writeNameParts("buRche ShadY Boy"));
console.log(writeNameParts("peter herOnimous Lind"));
console.log(writeNameParts("haRry jaMes Potter"));
console.log(writeNameParts("albus Percival wulfric brIan Dumbledore"));
console.log(writeNameParts("brendaN eIch"));
