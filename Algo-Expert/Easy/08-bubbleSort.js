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