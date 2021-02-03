// write a function that returns true or false depending on whether the two given arrays have any common items
function hasCommonItems(array1, array2) {
   // loop through array1
   for (let element of array1) {
      // at each iteration, check if the current item appears in array2
      if (array2.includes(element)) {
         return true;
      } else {
         element++;
      }
   }
   return false;
}

// test cases
// hasCommonItems([1, 2, 3], [3, 0, -5])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], ['l', 'l', 'l', 'l'])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], ['a'])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], [])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], [1, 5, 8, 'l'])