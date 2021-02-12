// sliding window approach
// O(N) time
var lengthOfLongestSubstring = function (s) {
   let set = new Set(); // store only unique values
   let longestSubstringLength = 0; 
   let firstPointer = 0;

   for (let secondPointer = 0; secondPointer < s.length; secondPointer++) {
      // handle repeating values -- delete the left-most occurrence from set
      while (set.has(s[secondPointer])) {
         set.delete(s[firstPointer]);
         // only move first pointer over to the right when we come upon a repeating value 
         firstPointer++; 
      }
      set.add(s[secondPointer]);
      // update longestSubstringLength by comparing old value of longestSubstringLength to the length of the current substring
      longestSubstringLength = Math.max(longestSubstringLength, secondPointer - firstPointer + 1);
   }
   return longestSubstringLength;
};

function lengthOfLongestSubstring(string) {
   let pointerA = 0; 
   let pointerB = 0; 
   let maxLength = 0; 
   let substring = new Set(); 

   while (pointerB < string.length) {
      // if our Set doesn't already contain value at pointerB, add it to the set
      if (!substring.has(string[pointerB])) {
         substring.add(string[pointerB]);
         // increment pointerB -- make window bigger
         pointerB++; 
         // check to see if we need to update maxLength
         maxLength = Math.max(maxLength, substring.size); 
         // if the value at pointerB exists in our Set already, delete the character from pointerA in the string from the set
      } else {
         substring.delete(string[pointerA]);
         // increment pointerA -- moving window forward
         pointerA++; 
      }
   }
   return maxLength; 
}
