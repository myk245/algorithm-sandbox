// O(n) time and space
function isPalindrome(string) {
   const reversedChars = [];

   for (let i = string.length - 1; i >= 0; i--) {
      reversedChars.push(string[i]);
   }
   return string === reversedChars.join('');
}

// O(n) time / O(1) space
function isPalindrome(string) {
   let leftIndex = 0;
   let rightIndex = string.length - 1;
   while (leftIndex < rightIndex) {
      if (string[leftIndex] !== string[rightIndex]) {
         return false;
      }
      leftIndex++;
      rightIndex--;
   }
   return true;
}

// O(n^2) time / O(n) space
function isPalindrome(string) {
   let reversedString = "";
   for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i]
   }
   return string === reversedString;
}

