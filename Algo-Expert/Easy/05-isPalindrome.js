// O(n^2) time / O(n) space
function isPalindrome(string) {
   let reversedString = "";
   for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i]
   }
   return string === reversedString;
}

// function isPalindrome(string) {
//    if (string.length === 1) {
//       return true;
//       // if length of string is even
//    } else if (string.length % 2 === 0) {

//       // if length of string is odd, from the middle letter, check if first half of the string reversed equals the second half of the string
//    } else if (string.length % 2 === 1) {

//    }
// }