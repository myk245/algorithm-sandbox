// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index. Write a function getProductsOfAllIntsExceptAtIndex that takes an array of integers and returns an array of the products.


// First get the products of all the integers before each index. Then go backwards and get the products of all the integers after each index. 
function getProductsOfAllIntsExceptAtIndex(intArray) {
   // edge case: if integer has less than 2 integers, there is no product to return
   if (intArray.length < 2) {
      throw new Error('Getting the product of numbers at other indices requires at least 2 numbers!');
   }

   const productsOfAllIntsExceptAtIndex = []; 

   // For each integer, we find the product of all the integers before it, storing the total product so far each time. 
   let productSoFar = 1; 
   for (let i = 0; i < intArray.length; i++) {
      productsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar *= intArray[i];
   }

   // For each integer find the product of all the integers after it. Since each index in products already has the product of all the integers before it, now we're storing the total product of all other integers.
   productSoFar = 1; 
   for (let j = intArray.length - 1; j >= 0; j--) {
      productsOfAllIntsExceptAtIndex[j] *= productSoFar;
      productSoFar *= intArray[j];
   }

   return productsOfAllIntsExceptAtIndex; 
}

// Test solution
let testArray = [1, 2, 6, 5, 9];
console.log(getProductsOfAllIntsExceptAtIndex(testArray)); // [540, 270, 90, 108, 60] 


function findDuplicateNumbers(arrayInt) {
   let sortedArray = arrayInt.sort();
   let duplicatesArray = [];

   for (i = 0; i < sortedArray.length; i++) {
      for (j = i + 1; j < sortedArray.length; j++) {
         if (sortedArray[i] === sortedArray[j]) {
            duplicatesArray.push(sortedArray[j])
         }
      }
   }
   return duplicatesArray;
}

// function findDuplicateNumbers(arrayInt) {
//   let duplicatesArray = arrayInt.reduce((acc, currentValue, currentIndex, array) => {
//     if(array.indexOf(currentValue) !== currentIndex && acc.indexOf(currentValue) < 0) {
//       acc.push(currentValue); 
//       return acc;
//     }
//   }, [])
//   return duplicatesArray; 
// }

// array1=[0,2,5,9,5,3,0,0,5]

// findDuplicateNumbers(array1)

var input = [1, 2, 3, 1, 3, 1];

var duplicates = input.reduce(function (acc, el, i, arr) {
   if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
   return acc;
}, []);

console.log(duplicates)

// longest palindrome
// O(n^2) time / O(n) space
function longestPalindromicSubstring(string) {
   // store an array of the starting index & ending index 
   // of longest palindromic substring
   let currentLongest = [0, 1]
   // start at index 1
   for (let i = 1; i < string.length; i++) {
      // odd-lettered palindrome  is centered around a given letter
      const odd = getLongestPalindromeFrom(string, i - 1, i + 1)
      // even-lettered palindrome is centered in between the given letter 
      // and the previous letter
      const even = getLongestPalindromeFrom(string, i - 1, i)
      // pick the longer of the two (odd or even)
      const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      // update the current longest
      currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest;
   }
   // slice the longest palindrome out of the string
   return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIndex, rightIndex) {
   while (leftIndex >= 0 && rightIndex < string.length) {
      if (string[leftIndex] !== string[rightIndex])
         break;
      leftIndex--;
      rightIndex++;
   }
   return [leftIndex + 1, rightIndex];
}