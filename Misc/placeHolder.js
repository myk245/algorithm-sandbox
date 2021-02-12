// check casing - we can use UTF-16 code  
// A = 65 Z = 90
// a = 97 z = 122
// 2 pointers 
// one loops through string 
// second finds the opposite case occurrence
function solution(s) {
   let balancedFragment = new Array();
   let minLength = 0;
   let balancedMatch = "";

   // outer loop traverses through string
   for (let i = 0; i < s.length; i++) {
      // upper case scenario
      if (s.charAt(i) >= 65 && s.charAt(i) <= 90) {
         balancedMatch = s[i].toLowerCase();
      } else {
         balancedMatch = s[i].toUpperCase();
      }
      // inner loop picks up opposite case occurrence
      for (let j = i + 1; j < s.length; j++) {
         if (s[j] === balancedMatch) {
            // push fragment from first pointer up to j into balancedFragment Array
            let possibleBalancedFragment = s.slice(i, j + 1)
            // console.log(possibleBalancedFragment)
            balancedFragment.push(possibleBalancedFragment);
         }
      }
   }
   // return -1; // if there are no balanced fragments
};

solution("azABaabza"); // 5 -> "ABaab"
solution("TacoCat"); // -1
solution("AcZCbaBz"); // 8 (whole string)
solution("abcdefghijklmnopqrstuvwxyz"); // -1