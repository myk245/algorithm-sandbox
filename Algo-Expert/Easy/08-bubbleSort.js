// O(1) space / O(n^2) time
function bubbleSort(array) {
   // traverse through array
   // i is equal to a complete transversal of the array
   for (let i = 0; i < array.length - 1; i++) {
     // j represents single iteration of array
      for (let j = 0; j < array.length - 1 - i; j++) {
         // compare each number with adjacent number
         if (array[j] > array[j + 1]) {
            // if numbers not sorted, swap them
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
         }
      }
   }
   return array;
}

function bubbleSort(array) {
   let sorted = false;
   let round = 0;

   while (!sorted) {
      // tentatively set sorted to true
      sorted = true;
      for (let i = 0; i < array.length - 1 - round; i++) {
         if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            // if number is bigger than adjacent one, the array is not sorted -- set sorted back to false
            sorted = false;
         }
      }
      round++;
   }
   return array;
}