"use strict";

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
  const firstNavn = first;
  const middleNavn = middle;
  const lastNavn = last;

  // Print all 3 Variables
  console.log({ firstNavn, middleNavn, lastNavn });
}

writeNameParts("Burche Shady Boy");
writeNameParts("Peter Heronimous Lind");
writeNameParts("Harry James Potter");
writeNameParts("Albus Percival Wulfric Brian Dumbledore");
writeNameParts("Brendan Eich");
