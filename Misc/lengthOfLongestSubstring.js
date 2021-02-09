var lengthOfLongestSubstring = function (s) {
   let set = new Set(); 
   let longestSubstringLength = 0; 
   let firstPointer = 0;

   for (let secondPointer = 0; secondPointer < s.length; secondPointer++) {
      while (set.has(s[secondPointer])) {
         set.delete(s[firstPointer]);
         firstPointer++; 
      }
      set.add(s[secondPointer]);
      longestSubstringLength = Math.max(longestSubstringLength, secondPointer - firstPointer + 1);
   }
   return longestSubstringLength;
};