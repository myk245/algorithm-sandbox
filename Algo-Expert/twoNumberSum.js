// O(n^2) time | O(1) space
// loop through the array twice and add the two integers
// then check to see if they add up to targetSum
function twoNumberSum(array, targetSum) {
   for (let i = 0; i < array.length - 1; i++) {
      const num1 = array[i];
      for (let j = i + 1; j < array.length; j++) {
         const num2 = array[j];
         if (num1 + num2 === targetSum) {
            return [num1, num2];
         }
      }
   }
   return [];
}

// O(n) time | O(1) space
// loop through the array and at each index, 
// check to see if there is a second integer 
// that when added to the first, equals the targetSum
function twoNumberSum(array, targetSum) {
   for (let i = 0; i < array.length; i++) {
      const num1 = array[i];
      const targetMatch = targetSum - num1
      if (array.includes(targetMatch) && targetMatch !== num1) {
         // must be distinct integers, so targetMatch can't equal num1
         return [num1, targetMatch]
      }
   }
   return [];
}

// O(n) time | O(n) space
// create an empty hash table
// traverse array and at each x, check to see if the needed
// number is in our hash table; if not, store x in the hash table
// this allows us to access these numbers in constant time
function twoNumberSum(array, targetSum) {
   const hashTable = {};
   for (let i = 0; i < array.length; i++) {
      const num1 = array[i];
      const targetMatch = targetSum - num1;
      if (targetMatch in hashTable) {
         return [num1, targetMatch];
      } else {
         hashTable[num1] = true;
      }
   }
   return [];
}

// O(nlog(n)) time | O(1) space
// sort the array in ascending order
// have a left and right pointer at opposite ends of the array
// add the number at the left pointer to the number at the right pointer
// compare to targetSum -- if the sum of two numbers is less than targetSum, 
// you know to move the left pointer to the right
//  if the sum is more than targetSum, you know to move the right pointer to the left
function twoNumberSum(array, targetSum) {
   array.sort((a, b) => a - b);
   let leftPointer = 0;
   let rightPointer = array.length - 1;
   while (leftPointer < rightPointer) {
      const currentSum = array[leftPointer] + array[rightPointer];
      if (currentSum === targetSum) {
         return [array[leftPointer], array[rightPointer]]
      } else if (currentSum < targetSum) {
         leftPointer++;
      } else if (currentSum > targetSum) {
         rightPointer--;
      }
   }
   return [];
}