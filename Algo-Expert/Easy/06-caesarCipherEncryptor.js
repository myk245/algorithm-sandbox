// unicode value of a is 97
// unicode value of z is 122
function caesarCipherEncryptor(string, key) {
   const newLetters = [];
   const newKey = key % 26;

   for (const letter of string) {
      // convert letter to unicode
      newLetters.push(getNewLetter(letter, newKey));
   }
   return newLetters.join('');
}

function getNewLetter(letter, key) {
   const newLetterCode = letter.charCodeAt() + key;

   if (newLetterCode <= 122) {
      return String.fromCharCode(newLetterCode);
   } else if (newLetterCode > 122) {
      return String.fromCharCode(96 + (newLetterCode % 122));
   }
}