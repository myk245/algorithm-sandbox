// O(n) space and time
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

function caesarCipherEncryptor(string, key) {
   const stringToUnicode = [];
   // key needs to be equal to or less than 26
   const adjustedKey = key % 26;
   const newLetters = [];

   for (const letter of string) {
      stringToUnicode.push(letter.charCodeAt() + adjustedKey);
   }

   for (let i = 0; i < stringToUnicode.length; i++) {
      if (stringToUnicode[i] <= 122) {
         newLetters.push(String.fromCharCode(stringToUnicode[i]));
      } else if (stringToUnicode[i] > 122) {
         newLetters.push(String.fromCharCode(96 + (stringToUnicode[i] % 122)));
      }
   }
   return newLetters.join('');
}

// cleaned up version of above solution
function caesarCipherEncryptor(string, key) {
   const newLetters = [];
   const adjustedKey = key % 26;

   for (const letter of string) {
      let newLetter = (letter.charCodeAt() + adjustedKey)
      if (newLetter <= 122) {
         newLetters.push(String.fromCharCode(newLetter));
      } else if (newLetter > 122) {
         newLetters.push(String.fromCharCode(96 + (newLetter % 122)));
      }
   }
   return newLetters.join('')
}