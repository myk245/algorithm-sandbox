// write a function that returns true or false depending on whether the two given arrays have any common items

// O(n) time complexity / O(1) space complexity
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

// O(a+b) time complexity / O(a) space complexity
function hasCommonItems(array1, array2) {
   // loop through first array and create object where keys === items in the array
   let arrayObject = {};

   for (let i = 0; i < array1.length; i++) {
      // if the array item at that index does not exist as a key in our created object, add it
      if (!arrayObject[array1[i]]) {
         const item = array1[i];
         // set the value for this key as 'true'
         arrayObject[item] = true;
      }
   }
   // loop through second array and check if second array exists in created object
   for (let j = 0; j < array2.length; j++) {
      if (arrayObject[array2[j]]) {
         return true;
      }
   }
   return false;
}

// the some() method tests whether at least one element in the array passes the test implemented by the provided function
// O(n) time complexity / O(1) space complexity
function hasCommonItems(array1, array2) {
   return array1.some(item => array2.includes(item))
}

// test cases
// hasCommonItems([1, 2, 3], [3, 0, -5])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], ['l', 'l', 'l', 'l'])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], ['a'])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], [])
// hasCommonItems(['m', 'y', 'p', 'l', 'm', 'z'], [1, 5, 8, 'l'])