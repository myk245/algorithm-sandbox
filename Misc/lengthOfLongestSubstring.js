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
         // move first pointer over one space to the right
         firstPointer++; 
      }
      set.add(s[secondPointer]);
      longestSubstringLength = Math.max(longestSubstringLength, secondPointer - firstPointer + 1);
   }
   return longestSubstringLength;
};