
function findFulcrum(numbers) {
   // find the sum of all numbers
   let sum = numbers.reduce((sum, number) => sum + number, 0);
   // keep track of sum of numbers to left
   let leftSum = 0;

   // loop through array
   for (let i = 0; i < numbers.length; i++) {
      // will let us know if the value of left sum is equal to value of sum of numbers on the right
      if (leftSum === sum - numbers[i] - leftSum) {
         return i;
      }
      // if not the index we are looking for, update leftSum and move forward with loop
      leftSum += numbers[i];
   }
   // return -1 if no such fulcrum exists
   return -1;
}