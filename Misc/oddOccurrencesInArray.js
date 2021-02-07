// given a non-empty array A consisting of N integers, return the value of the unpaired element
// N is an odd integer within the range[1..1, 000, 000];

// O(n^2) time -- not efficient
function oddOccurrencesInArray(A) {
   // keep track of how many times an element occurs 
   let elementCount = 0
   // outer loop selects each element one by one
   for (let i = 0; i < A.length; i++) {
      // outer loop keeps track of how many occurrences of the element picked up by the outer loop 
      for (let j = 0; j < A.length; j++) {
         if (A[i] == A[j]) {
            elementCount++;
         }
      }
      // looking for the element that occurs an odd number of times
      if (elementCount % 2 !== 0) {
         return A[i];
      }
   }
}

// O(n) time -- better time complexity; but requires extra space 
function oddOccurrencesInArray(A) {
   // create a hash table; the element will be the key and the count of the element will be the value
   let hashTable = {};

   for (let i = 0; i < A.length; i++) {
      // if element exists as a key already, increment the value 
      if (hashTable[A[i]]) {
         hashTable[A[i]] += 1;
      } else {
         // if it's the first time we're encountering this element, store the element as a key and set the value equal to 1
         hashTable[A[i]] = 1;
      }
   }
   // look for a value that is odd and return the key
   for (properties in hashTable) {
      if (hashTable[properties] % 2 !== 0) {
         return parseInt(properties);
      }
   }
}

oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])