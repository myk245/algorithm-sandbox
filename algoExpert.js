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