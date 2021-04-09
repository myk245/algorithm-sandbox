function maximumOccurringCharacter(text) {
   let maxCount = 0;
   let maxChar = '';
   let characterCount = {};

   // loop through the string
   // keep track of each character occurrence and the number of times they appear in the string
   for (let character of text) {
      // check if the character exists as a key in the object already
      if (!characterCount[character]) {
         characterCount[character] = 1;
      } else {
         characterCount[character] += 1;
      }
   }

   // update maxCount if necessary 
   for (let character in characterCount) {
      if (characterCount[character] > maxCount) {
         maxCount = characterCount[character];
         maxChar = character;
      }
   }

   // return character that occurs the most amount of times in the string
   return maxChar;
}

