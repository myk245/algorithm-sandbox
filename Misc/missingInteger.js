// given an array of integers, return the smallest positive integer not in the array

// initial solution -- not the most efficient
// O(N**2) time
function solution(A) {
   // smallest positive integer not in the array has to be between the smallest and the biggest number that does appear in the array
   let sortedArray = A.sort();
   // smallest possible positive integer is 1 
   let smallestPosInt = 1;
   // check if sorted array includes smallestPosInt
   while (sortedArray.includes(smallestPosInt)) {
      smallestPosInt++;
   }
   return smallestPosInt;
}
