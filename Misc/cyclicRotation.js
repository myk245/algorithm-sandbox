// write a function that given an array A consisting of N integers and an integer K, returns the array A rotated K times
function solution(A, K) {
   K = K % A.length; // to handle large K's
   let elementsToMoveToFront = A.slice(A.length - K);
   let elementsToMoveToBack = A.slice(0, A.length - K);
   return [...elementsToMoveToFront, ...elementsToMoveToBack];
}