"use strict";

function capitalized(fullName) {
  //First Letter Big
  let firstLetterSelect = fullName[0];
  let secondLetterPlusSelect = fullName.substring(1).toLowerCase();
  let firstLetterBig = firstLetterSelect.toUpperCase();

  const capitalizedName = firstLetterBig + secondLetterPlusSelect;
  return capitalizedName;
}

console.log(capitalized("bUriM"));
console.log(capitalized("BuriM"));
console.log(capitalized("buriM"));
console.log(capitalized("BuRiM JuSuFi"));
console.log(capitalized("BuRiM", "JuSuFi"));
