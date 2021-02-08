var lengthOfLongestSubstring = function (s) {
   let longestSubstringLength = 0;
   let currentSubstringLength = 1; // first character will always be a unique substring
   // loop through array with 2 pointers
   // first pointer loops through array
   // second pointer checks for a repeating character
   for (let i = 0; i < s.length; i++) {
      for (let j = 1; j < s.length - 1; j++) {
         // increase currentSubstringLength by 1 every time we come upon a unique character
         if (s[i] !== s[j]) {
            currentSubstringLength++;
            // if the letters are the same, then this is the end of the substring without repeating characters
         } else {
            // compare currentSubstringLength to longestSubstringLength
            if (currentSubstringLength > longestSubstringLength) {
               longestSubstringLength = currentSubstringLength;
            }
            currentSubstringLength = 0;
         }
      }
   }
   return longestSubstringLength;
};