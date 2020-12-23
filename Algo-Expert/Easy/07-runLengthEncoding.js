function runLengthEncoding(string) {
   const encodedCharacters = []; 
   // first run has to be at least of length 1
   let currentRunLength = 1;

   for (let i = 1; i < string.length; i++) {
      const currentCharacter = string[i]; 
      const previousCharacter = string[i - 1]; 
      // if run is bigger than 9, we will need to split
      if (currentCharacter !== previousCharacter || currentRunLength === 9) {
         encodedCharacters.push(currentRunLength.toString());
         encodedCharacters.push(previousCharacter); 
         // reset currentRunLength
         currentRunLength = 0;
      }
      currentRunLength++
   }

   // last run
   encodedCharacters.push(currentRunLength.toString()); 
   encodedCharacters.push(string[string.length - 1]);

   return encodedCharacters.join('');
}