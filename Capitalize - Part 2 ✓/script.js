"use strict";

function writeCapitalized(fullName) {
  //First Letter Big
  let firstLetterSelect = fullName[0];
  let secondLetterPlusSelect = fullName.substring(1).toLowerCase();
  let firstLetterBig = firstLetterSelect.toUpperCase();

  const capitalizedName = firstLetterBig + secondLetterPlusSelect;
  console.log(capitalizedName);
}

writeCapitalized("bUriM");
writeCapitalized("BuriM");
writeCapitalized("buriM");
writeCapitalized("BuRiM JuSuFi");
writeCapitalized("BuRiM", "JuSuFi");
