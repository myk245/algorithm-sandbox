function bubbleSort(array) {
   // traverse through array
   for (let i = 0; i < array.length - 1; i++) {
      // compare number with adjacent number
      for (let j = 0; j < array.length - 1 - i; j++) {
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