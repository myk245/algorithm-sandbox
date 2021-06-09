// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
   let lettersInS = {};
   let lettersInT = {};

   // exit if length of strings are not equal
   if (s.length !== t.length) {
      return false;
   }

   for (let i = 0; i < s.length; i++) {
      if (!lettersInS[s[i]]) {
         lettersInS[s[i]] = 1;
      } else {
         lettersInS[s[i]] += 1;
      }
   }

   for (let j = 0; j < t.length; j++) {
      if (!lettersInT[t[j]]) {
         lettersInT[t[j]] = 1;
      } else {
         lettersInT[t[j]] += 1;
      }
   }

   // compare hashmap for letters in s to hashmap for letters in t
   for (let key in lettersInS) {
      if (lettersInS[key] !== lettersInT[key]) {
         return false;
      }
   }

   return true;
};