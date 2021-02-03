// given an array of integers, return the smallest positive integer not in the array

// initial solution -- not the most efficient
function solution(A) {
   let smallestPosInt = 1;
   while (A.includes(smallestPosInt)) {
      smallestPosInt++;
   }
   return smallestPosInt;
}