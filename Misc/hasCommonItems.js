// write a function that returns true or false depending on whether the two given arrays have any common items
function hasCommonItems(array1, array2) {
   // loop through array1
   for (let num of array1) {
      // at each iteration, check if the current item appears in array2
      if (array2.includes(num)) {
         return true;
      } else {
         num++;
      }
   }
   return false;
}

hasCommonItems([1, 2, 3], [3, 0, -5]) // true